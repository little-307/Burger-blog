
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BlogData } from '../blogs/BlogData';

// import Image from "../../../src/assets/Flower1.jpg"; 
// import Image2 from "../../../src/assets/Flower2.jpg";
// import Image3 from "../../../src/assets/FamLines1.jpg";


const BlogsBody = () => {
    return (
        
                <>
                    {BlogData.map((blog, i) => (
                        <Card key={i}>
                            <Row>
                                <Col className="card__img" sm={3}>
                                    <img src={blog.cardImg} alt=""/>
                                </Col>
                                <Col className="card__body">
                                    <div>
                                        <h4 className="card__title">{blog.title} </h4>
                                        <p className="card__description">{blog.description} </p>
                                        <button className="card__btn"><Link to={blog.link}>READ</Link></button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                    
                </>
           )
    }   
export default BlogsBody
