import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Shared/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Banner from "./Components/Home/Banner/Banner";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Banner />
          </Route>
          <Route path="/home">
            <Banner />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
