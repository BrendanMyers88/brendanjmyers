import React, {Component} from 'react';
import './HomePage.css';
import {Sticky, Segment, Image} from 'semantic-ui-react';
import {animateScroll as scroll} from 'react-scroll';
import {NavMenu} from '../NavMenu'
import {ExperienceList} from '../ExperienceList'


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
                    <div className="short-desc">Emphasis on a clean, user friendly front-end</div>
                    <div className="short-desc">with a stable, practical back-end.</div>
                </div>
                <div className='navbar-placeholder'>
                    <Sticky context={contextRef}>
                        <NavMenu/>
                    </Sticky>
                </div>

                <div>
                    <Image className="self-photo" src={require('./images/BrendanPhoto.jpg')} bordered/>
                    <Segment basic compact className="about">
                        <div className="about-header">About</div>
                        <div className="about-body">
                            <div>
                                <em>
                                    Hey there! I'm a full stack developer that got started later than most. I got my
                                    Bachelor's Degree from the University of Idaho in 2012 in Recreation. After a few
                                    years of working in apartment maintenance, park management, and landscaping followed
                                    with a a two-month long visit to Thailand in between, I decided to change career
                                    paths to programming in 2018.
                                </em>
                            </div>
                            <br/><br/>
                            <div>
                                Over the past year, I've learned a lot about programming. Like most programmers starting
                                out, I didn't know what I didn't know. I ran headlong for Python as I'd heard it was a
                                great starting place for beginners. That Python base would eventually lead to a love
                                of web development through the Django web framework. I still use Python as my primary
                                back-end language, but front-end
                                development was where I found my biggest strengths. It allowed me to blend my eye for
                                design with practical, real world solutions.
                            </div>
                            <br/><br/>
                        </div>
                    </Segment>
                    <br/>
                    <ExperienceList/>
                </div>
            </div>
        );
    }
}