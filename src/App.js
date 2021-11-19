import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollUpButton from 'react-scroll-to-top';

import {Switch, Route} from 'react-router-dom';
import Header from './components/header/Header'
import NavbarComp from './components/NavbarComp';
import About from './components/about/About';
import Home from './components/home/Home';
import Blogs from './components/blogs/Blogs';

import Burgers from './components/body/BurgersBody';

import Body from './components/body/Body';
import Aside from './components/aside/Aside';



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
  {/* scroll to top goes here */}
      <ScrollUpButton smooth/>
  {/* switch goes here */}
            <Switch>
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
            </Switch>
      
    </div>
  );
}

export default App;
