import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AdminNavbar from "./components/admin/Navbar";
import Footer from "./components/admin/Footer";
import Investments from "./components/admin/Investments";
import Investers from "./components/admin/Investors";
import Employees from "./components/admin/Employees";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MyInvestments from "./components/Investments";
import MutualFunds from "./components/admin/MutualFunds";
import UserMutualFunds from "./components/MutualFunds";
import { useState } from "react";
import Help from "./components/Help";
import Dashboard from "./components/Dashboard";
import NewInvestment from "./components/NewInvestment";

// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./redux/action";

const App = () => {
  const [adminLoggedIn, setAdminLoggedIn] = useState(1);
  const [userLoggedIn, setUserLoggedIn] = useState(0);
  // const myState = useSelector((state) => state.changeTheNumber);
  // const dispatch = useDispatch();
  return (
    <>
      <Router>
        {adminLoggedIn ? (
          <AdminNavbar setAdminLoggedIn={setAdminLoggedIn} />
        ) : (
          <Navbar
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
          />
        )}
        <Routes>
          {userLoggedIn || adminLoggedIn === 1 ? (
            <>
              {/* {userLoggedIn === 1 ? (
                <> */}
              <Route path="/" exact element={<Home />} />
              <Route path="dashboard" exact element={<Dashboard />} />
              <Route path="new_investment" exact element={<NewInvestment />} />
              <Route path="my_investments" exact element={<MyInvestments />} />
              <Route path="mutual_funds" exact element={<UserMutualFunds />} />
              <Route path="help" exact element={<Help />} />
              <Route path="about" exact element={<About />} />
              {/* </>
              ) : (
                <Route path="*" element={<Navigate to="/errorUser" />} />
              )} */}
              {/* {adminLoggedIn === 1 ? (
                <> */}
              <Route path="admin" exact element={<h1>Home</h1>} />
              <Route path="admin/investors" element={<Investers />} />
              <Route path="admin/investments" element={<Investments />} />
              <Route path="admin/employees" element={<Employees />} />
              <Route path="admin/funds" element={<MutualFunds />} />
              {/* </>
              ) : (
                <Route path="*" element={<Navigate to="/errorAdmin" />} />
              )} */}
            </>
          ) : (
            <Route path="*" element={<Navigate to="/error404" />} />
          )}
        </Routes>
        <Footer />
      </Router>
    </>
    // <>
    //   <button onClick={() => dispatch(decrement())}>-</button>
    //   <h1>{myState}</h1>
    //   <button onClick={() => dispatch(increment())}>+</button>
    // </>
  );
};

export default App;
