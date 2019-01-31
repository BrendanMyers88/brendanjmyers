import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './BlogPage.scss'
import './HomePage.scss'
import {NavMenu} from "../NavMenu";
import {Sticky} from "semantic-ui-react";


export default class BlogPage extends Component {
    state = {};

    handleContextRef = contextRef => this.setState({contextRef})

    render() {
        const {contextRef} = this.state;

        return (
            <div className="wrapper" ref={this.handleContextRef}>
                <div className='navbar-placeholder'>
                    <Sticky context={contextRef}>
                        <NavMenu/>
                    </Sticky>
                </div>
                <h1>Blog Page</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}