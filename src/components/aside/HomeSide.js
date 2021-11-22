import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function HomeSide(props) {
    console.log(props.BlogData);
    return (
        <div className="sideContainer">
            <h2> Featured </h2>
            <Card className="sideCard" style={{ width: '14rem' }}>
                <Card.Img variant="top" src={props.InfoBurg.image} />
                <Card.Body>
                    <Card.Title>{props.InfoBurg.title}</Card.Title>
                    <Card.Text>
                        <p>{props.InfoBurg.description}</p>
                    </Card.Text>
                    <Button variant="primary"><Link to={props.InfoBurg.link}>See Recipe</Link></Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={props.BlogData.image} />
                <Card.Body>
                    <Card.Title>{props.BlogData.title}</Card.Title>
                    <Card.Text>
                        <p>{props.BlogData.description}</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={props.BlogData.avatar} />
                <Card.Body>
                    <Card.Title>{props.BlogData.author}</Card.Title> 
                    <Card.Text>
                    Some quick PANCAKES text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomeSide
