import React from 'react';
import styles from '../../asset/styles/CitiesSettings.css';
import {Button} from 'react-bootstrap';
class  Navigator extends React.Component {
    render() {
        return(
            <div className="container navigator_add ">
                <div className="col-xs-2  text-left">
                    <Button className="add_button" onClick={(e) => console.log('click')}>+</Button>
                </div>
                <div className="clo-xs-10">

                </div>
            </div>
        )
    }
}

export default Navigator;