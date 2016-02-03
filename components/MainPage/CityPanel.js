import React from 'react';
import styles from '../../asset/styles/MainPage/CityPanel.css'
import {Container,Grid,Col,View,Loader,Card} from 'amazeui-touch';

class CityPanel extends React.Component {
    renderCityName() {
        if(this.props.Cities.get('preferedCityName')) {
            return <div>{this.props.Cities.get('preferedCityName')}</div>
        }else {
            return (
                <Container>
                    <Loader rounded={true}/>
                </Container>
            )
        }
    }
    renderBasicInfo() {
        if(this.props.Cities.getIn(['preferedCityInfo','isFetching'])){
            return (
                <Container>
                    <Loader rounded={true}/>
                </Container>
            )
        }else if(this.props.Cities.getIn(['preferedCityInfo','error'])) {
            return <Container>获取失败</Container>
        } else {
            return (
                <div>
                <Grid>
                    <Col cols={3} className="text-right aqi_number">
                        {this.props.Cities.getIn(['preferedCityInfo','info','aqi'])}
                    </Col>
                    <Col cols={3} className="aqi_label">
                        <Col cols={6}>AQI</Col>
                        <Col cols={6}>国标</Col>
                    </Col>
                </Grid>
                <Grid>
                <Col className="text-center">
                    {this.props.Cities.getIn(['preferedCityInfo','info','quality'])}
                </Col>
                </Grid>
                </div>
            )
        }
    }
    renderDetailInfo() {
        if(this.props.Cities.getIn(['preferedCityInfo','isFetching'])){
            return <Loader rounded={true}/>
        }else if(this.props.Cities.getIn(['preferedCityInfo','error'])) {
            return <Container>获取失败</Container>
        } else {
            return (
                <Card className="data_panel"
                      title="污染物"
                >
                    <Container >
                        <Grid avg={3}>
                            <Col cols="3">PM2.5</Col>
                            <Col cols="3">PM10</Col>
                            <Col cols="3">O3</Col>
                        </Grid>
                        <Grid avg={3}>
                            <Col cols="3">{this.props.Cities.getIn(['preferedCityInfo','info','pm2_5'])}</Col>
                            <Col cols="3">..</Col>
                            <Col cols="3">..</Col>
                        </Grid>
                    </Container>
                    <Container>
                        <Grid avg={3}>
                            <Col cols="3">CO</Col>
                            <Col cols="3">SO2</Col>
                            <Col cols="3">NO2</Col>
                        </Grid>
                        <Grid avg={3}>
                            <Col cols="3">..</Col>
                            <Col cols="3">..</Col>
                            <Col cols="3">..</Col>
                        </Grid>
                    </Container>

                </Card>
            )
        }
    }
    render() {
        return (
            <div>
                <Container className="city_panel">
                    <Container className="cityName">
                        {this.renderCityName()}
                    </Container>
                    {this.renderBasicInfo()}
                </Container>
                {this.renderDetailInfo()}
            </div>
        )
    }
}

export default CityPanel;