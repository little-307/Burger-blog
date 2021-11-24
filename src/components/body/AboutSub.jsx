import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BlogData } from '../blogs/BlogData';

function AboutSub(props) {
    return (
        <div>
            {BlogData.map((author, i) => (
            <Container key={i}>
                <Row>
                {/* avatar  */}
                    <Col><img src={author.avatar} alt=""/></Col>
                {/* Author name  */}
                    <Col>{author.author}</Col>      
                </Row>
                <Row>
                    {/* About Author */}
                    <Col>{author.aboutAuthor}</Col>
                </Row>
            </Container>
        ))}
        </div>
    )
}

export default AboutSub
