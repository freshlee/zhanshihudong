import React, {Component} from 'react';
import './index.less'
import $ from 'jquery'
import bg_small from 'img/bg_smaall.png'
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import Popover from 'antd/lib/popover';  // 加载 JS
// import 'antd/lib/popover/style/css'; 

export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount  () {
    }
    render() {
        return (
            <div className="chat-item">
                <div className="msg_normal"></div>
                <h3 className="title">标题</h3>
                <p className="msg">用户说的话</p>
            </div>
        )
    }
}