import React, {Component} from 'react';
import './index.less'
import $ from 'jquery'
import bg_small from 'img/bg_smaall.png'
import Toolbar from 'components/Toolbar'
export default class Home extends Component {
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
        $('#global').height($(window).height())
        $('.msg-zone').height($('.chat-wrap').height() - 83 - 34)
        window.onresize = () => {
            $('#global').height($(window).height())
            $('.msg-zone').height($('.chat-wrap').height() - 83 - 34)
        }
    }
    render() {
        return (
            <div className="global-wrap">
                <div className="global" id="global">
                    <div className="container-wrap">
                        <div className="expend">
                        </div>
                        <div className="container-lee">
                            <div className="content">
                                <div className="left-wrap">
                                    <div className="chat-wrap">
                                        <div className="chat-title">问答</div>
                                        <div className="msg-zone">
                                        </div> 
                                        <div className="chat-input-area">
                                            <h4 className="input-area-title">专家为您答疑解惑</h4>
                                            <div className="area-line">
                                                <textarea className="input-area-text"></textarea>
                                                <button className="send">提问</button>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="right-wrap">
                                    <div className="right-wrap-content">
                                        <Toolbar/>
                                    </div>
                                </div>
                                <div className="mainVideo"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}