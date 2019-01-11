import React, {Component} from 'react';
import './HomePage.css';
import {Sticky, Segment, Image, Header} from 'semantic-ui-react';
import {animateScroll as scroll} from 'react-scroll';
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
                    <Segment basic compact className="experience">
                        <div className="tools">
                            <div className="primary">Tools I've Used</div>
                            <div className="tools-container">
                                <ul>
                                    <li><Image className="amazon logo" src={require('./images/tools/Amazon_Web_Services_Logo.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/CSS3_logo_and_wordmark.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/django-logo-negative.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/docker-logo.png')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/GitHub_Logo_White.png')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/heroku-logotype-vertical-white.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/HTML5_Logo.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/jQuery_White.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/PostgreSQL_logo.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/python-logo-generic.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/React-logo.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/riot.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/Sass Logo(Color).svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/semantic-ui.svg')}/></li>
                                    <li><Image className="logo" src={require('./images/tools/Unofficial_JavaScript_logo_2.svg')}/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="clients">
                            <div className="primary">Clients I've worked with</div>
                        </div>
                    </Segment>

                </div>
            </div>
        );
    }
}