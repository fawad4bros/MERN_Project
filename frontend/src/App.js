// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/newPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/place/new" element={<NewPlace />}></Route>
          <Route path="*" element={<Navigate to="/users" />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* 
    v6 <Routes> >= v5 <Switch>
    v6 <Navigate> = v5 <Redirect>
    v6 <Route path="/users" element={<Users />}></Route>
    =
    v5 <Route path="/users" exact> <Users /> </Route>
    <Link> Blocks the default behavior of <a> = <a>
  */
}
