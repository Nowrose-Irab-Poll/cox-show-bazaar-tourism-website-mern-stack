import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Shared/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Banner from "./Components/Home/Banner/Banner";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home/Home";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider className="App">
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
