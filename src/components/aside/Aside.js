import React from 'react'
import { Switch, Route } from 'react-router'

import HomeSide from './HomeSide'
// import BlogsBody from '../body/BlogsBody'
import BurgersBody from '../body/BurgersBody'

// import InfoBurg from '../../RecipeData'
import {BlogData, InfoBurg} from '../blogs/BlogData'
import BlogSide from './BlogSide'
import RecipeSide from './RecipeSide'

function Aside() {
    // console.log(BlogData);
    return (
        <div className="asideContainer">
            <Switch>
                <Route exact path='/'>
                    <HomeSide InfoBurg={InfoBurg[0]} BlogData={BlogData[1]}/>
                </Route>
                <Route exact path='/blogs'>
                    <BlogSide InfoBurg={InfoBurg[0]} BlogData={BlogData[1]}/>
                </Route>
                <Route path='/Dreams'> {/* First Blog */}
                    <BurgersBody />    {/* BlogSide */}
                </Route>
                <Route path='/Oline'> {/* second Blog */}
                    <BurgersBody />   {/* BlogSide */}
                </Route>
                <Route path='/third'> {/* third Blog */}
                    <BurgersBody />   {/* BlogSide */}
                </Route>
                <Route exact path='/burgers'>
                    <BurgersBody/> {/* HomeSide */}
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
            </Switch>
        </div>
    )
}

export default Aside
