import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Aux from "../Aux";

const Layout = () => {
  return (
    <Router>
      <Aux>
        <Header />
        <Main />
        <Footer />
      </Aux>
    </Router>
  );
};

export default Layout;
