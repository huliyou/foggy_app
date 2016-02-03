import React from 'react';
import styles from '../../asset/styles/CitiesSettingsPage/CitiesSettings.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';
import {routeActions} from 'react-router-redux';
import {Icon} from 'amazeui-touch';
class  Navigator extends React.Component {
    render() {
        return(
            <div className="container navigator_add ">
                <div className="col-xs-2  text-left">
                    <Button className="add_button" onClick={(e) => this.props.dispatch(routeActions.push('/addCity'))}>
                        <Icon name="plus" style={{color:'white'}}/>
                    </Button>
                </div>
                <div className="clo-xs-10">

                </div>
            </div>
        )
    }
}

export default Navigator;