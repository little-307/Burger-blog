import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SiteData from '../../RecipeData';

function RecipeSide() {
    return(
        <>
            {SiteData.map((recipe, i) => (
                <Card key={i}>
                    <Row>
                        <Col className="card__img" sm={3}>
                            <img src={recipe.image} alt="Flower1.jpg"/>
                        </Col>
                        <Col className="card__body">
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


export default RecipeSide
