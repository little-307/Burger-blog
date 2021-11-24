import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
// import { useParams, } from 'react-router-dom';
// import App from '../../App';
// import InfoBurg from '../../RecipeData';

const RecipePage = (props) => {
    // console.log(props);
      
    
    return (
        <>
        <div className="recipePage">
        {/* container for recipe title and episode */}
        <Container className="title bg-warning" >
            <Row>
                <Col>
                    <h1> {props.InfoBurg.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{props.InfoBurg.episode}</p>
                </Col>
            </Row>
        </Container>
        <Container className="description">
            <Row>
                <Col>
                    <p>{props.InfoBurg.description}</p>
                    <p>{props.InfoBurg.servings}</p>
                </Col>
            </Row>
        </Container>
        <Container className="ingredients bg-warning">
            <Row>
                <Col> 
                   {props.InfoBurg.ingredients.map((ingredient, i) => (
                     <h4>{ingredient}</h4>  
                   ))}
                    {/* <h4>{props.InfoBurg.ingredients}</h4> */}
                </Col>
                <Col>
                    {props.InfoBurg.ingredientsB.map((ingredient, i) => (
                     <h4>{ingredient}</h4>  
                   ))}
                </Col>
            </Row>
        </Container>
        <Container className="instructions">
            <Row>
                <Col>
                {props.InfoBurg.instructions.map((instruction, i) => (
                     <h6>{instruction}</h6>
                    ))}
                    <p>{props.InfoBurg.note}</p>
                    
                </Col>
                <Col>
                    <img src={props.InfoBurg.image} alt=""/>
                </Col>
            </Row>
        </Container>
        </div>
        <div>

        </div>
        </>
    )
}

export default RecipePage
