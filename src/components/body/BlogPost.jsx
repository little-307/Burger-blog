import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const BlogPost = (props) => {
    return(
        <>
        <div className="blogPost">
        <img src={props.BlogData.image} alt=""/>
        <Container className="description">
            <Row>
                <Col>
                    <p>{props.BlogData.description}</p>
                    {/* <p>{props.BlogData.servings}</p> */}
                </Col>
            </Row>
        </Container>
        <Container className="title bg-warning" >
            <Row>
                <Col>
                    <h1> {props.BlogData.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{props.BlogData.episode}</p>
                </Col>
            </Row>
        </Container>
        
        <Container className="ingredients bg-warning">
            <Row>
                <Col> 
                   {/* {props.InfoBurg.ingredients.map((ingredient, i) => (
                     <h4>{ingredient}</h4>  
                   ))} */}
                    {/* <h4>{props.InfoBurg.ingredients}</h4> */}
                </Col>
                <Col>
                    {/* {props.InfoBurg.ingredientsB.map((ingredient, i) => (
                     <h4>{ingredient}</h4>  
                   ))} */}
                </Col>
            </Row>
        </Container>
        <Container className="instructions">
            <Row>
                <Col>
                    {/* {props.InfoBurg.instructions.map((instruction, i) => (
                        <h6>{instruction}</h6>
                        ))} */}
                    {/* <p>{props.InfoBurg.note}</p> */}
                    
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </Container>

        </div>
        </>
    )
}

export default BlogPost
