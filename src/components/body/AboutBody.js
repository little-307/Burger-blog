import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BlogData } from '../blogs/BlogData';

function AboutBody() {
    return (
        <>
        <h1 className="head">About Body Content</h1>
        {BlogData.map((blog, i) => (
            <Container className="authors" key={i}>
                <Row >
                {/* avatar  */}
                    <Col><img className="avatar" src={blog.avatar} alt=""/></Col>
                    <Col>{blog.author}</Col>
                </Row>
                <Row>
                    
                    
                    {/* {blog.aboutAuthor} */}
                </Row>
            </Container>
        ))}
        </>
        
    )
}

export default AboutBody


// {blog.aboutAuthor}