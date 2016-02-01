import React from 'react';

import {Link} from 'react-router';

import styles from '../../asset/styles/CitiesSettingsPage/AddCityPage.css';

class AddCityPage extends  React.Component {
    render() {
        return (
            <div className="AddCityPage">
                add city page;
                <div>
                    <Link to="/">返回</Link>
                </div>
            </div>
        );
    }
}

export default AddCityPage;