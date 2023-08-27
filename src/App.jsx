import React from 'react';
import Layout from "./layout";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./AuthContext"
import { HeroSection, BrandSection, ThirdSection } from './components/index.js';
import Home from './components/pages/Home';
import { ContactSales, Developers, Pricing, Resources, Solutions, Products } from './components/pages/index.js';

const App = () => {
  return (
    <div className="h-screen">
      <Router>
        {/* <Navbar />
        <HeroSection />
        <Login/>
        <BrandSection />
        <ThirdSection /> */}
<AuthProvider>
        <Routes>
         <Route exact path="/" component={Home} />
            {/*<Route path="./pages/developers" component={Developers} />
          <Route path="/product" component={Products} />
          <Route path="/resources" component={Resources} />
          <Route path="/contactsale" component={ContactSales} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/solutions" component={Solutions} /> */}
          <Route path = "/" element = { <Layout></Layout> }>
          <Route index element = { <Login></Login> }></Route>
          <Route path = "/signup" element = { <Signup></Signup> } ></Route>
          <Route path = "/profile" element = { <Profile></Profile> }></Route>
          </Route>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
