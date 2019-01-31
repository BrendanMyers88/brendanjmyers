import React, {Component} from 'react';
import './Footer.scss';
import {Menu, Icon} from 'semantic-ui-react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Menu id="footer">
                    <a href="https://github.com/BrendanMyers88">
                        <div className="icon-container">
                            <Icon name="github" size="large" link/>
                            <div className="username">/BrendanMyers88</div>
                        </div>
                    </a>

                    <a href="mailto: myersb88@gmail.com">
                        <div className="icon-container">
                            <Icon name="mail" size="large" link/>
                            <div className="username">myersb88@gmail.com</div>
                        </div>
                    </a>
                </Menu>
            </div>
        );
    }
}