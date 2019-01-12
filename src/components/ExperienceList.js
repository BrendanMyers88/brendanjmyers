import React, {Component} from 'react';
import './ExperienceList.css';
import {Image, Segment} from 'semantic-ui-react';

export class ExperienceList extends Component {
    render() {

        return (
            <div>
                <Segment basic compact className="experience">
                        <div className="tools">
                            <div className="primary">Tools I've Used</div>
                            <div className="tools-container">
                                <ul>
                                    <li><Image as='a' href='https://aws.amazon.com/' className="white-bg logo" src={require('./pages/images/tools/Amazon_Web_Services_Logo.svg')}/></li>
                                    <li><Image as='a' href='https://en.wikipedia.org/wiki/Cascading_Style_Sheets' className="logo" src={require('./pages/images/tools/CSS3_logo_and_wordmark.svg')}/></li>
                                    <li><Image as='a' href='https://www.djangoproject.com/' className="logo" src={require('./pages/images/tools/django-logo-negative.svg')}/></li>
                                    <li><Image as='a' href='https://www.docker.com/' className="logo" src={require('./pages/images/tools/docker-logo.png')}/></li>
                                    <li><Image as='a' href='https://github.com/' className="logo" src={require('./pages/images/tools/GitHub_Logo_White.png')}/></li>
                                    <li><Image as='a' href='https://www.heroku.com/' className="logo" src={require('./pages/images/tools/heroku-logotype-vertical-white.svg')}/></li>
                                    <li><Image as='a' href='https://en.wikipedia.org/wiki/HTML5' className="logo" src={require('./pages/images/tools/HTML5_Logo.svg')}/></li>
                                    <li><Image as='a' href='https://jquery.com/' className="logo" src={require('./pages/images/tools/jQuery_White.svg')}/></li>
                                    <li><Image as='a' href='https://www.postgresql.org/' className="logo" src={require('./pages/images/tools/PostgreSQL_logo.svg')}/></li>
                                    <li><Image as='a' href='https://www.python.org/' className="logo" src={require('./pages/images/tools/python-logo-generic.svg')}/></li>
                                    <li><Image as='a' href='https://reactjs.org/' className="logo" src={require('./pages/images/tools/React-logo.svg')}/></li>
                                    <li><Image as='a' href='https://riot.js.org/' className="logo" src={require('./pages/images/tools/riot.svg')}/></li>
                                    <li><Image as='a' href='https://sass-lang.com/' className="logo" src={require('./pages/images/tools/Sass Logo(Color).svg')}/></li>
                                    <li><Image as='a' href='http://stylus-lang.com/' className="white-bg logo" src={require('./pages/images/tools/Stylus-logo.svg')}/></li>
                                    <li><Image as='a' href='https://semantic-ui.com/' className="logo" src={require('./pages/images/tools/semantic-ui.svg')}/></li>
                                    <li><Image as='a' href='https://www.javascript.com/' className="logo" src={require('./pages/images/tools/240px-JavaScript-logo.png')}/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="usage">
                            <div className="primary">But how much do you use them?</div>
                            <div>
                                Experienced
                                <ul>
                                    <li>Django</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>GitHub</li>
                                </ul>
                            </div>
                        </div>
                    </Segment>
            </div>
        );
    }
}