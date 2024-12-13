import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreDetail from "./pages/stores/StoreDetail";
import Layout from "./styles/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import StoreSearch from "./pages/stores/StoreSearch";
import Reservation from "./pages/mypage/Reservation";
import AddReview from "./pages/mypage/AddReview";
import ReviewList from "./pages/mypage/ReviewList";
import EditReview from "./pages/mypage/EditReview";
import LoginHome from "./pages/signup/LoginHome";
import Login from "./pages/signup/Login";
import Signup from "./pages/signup/Signup";
import PcBasicModal from "./components/PcBasicModal";
import { useState } from "react";
import Member from "./pages/member/Member";
import MemberInfo from "./pages/member/MemberInfo";
import UserStore from "./context/UserStore";
import BrandWindow from "./pages/brand/BrandWindow";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/stores/:storeNo" element={<StoreDetail />} />
              <Route path="/stores/categories" element={<StoreSearch />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/AddReview" element={<AddReview />} />
              {/*             <Route
              path="/AddReview?userId=:reservation.userId&:storeName=:reservation.storeName&rTime=:reservation.rtime"
              element={<AddReview />}
            /> */}
              <Route path="/auth" element={<ReviewList />} />
              <Route path="/EditReview" element={<EditReview />} />
              <Route path="/loginhome" element={<LoginHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Member" element={<Member />} />
              <Route path="/member/MemberInfo" element={<MemberInfo />} />
              <Route path="/brand/:brandNo" element={<BrandWindow />} />
            </Route>
          </Routes>

        </Router>
      </UserStore>
    </>
  );
}

export default App;
