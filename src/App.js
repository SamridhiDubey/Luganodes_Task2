import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Home from './components/home';
import Stake from './components/stake';
import ErrorBoundary from './ErrorBoundary';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/stake"
          element={
          <>
            <SignedIn>
              <Stake />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
  <ErrorBoundary>
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  </ErrorBoundary>
  );
}

export default App;
