import React, {Component} from 'react';
import './HomePage.css';
import {Sticky, Segment} from 'semantic-ui-react';
import {animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import {NavMenu} from '../NavMenu'


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    state = {};

    handleContextRef = contextRef => this.setState({contextRef})

    render() {
        const {contextRef} = this.state;

        return (
            <div className="wrapper" ref={this.handleContextRef}>
                <div id="image-container">
                    <div className="hero-text-container">
                        <h1 className="hero-header"><span className="primary">Brendan</span> Myers</h1>
                    </div>
                    <div className="primary-tagline">Full Stack</div>
                    <div className="secondary-tagline">Development</div>
                    <div className="short-desc">Websites with user experience in mind.</div>
                    <div className="short-desc">Simple, elegant back end.</div>
                </div>
                <div className='navbar-placeholder'>
                    <Sticky context={contextRef}>
                        <NavMenu/>
                    </Sticky>
                </div>

                <Segment className="about">asfsafasfasdfasdf</Segment>
            </div>
        );
    }
}