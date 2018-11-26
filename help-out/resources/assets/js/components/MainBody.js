import React, { Component } from 'react'
import { Grid, Row, Col, Panel, Image, ResponsiveEmbed } from 'react-bootstrap'
import Header from './Header'
import SlideShow from './SlideShow'

class MainBody extends Component {

    render() {


        return (
            
            <div className="body">
                <Header />         
                <Grid>
                    <Row className="show-grid">
                        <SlideShow />
                    </Row>
                    <Row className="images-show-grid">
                        <Image src="./images/logo.png" width='auto' height='auto' />
                    </Row>
                    <Row className="show-grid">
                        <Panel className="panel-text">
                            <Panel.Heading>
                                    <Panel.Title componentClass="h3">
                                        About Us
                                    </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>Panel content</Panel.Body>
                        </Panel>
                    </Row>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>
                            <div>
                                <Panel className="panel-text">
                                    <Panel.Heading>
                                        <Panel.Title componentClass="h3">
                                            Our Vision
                                        </Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body>Panel content</Panel.Body>
                                </Panel>
                            </div>
                    </Col>
                        <Col md={6} mdPull={6}>
                            <Panel className="panel-text">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Our Mission</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Panel content</Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default MainBody