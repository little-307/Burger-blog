import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { BlogData } from '../blogs/BlogData';

function BlogSide() {
    return (
        <div>
            {BlogData.map((blog, i) => (
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>{blog.description}</Card.Text>
                        <Button variant="warning"><Link to={blog.link}>Read it!</Link></Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default BlogSide
