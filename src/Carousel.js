import React from 'react'
import Carousel from "react-bootstrap/Carousel"

function carousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("./Images/Image1.jpg")} alt="1st Image"  style={{height : "100vh"}} />
                    <Carousel.Caption>
                    <h3>First Slide Label</h3>
                    <p> Food 1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("./Images/Image2.jpg")}  alt="2nd Image" style={{height : "100vh"}} />
                    <Carousel.Caption>
                    <h3>Second Slide Label</h3>
                    <p> Food 2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("./Images/Image3.jpg")} alt="3rd Image"  style={{height : "100vh"}} />
                    <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p> Food 3</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
    )
}

export default carousel
