import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function HomeSide(props) {
    console.log(props.InfoBurg);
    return (
        <div className="sideContainer">
            <h2> Featured Posts</h2>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={props.BlogData.image} />
                <Card.Body>
                    <Card.Title>{props.BlogData.title}</Card.Title>
                    <Card.Text>
                        <p>{props.BlogData.snipet}</p>
                    </Card.Text>
                    <Button variant="warning">READ IT!</Button>
                </Card.Body>
            </Card>
            <Card className="sideCard" style={{ width: '14rem' }}>
                <Card.Img variant="top" src={props.InfoBurg.cardImage} />
                <Card.Body>
                    <Card.Title>{props.InfoBurg.title}</Card.Title>
                    <Card.Text>
                        <p>{props.InfoBurg.snipet}</p>
                    </Card.Text>
                    <Button variant="warning"><Link to={props.InfoBurg.link}>See Recipe</Link></Button>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={props.BlogData.avatar} />
                <Card.Body>
                    <Card.Title>{props.BlogData.author}</Card.Title> 
                    <Card.Text>{props.BlogData.aboutAuthor[0]}</Card.Text>
                    <Button variant="warning"><Link to={props.BlogData.link}>ABOUT</Link></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomeSide
