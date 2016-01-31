import React from 'react';
import styles from '../../asset/styles/common/InitPage.css';

import {Loader} from 'amazeui-touch';

class InitPage extends React.Component {
    content() {
       if(this.props.isFetching){
          return(
              <div className="container modal_panel">
                  <div className="container warning_label">
                      正在获取所在城市
                      <Loader />
                  </div>
              </div>
          )
       } else if(this.props.error) {
          return(
              <div className="container modal_panel">
                  <div className="container waring_label text-center">
                      获取所在城市失败
                  </div>
              </div>
          )
       }
    }
    render() {
        return(
            <div>
                {this.content()}
            </div>
        )
    }
}

export default InitPage;