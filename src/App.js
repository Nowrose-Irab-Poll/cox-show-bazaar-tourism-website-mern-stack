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

function App() {
  return (
    <AuthProvider>
      <div className="App">
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
