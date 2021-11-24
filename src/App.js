import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollUpButton from 'react-scroll-to-top';


import Header from './components/header/Header'
import NavbarComp from './components/NavbarComp';


import Body from './components/body/Body';
import Aside from './components/aside/Aside';
// import AboutSub from './components/body/AboutSub';



function App() {
  return (
    <div className="App">
      <header>
        <div className="colorBar"></div>
        <Header />
        
      </header>
      <NavbarComp />
      <div className="appContainer">
        <Body />
        <Aside />
      </div>
      {/* <container className="sub">
        <AboutSub />
      </container> */}
  {/* scroll to top goes here */}
      <ScrollUpButton smooth/>
      <NavbarComp />
  {/* switch goes here */}
            {/* <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/blogs">
                    <Blogs />
                </Route>
                <Route path="/burgers">
                    <Burgers />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch> */}
      
    </div>
  );
}

export default App;
