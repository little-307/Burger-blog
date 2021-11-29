import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BlogData } from '../blogs/BlogData';

function AboutBody() {
    return (
        <>
        <h1 className="head">About The Authors</h1>
        {BlogData.map((blog, i) => (
            <Container className="authorsContainer" key={i}>
                <Row className="authors">
                {/* avatar  */}
                    <Col><img className="avatar" src={blog.avatar} alt=""/></Col>
                    <Col>{blog.author}</Col>
                </Row>
                <Row>
                    <Col className="authorInfo">
                        {blog.aboutAuthor.map((aboutAuthor, i) => (
                            <p>{aboutAuthor}</p>
                        ))}
                        
                    </Col>
                </Row>
            </Container>
        ))}
        </>
        
    )
}

export default AboutBody


// {blog.aboutAuthor}