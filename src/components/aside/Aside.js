import React from 'react'
import { Switch, Route } from 'react-router'
import {BlogData, InfoBurg} from '../blogs/BlogData'

import HomeSide from './HomeSide'
import BlogSide from './BlogSide'
import RecipeSide from './RecipeSide'

function Aside() {
    console.log(BlogData);
    return (
        <div className="asideContainer">
            <Switch>
                <Route exact path='/'>
                    <HomeSide InfoBurg={InfoBurg[0]} BlogData={BlogData[1]}/>
                </Route>
                <Route exact path='/blogs'>
                    <HomeSide InfoBurg={InfoBurg[0]} BlogData={BlogData[1]}/>
                </Route>
                <Route path='/Dreams'> {/* First Blog */}
                    <BlogSide />    {/* BlogSide */}
                </Route>
                <Route path='/Oline'> {/* second Blog */}
                    <BlogSide />   {/* BlogSide */}
                </Route>
                <Route path='/Teddy'> {/* third Blog */}
                    <BlogSide />   {/* BlogSide */}
                </Route>
                <Route exact path='/burgers'>
                    <HomeSide InfoBurg={InfoBurg[0]} BlogData={BlogData[1]}/> 
                </Route>
                <Route path='/poblano'>
                    <RecipeSide /> {/* RecipeSide (bootstrap style cards same info as BurgerBody) */}
                </Route>
                <Route path='/bacon'>
                    <RecipeSide />  {/* RecipeSide (bootstrap style cards same info as BurgerBody) */}
                </Route>
                <Route path='/brussel'>
                    <RecipeSide />  {/* RecipeSide (bootstrap style cards same info as BurgerBody) */}
                </Route>
                <Route exact path='/contact'>
                    <HomeSide InfoBurg={InfoBurg[0]} BlogData={BlogData[1]}/> 
                </Route>
            </Switch>
        </div>
    )
}

export default Aside
