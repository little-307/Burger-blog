// import 'bootstrap/dist/css/bootstrap.min.css';

 import Image from "../../../src/assets/Flower1.jpg"; 
 import Image2 from "../../../src/assets/Flower2.jpg";
 import Image3 from "../../../src/assets/FamLines1.jpg";
 import C1 from "../../../src/assets/TedLogic.jpg";
 import C2 from "../../../src/assets/TrampHead.jpg";
 import C3 from "../../../src/assets/DreamsHead.jpg";
//  import Cards from "./Cards";
 import { Card, Col, Row, } from 'react-bootstrap';
 import { Carousel } from 'react-bootstrap';
//  import Slider from './Slider';

 import Content from "../../Content"
import { AboutInfo } from "../blogs/BlogData";

// import Card from "../../../node_modules/react-bootstrap/Card";
// import Button from "../../../node_modules/react-bootstrap/Button";
// import info from "../../SiteData"

const HomeBody = () => {
    // return (
        return(
            <>
{/* place for carousel with each page's featured content. */}
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={C1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>maybe blank</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={C2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={C3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        {/* About The Site  */}
            <div>
                <Row>
                {AboutInfo.map((About, i) => (
                    <Col>
                        <h2>{About.title}</h2>
                        {About.body.map((body,i) => (
                            <p>{body}</p>
                        ))}
                    </Col>
                ))}
                </Row>
            </div>

{/* might not use these cards here on this page, maybe only one blog card used in the carousel */}
                {Content.map((Blog, i) => (
                    <Card key={i}>
                        <Row>
                            <Col className="card__img" sm={3}>
                                <img src={Blog.image} alt="Flower1.jpg"/>
                            </Col>
                            <Col className="card__body">
                                <div>
                                    <h4 className="card__title">{Blog.title} </h4>
                                    <p className="card__description">{Blog.description} </p>
                                    <button className="card__btn">Go There</button>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </>
       )
}

export default HomeBody


