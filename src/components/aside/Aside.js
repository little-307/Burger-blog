import React from 'react'
import { Switch, Route } from 'react-router'

import HomeSide from './HomeSide'
// import BlogsBody from '../body/BlogsBody'
import BurgersBody from '../body/BurgersBody'

// import InfoBurg from '../../RecipeData'
import {BlogData, InfoBurg} from '../blogs/BlogData'

function Aside() {
    // console.log(BlogData);
    return (
        <div className="asideContainer">
            <Switch>
                <Route exact path='/'>
                    <HomeSide InfoBurg={InfoBurg[0]} BlogData={BlogData[1]}/>
                </Route>
                <Route exact path='/blogs'>
                    <HomeSide />
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
                    <BurgersBody /> {/* RecipeSide (bootstrap style cards same info as BurgerBody) */}
                </Route>
                <Route path='/bacon'>
                    <BurgersBody />  {/* RecipeSide (bootstrap style cards same info as BurgerBody) */}
                </Route>
                <Route path='/brussel'>
                    <BurgersBody />  {/* RecipeSide (bootstrap style cards same info as BurgerBody) */}
                </Route>
            </Switch>
        </div>
    )
}

export default Aside
