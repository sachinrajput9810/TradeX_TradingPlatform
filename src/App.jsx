import Navbar from "./Page/Navbar/Navbar";
import Home from "./Page/Home/Home";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Page/Portfolio/Portfolio";
import Activity from "./Page/Activity/Activity";
import Wallet from "./Page/Wallet/Wallet";
import Withdrawal from "./Page/Withdrawal/Withdrawal";
import PaymentDetails from "./Page/Payment_Details/PaymentDetails";
import StockDetails from "./Page/Stock Details/StockDetails";
import Profile from "./Page/Profile/Profile";
import SearchCoin from "./Page/Search/SearchCoin";
import Notfound from "./Page/NotFound/Notfound";
import Watchlist from "./Page/Watchlist/Watchlist";
import Auth from "./Page/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./State/Auth/Action";

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log("Auth -- ", auth);

  useEffect(() => {
   dispatch(getUser(auth.jwt ||  localStorage.getItem("jwt")));
  }, [auth.jwt]);

  return (
    <div>
      
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/payment-details" element={<PaymentDetails />} />
            <Route path="/market/:id" element={<StockDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchCoin />} />
            {/* <Route path="*" element={<Notfound />} /> */}
          </Routes>
        </div>
      ) : <Auth/> }
    </div>
  );
}

export default App;
