import React from "react";
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from "./Context/AuthProvider";
import Home from "./Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import OrderPlace from "./OrderPlace/OrderPlace";
import Explore from "./Explore/Explore";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRouter from "./Pages/Login/PrivateRouter/PrivateRouter";

function App() {
  return (
    <AuthProvider>
      <Router>
    <Switch>
      <Route exact path="/">
     <Home></Home>
      </Route>
      <Route path="/home">
     <Home></Home>
      </Route>
      <Route path="/login">
     <Login></Login>
      </Route>
      <PrivateRouter path="/orderplace/:orderId">
     <OrderPlace></OrderPlace>
      </PrivateRouter>
      <Route path="/explore">
     <Explore></Explore>
      </Route>
      <Route path="/dashboard">
     <Dashboard></Dashboard>
      </Route>
      <Route path="/resister">
     <Register></Register>
      </Route>
      <Route path="*">
      <PageNotFound></PageNotFound>
      </Route>
    </Switch>
  </Router>
    </AuthProvider>
  );
}

export default App;
