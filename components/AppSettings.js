/**
 *  组件: 城市设置界面
 *  描述: 添加删除城市,监测点,
 *  创建时间: 2016-1-11
 */

import React from 'react';

class AppSettings extends React.Component {
    render() {
        return (
            <div>
                App settings View
                {/*console.log(this.props)*/}
                <div>
                {this.props.page}
                </div>
            </div>
        )
    }
};

export default AppSettings;