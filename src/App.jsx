import { store } from "./context/store";
import { Provider } from "react-redux";
import MakeOrder from "./pages/MakeOrder";
import CreateOrder from "./pages/CreateOrder";
import CreateBatch from "./pages/CreateBatch";
import CreateProduct from "./pages/CreateProduct";
import MaterialsView from "./pages/MaterialsView";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./components/EmailVerification";
import ResetPassword from "./components/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Login />}> 
          <Route path="login" elemnt={LoginPage}/>
          <Route path="forgott" elemnt={ForgotPassword}/>
          <Route path="emailVerification" elemnt={EmailVerification}/>
          <Route path="resetPassword" element={ResetPassword}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
      <MaterialsView />
      <ToastContainer
       position="top-center"
       autoClose={1000}
      />
    </Provider>
  );
}

export default App;
