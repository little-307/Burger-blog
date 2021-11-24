import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeHead from './HomeHead';
import BlogsHead from './BlogsHead';
import BurgersHead from './BurgersHead';
import RecipeHead from './RecipeHead';
import AboutHead from './AboutHead';
import ContactHead from './ContactHead';

function Header() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <HomeHead/>
                </Route>
                <Route exact path='/blogs'>
                    <BlogsHead/>
                </Route>
                <Route path='/Dreams'>
                    <BlogsHead/>
                </Route>
                <Route path='/Oline'>
                    <BlogsHead/>
                </Route>
                <Route path='/Teddy'>
                    <BlogsHead/>
                </Route>
                <Route path='/about'>
                    <AboutHead/>
                </Route>
                <Route path='/contact'> 
                    <ContactHead/>
                </Route>
                <Route exact path='/burgers'>
                    <BurgersHead/>
                </Route>
                <Route path='/poblano'>
                    <RecipeHead/>
                </Route>
                <Route path='/bacon'>
                    <RecipeHead/>
                </Route>
                <Route path='/brussel'>
                    <RecipeHead/>
                </Route>
                {/* <Route exact path='/index'> 
                    <Index/>
                </Route> */}
                {/* <Route path='*'> 
                        <Error/>
                </Route> */}
            </Switch>
        </div>
    )
}

export default Header
