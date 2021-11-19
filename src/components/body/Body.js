import { Route, Switch } from 'react-router-dom';
import HomeBody from './HomeBody';
import BlogsBody from './BlogsBody';
import BurgersBody from './BurgersBody';
import AboutBody from './AboutBody';
import ContactBody from './ContactBody';
import RecipePage from './RecipePage';
import {InfoBurg} from '../blogs/BlogData'
// import Burger1 from './Burger1';
// import Burger2 from './Burger2';
// import Burger3 from './Burger3';

// import RecipeBody from './BurgersBody';

const Body = () => {
    console.log(InfoBurg[0].title);
    return (
        <div className="body">
            <h1>Test</h1>
            <Switch>
                <Route exact path='/'>
                    <HomeBody/>
                </Route>
                <Route exact path='/blogs'>
                    <BlogsBody/>
                </Route>
                <Route exact path='/burgers'>
                    <BurgersBody/>
                </Route>
                <Route path='/poblano'>
                    <RecipePage InfoBurg={InfoBurg[0]}/>
                </Route>
                <Route path='/bacon'>
                    <RecipePage InfoBurg={InfoBurg[1]}/>
                </Route>
                <Route path='/brussel'>
                    <RecipePage InfoBurg={InfoBurg[2]}/>
                </Route>
                
                <Route path='/about'>
                        <AboutBody/>
                </Route>
                <Route path='/contact'> 
                    <ContactBody/>
                </Route>
                {/* <Route path='/recipe'> 
                    <RecipeBody/>
                </Route> */}
                {/* <Route path='*'> 
                        <Error/>
                </Route> */}
            </Switch>
        </div>
    )
}

export default Body