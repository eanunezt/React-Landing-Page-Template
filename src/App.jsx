import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Program } from "./components/program";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  function Redirect() {
    // 👇️ redirect to external URL
    window.location.replace('https://interlemd.edu.co');
  
    return null;
  }

  return (
    <Router>
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Program data={landingPageData.Program} contact={landingPageData.Contact}/>
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />   
      <Routes>
      <Route exact path='/campus/' element={< Redirect />}></Route>
      <Route exact path='/chamilo/' element={< Redirect />}></Route>
      <Route exact path='/instituto/' element={< Redirect />}></Route>
      </Routes>
    </div>
    
    </Router>
  );
};

export default App;
