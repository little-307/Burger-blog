import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const BlogPost = (props) => {
    return(
        <>
        <div className="blogPost">
        <Container className="blogHero">
            <Row>
                <Col>
                <img src={props.BlogData.image} alt=""/>
                </Col>
                <Col>
                <img src={props.BlogData.avatar} alt=""/>
                </Col>
            
            </Row>
        </Container>
        
        <Container className="description">
            <Row>
                <Col>
                    <p>{props.BlogData.description}</p>
                   
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
                    <p>{props.BlogData.date} BY: {props.BlogData.author}</p>
                </Col>
                
            </Row>
        </Container>
        <Container className="blogBody">
            <Row>
                <Col>
                    {props.BlogData.body.map((body, i) => (
                        <p>{body}</p>
                   ))}
                    
                </Col>
            </Row>
        </Container>
        
        </div>
        </>
    )
}

export default BlogPost
