import React from 'react';

import {Button} from 'react-bootstrap';

import style from '../../asset/styles/MainPage/Navigator.css';

class Navigator extends React.Component {
    render() {
        return (
            <div className="Navigator">
                <div className="col-xs-2">
                    <Button className="left_button btn" onClick={(e) => this.props.left_toggle_action()}>
                        <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                    </Button>
                </div>
                <div className="col-xs-8 text-center nav_title">
                    为人民服雾
                </div>
                <div className="col-xs-2 text-right">
                    <Button className="right_button">
                        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </Button>
                </div>
            </div>
        );
    }
}

export  default Navigator;