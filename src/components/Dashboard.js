import React from 'react'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router } from 'react-router-dom'
import { Card , CardTitle} from 'reactstrap'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'
import photo1 from '../images/education1.jpg'
import photo2 from '../images/education5.jpg'
import photo3 from '../images/education6.jpg'

class CardDashboard extends React.Component{

    navToCourses = () =>{
        const redirect=()=>{
            return this.props.history.push('/course')
        }
        redirect()
    }

    render(){
        return (  
        <Router>
            <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={photo1} width="200" height="400"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Learn Anywhere, Learn Any Skill</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={photo2} width="200" height="400"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Learn. Apply. Grow</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={photo3} width="200" height="400"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Self Paced. Live Training. Hybrid Training</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel><br/>
            <Container>
                <div>
                    <Card body outline color="primary" className="text-center">
                        <CardTitle><b>Courses</b></CardTitle>
                        <Button variant="btn btn-primary" onClick={this.navToCourses} >Create the Courses</Button>
                    </Card>
                </div>
            </Container>
        </Router>           
        )
    }  
}

export default connect()(CardDashboard)