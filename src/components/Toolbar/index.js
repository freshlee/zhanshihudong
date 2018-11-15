import React, {Component} from 'react';
import './index.less'
import $ from 'jquery'
import bg_small from 'img/bg_smaall.png'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Popover from 'antd/lib/popover';  // 加载 JS
import 'antd/lib/popover/style/css'; 

export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }
    componentDidMount  () {
        console.log(document.getElementById('global'), $(window).height())
        $('#global').height($(window).height())
    }
    render() {
        const content = (
            <div>
              <p className="channel">华南一区</p>
              <p className="channel">华南二区</p>
            </div>
        )
        const overlayStyle = {
            background: 'rgba(32, 41, 51, 0.9)',
            padding: '0'
        }
        return (
            <div className="tool-bar">
                <div className="voice-tool-wrap">
                    <div className="voice-tool hasIcon"></div>
                    <div className="slider-bar">
                        <div><Slider/></div>
                    </div>
                </div>
                <div className="video-trigger hasIcon"></div>
                <div className="video-switch hasIcon"></div>
                <Popover content={content} trigger="click" overlayClassName="channel-list" overlayStyle={overlayStyle}>
                    <div className="net-chosen hasIcon"/>
                </Popover>
                <div className="rightSide">
                    <div className="raise hasIcon"></div> 
                    <div className="question hasIcon"></div>
                    <div className="info hasIcon"></div>    
                </div>
            </div>
        )
    }
}