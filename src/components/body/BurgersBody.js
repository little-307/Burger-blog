// import 'bootstrap/dist/css/bootstrap.min.css';

//  import Image from "../../../src/assets/Flower1.jpg"; 
//  import Image2 from "../../../src/assets/Flower2.jpg";
//  import Image3 from "../../../src/assets/FamLines1.jpg";
//  import Cards from "./Cards";
 import { Card, Col, Row, } from 'react-bootstrap';
 import { Link } from 'react-router-dom';

//  import Content from "../../Content"
 import SiteData from "../../RecipeData";

//  import Burger1 from './Burger1';
// import Burger2 from './Burger1';
// import Burger3 from './Burger1';

// import Card from "../../../node_modules/react-bootstrap/Card";
// import Button from "../../../node_modules/react-bootstrap/Button";
// import info from "../../SiteData"

const BurgersBody = () => {
        return(
            <>
                {SiteData.map((recipe, i) => (
                    <Card className="burgerCard" key={i}>
                        <Row className="">
                            <Col className="card__img" sm={3}>
                                <img src={recipe.image} alt="Flower1.jpg"/>
                            </Col>
                            <Col className="burgerCard__body">
                                <div>
                                    <h4 className="card__title">{recipe.title} </h4>
                                    <p className="card__description">{recipe.description} </p>
                                    <button className="card__btn"><Link to={recipe.link}>SEE RECIPE</Link></button>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                ))}
                
            </>
       )
}

export default BurgersBody










