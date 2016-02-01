import React from 'react';
import styles from '../../asset/styles/CitiesSettingsPage/CitiesSettings.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';
class  Navigator extends React.Component {
    render() {
        return(
            <div className="container navigator_add ">
                <div className="col-xs-2  text-left">
                    <Button className="add_button" onClick={(e) => console.log('click')}>
                        <Link to="/addCity">+</Link>
                    </Button>
                </div>
                <div className="clo-xs-10">

                </div>
            </div>
        )
    }
}

export default Navigator;