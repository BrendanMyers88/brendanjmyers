import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import {Menu, Sidebar} from 'semantic-ui-react';
import {animateScroll as scroll} from 'react-scroll'


export class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    state = {visible: false};

    handleShowClick = () => this.setState({visible: true})
    handleSidebarHide = () => this.setState({visible: false})
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem, visible} = this.state;

        return (
            <div>
                <Menu id="sticky-menu">
                    <Link to="/">
                        <Menu.Item
                            position='left'
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.scrollToTop}
                        >
                            <div className="menu-header">
                                <span className="primary">Brendan </span>Myers
                            </div>
                        </Menu.Item>
                    </Link>

                    <Menu.Item
                        position='right'
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                        className="nav-item"
                    >
                        About
                    </Menu.Item>

                    <Menu.Item
                        name='projects'
                        active={activeItem === 'projects'}
                        onClick={this.handleItemClick}
                        className="nav-item"
                    >
                        Projects
                    </Menu.Item>

                    <Link to="/blog">
                        <Menu.Item
                            name='blog'
                            active={activeItem === 'blog'}
                            onClick={this.scrollToTop}
                            className="nav-item"
                        >
                            Blog
                        </Menu.Item>
                    </Link>

                    <Menu.Item
                        name='contact'
                        active={activeItem === 'Contact'}
                        onClick={this.handleItemClick}
                        className="nav-item"
                    >
                        Contact
                    </Menu.Item>

                    <Menu.Item
                        position='right'
                        icon='content'
                        active={activeItem === 'hamburger'}
                        onClick={this.handleShowClick}
                        className="hamburger-btn"
                    >
                    </Menu.Item>

                </Menu>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Link to="/">
                        <Menu.Item
                            as='a'
                            name='about'
                            active={activeItem === 'about'}
                            onClick={this.scrollToTop}
                        >
                            About
                        </Menu.Item>
                    </Link>

                    <Link to="/">
                        <Menu.Item
                            as='a'
                            name='projects'
                            active={activeItem === 'projects'}
                            onClick={this.scrollToTop}
                        >
                            Projects
                        </Menu.Item>
                    </Link>

                    <Link to="/blog">
                        <Menu.Item
                            as='a'
                            name='blog'
                            active={activeItem === 'blog'}
                            onClick={this.scrollToTop}
                        >
                            Blog
                        </Menu.Item>
                    </Link>

                    <Link to="/">
                        <Menu.Item
                            as='a'
                            name='contact'
                            active={activeItem === 'contact'}
                            onClick={this.scrollToTop}

                        >
                            Contact
                        </Menu.Item>
                    </Link>
                </Sidebar>
            </div>
        );
    }
}