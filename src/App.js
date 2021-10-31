import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Shared/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ManageAllOrders from "./Components/Orders/ManageAllOrders/ManageAllOrders";
import MyOrders from "./Components/Orders/MyOrders/MyOrders";
import AddService from "./Components/AddService/AddService";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <div className="App d-flex flex-column min-vh-100">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/place-order/:id">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/manage-orders">
              <ManageAllOrders />
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/add-new-service">
              <AddService />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
