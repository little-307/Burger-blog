import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SiteData from '../../RecipeData';

function RecipeSide() {
    return(
        <>
            {SiteData.map((recipe, i) => (
                <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>{recipe.description}</Card.Text>
                    <Button variant="warning"><Link to={recipe.link}>Read it!</Link></Button>
                </Card.Body>
            </Card>
            ))}
            
        </>
   )
}


export default RecipeSide
