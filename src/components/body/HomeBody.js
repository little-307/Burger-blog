// import 'bootstrap/dist/css/bootstrap.min.css';

 import Image from "../../../src/assets/Flower1.jpg"; 
 import Image2 from "../../../src/assets/Flower2.jpg";
 import Image3 from "../../../src/assets/FamLines1.jpg";
//  import Cards from "./Cards";
 import { Card, Col, Row, } from 'react-bootstrap';
 import { Carousel } from 'react-bootstrap';
//  import Slider from './Slider';

 import Content from "../../Content"

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
                    src={Image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Image2}
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
                    src={Image3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
{/* maybe some About information here below the carousel or above. 
you could even put it in it's own column next to the carousel. */}

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
        // <div className="wrapper">
        //     <h1 className="head">Featured Pages</h1>
            
        //     <Cards
        //         img= {Content[0].image}
        //         title= {Content[0].title}
        //         description= {Content[0].description}
        //      />
             
        //      <Cards
        //         img= {Image2}
        //         title="Writers"
        //         description="Learn about the writers of these amazing blogs, and find more of their material."
        //      />
             
        //      <Cards
        //         img= {Image3}
        //         title="How ABOUT that!"
        //         description="A little about the site with a blend of opinions to judge and comment on."
        //      />
             
        
        // </div>

    
}

export default HomeBody

// const Cards = (props) => {
//     return(
        
//         <div className="card">
//             <Row>
//                 <Col className="card__img" sm={3}>
//                     <img src={Content[0].image} alt="Flower1.jpg"/>
//                 </Col>
//                 <Col className="card__body">
//                     <div>
//                         <h4 className="card__title">{Content[0].title} </h4>
//                         <p className="card__description">{Content[0].description} </p>
//                         <button className="card__btn">Go There</button>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//    )
// }

// bootstrap card

// const CardBoot = (props) => {
//     return(
//         <Card className="card" style={{ width: '18rem' }}>
//             <Card.Img className="card__img" variant="top" src={props.img} />
//             <Card.Body>
//                 <Card.Title className="card__title">{props.title}</Card.Title>
//                 <Card.Text className="card__description">{props.description}</Card.Text>
//                 <Button className="card__btn" variant="primary">GO THERE</Button>
//             </Card.Body>
//         </Card>
//     )
// }
