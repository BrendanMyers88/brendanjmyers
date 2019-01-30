import React, {Component} from 'react';
import './Footer.css';
import {Menu, Icon} from 'semantic-ui-react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Menu id="footer">
                    <Icon name="github" size="large" link="https://github.com/BrendanMyers88" />
                    <Icon link name="mail" size="large" />
                </Menu>
            </div>
        );
    }
}