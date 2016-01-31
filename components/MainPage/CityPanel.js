import React from 'react';
import styles from '../../asset/styles/MainPage/CityPanel.css'
import {Container,Grid,Col,View} from 'amazeui-touch';

class CityPanel extends React.Component {
    render() {
        //return (
        //    <div className="container cityName col-xs-12 text-center">
        //            {this.props.cityName}
        //    </div>
        //)
        return (
           <Container className="city_panel">
               <Container className="cityName">
                   {this.props.cityName}
               </Container>
               <Grid>
                    <Col cols={3} className="text-right aqi_number">107</Col>
                    <Col cols={3} className="aqi_label">
                        <Col cols={6}>AQI</Col>
                        <Col cols={6}>500</Col>
                    </Col>
                   </Grid>
               <Grid>
                   <Col className="text-center">轻度污染</Col>
               </Grid>
           </Container>
        )
    }
}

export default CityPanel;