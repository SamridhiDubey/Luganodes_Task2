import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";

// coin id - cardano, kusama, polkadot
//currency id - 

function Stake() {
    const [tok, setTok] = useState(0);
    const name = ['AVA', 'DOT', 'KSM'];
    const handleSetTok = (selectedValue) => {
        setTok(selectedValue);
    };
    const [val, setVal] = useState(-1);
    const [usval, setusVal] = useState(-1);
    const arr = [-1, -1, -1];
    const usarr = [-1, -1, -1];
    
    useEffect(() => {
        const debouncedFetchData = setTimeout(() => {
            fetchData();
          }, 1000);
      
          return () => clearTimeout(debouncedFetchData);
    }, [tok]);

    const fetchData = () => {
        if(tok===0) {
            if(arr[0]!=-1) setVal(arr[0]);
            else {
                axios
                .get("https://api.koios.rest/api/v0/pool_delegators?_pool_bech32=pool1qvudfuw9ar47up5fugs53s2g84q3c4v86z4es6uwsfzzs89rwha")
                .then((response) => {
                    const data = response.data;
                    // Extract the "amount" values from the response array and calculate the total sum
                    const total = data.reduce((sum, item) => sum + parseInt(item.amount)/1000000, 0);
                    setVal(total);
                  })
                .catch((error) => console.error("Error fetching data:", error));
                
                axios
                .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
                .then((response) => {
                  const cur = response.current_price;
                  usarr[0] = cur*arr[0];
                  setusVal(usarr[0]);
                })
                .catch((error) => console.error("Error fetching data:", error));
                arr[0] = val;
            }
        }
        else if(tok===1) {
            if(arr[1]!=-1) setVal(arr[1]);
            else {
                axios
                .post("https://polkadot.api.subscan.io/api/scan/staking/validator/bond_stat", {
                    stash: "1vTaLKEyj2Wn9xEkUGixBkVXJAd4pzDgXzz9CuVjhVqhHRQ",
                }, {
                    headers: {
                    "Content-Type": "application/json",
                    "X-API-Key": process.env.REACT_APP_BLOCK_API_KEY,
                    },
                })
                .then((response) => {
                    const data = response.data;
                    const total = data.data.list.reduce((sum, item) => sum + parseFloat(item.total_bond)/200000000000, 0)
                    setVal(total);
                    arr[1] = total;
                })
                .catch((error) => console.error("Error fetching data:", error));

                axios
                .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=polkadot&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
                .then((response) => {
                  const cur = response.current_price;
                  usarr[1] = cur*arr[1];
                  setusVal(usarr[1]);
                })
                .catch((error) => console.error("Error fetching data:", error));

                arr[1] = val;
            }
        }
        else {
            if(arr[2]!=-1) setVal(arr[2]);
            else {
                axios
                .post("https://kusama.api.subscan.io/api/scan/staking/validator/bond_stat", {
                    stash: "E8MByjWbS49hmzFM1U5rvFJES1Xgz1TSBAZLiYqZQiFTNUY",
                }, {
                    headers: {
                    "Content-Type": "application/json",
                    "X-API-Key": process.env.REACT_APP_BLOCK_API_KEY,
                    },
                })
                .then((response) => {
                    const data = response.data;
                    const total = data.data.list.reduce((sum, item) => sum + parseFloat(item.total_bond)/(200000000000), 0)
                    setVal(total);
                    arr[2] = total;
                })
                .catch((error) => console.error("Error fetching data:", error));

                axios
                .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=kusama&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
                .then((response) => {
                  const cur = response.current_price;
                  usarr[2] = cur*arr[2];
                  setusVal(usarr[2]);
                })
                .catch((error) => console.error("Error fetching data:", error));

                arr[2] = val;
            }
        }
    }

    const user = useUser();
    return(
        <>
            <Navbar/>
                <div className="py-12 md:py-24 h-screen w-auto">
                    <div className="grid mt-40 max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
                        <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
                            <img src={user?.user.profileImageUrl} className="rounded-full h-20 w-20" alt="" />
                            <h1 className="mb-2 text-3xl font-bold text-gray-600 md:text-4xl lg:text-5xl md:mb-4 lg:mb-8">Welcome {user?.user.fullName}</h1>
                                <p className="mb-6 text-lg text-gray-500 xl:text-xl lg:mb-8 xl:mb-10">Track Lugandose validated Stake amount across PolkaDot, Cardano and Kusama</p>
                                <div className="flex mb-6 space-x-4">
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg
                                className="w-4 h-4 fill-current text-gray-400"
                                viewBox="0 0 20 20"
                                >
                                <path
                                fillRule="evenodd"
                                d="M6.293 6.707a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                />
                                </svg>
                            </div>
                                </div>
                            </div>
                            <div className="order-1 col-span-2 lg:block">
                                
                            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                                <div className="space-x-2 flex text-sm">
                                    <label>
                                    <input className="sr-only peer" name="size" type="radio" value="0" checked={tok===0} onChange={() => handleSetTok(0)} />
                                    <div className="w-24 mx-3 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        Cardano
                                    </div>
                                    </label>
                                    <label>
                                    <input className="sr-only peer" name="size" type="radio" value="1" checked={tok===1} onChange={() => handleSetTok(1)}/>
                                    <div className="w-24 mx-3 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        PolkaDot
                                    </div>
                                    </label>
                                    <label>
                                    <input className="sr-only peer" name="size" type="radio" value="2" checked={tok===2} onChange={() => handleSetTok(2)}/>
                                    <div className="w-24 mx-3 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        Kusama
                                    </div>
                                    </label>
                                </div>
                                </div>
                                <div className="font-bold text-gray-600">{val} {name[tok]}</div>
                                {usval!==-1 && <div className="font-bold text-gray-600">$ {usval}</div>}
                                {usval===-1 && <div className="font-bold text-gray-600">Rate Limit! Check Price in USD on browser</div>}
                            </div>
                    
                </div>
                </div>
            <Footer/>
        </>
    );
}

export default Stake;