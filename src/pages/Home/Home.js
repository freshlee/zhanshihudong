import React, {Component} from 'react';
import './index.less'
import $ from 'jquery'
import bg_small from 'img/bg_smaall.png'
import Toolbar from 'components/Toolbar'
import ChatItem from 'components/ChatItem'
const Config = () => {
    const offetsetMax = {
        mainVideo: {
            height: '275px'
        },
        subVideo: {
            height: '746px'
        }
    }
    const offetsetMin = {
        mainVideo: {
            height: '155px'
        },
        subVideo: {
            height: '365px'
        }
    }
    let config = {
        mainVideo: {
            height: '37.5%'
        },
        subVideo: {
            height: $('.right-wrap').height() - 56
        }
    }
    if ($(window).width() > 1440) {
        config = offetsetMax
    } else if ($(window).width() < 887) {
        config = offetsetMin
    }
    return config
}
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoState: true
        }
    }
    videoStateSwitch() {
        const config = Config()
        let mainVideo = {
            background: '#000',
            opacity: '0.5',
            height: config.mainVideo.height,
            left: '0',
            top: '0',
            width: '26%',
            position: 'absolute',
            'margin-left': '0',
        }
        let subVideo = {
            background: '#000',
            opacity: '0.5',
            'margin-left': '6px',
            height: config.subVideo.height,
            left: '26%',
            top: '0',
            width: '74%',
            position: 'absolute'
        }
        console.log(this.state)
        if (this.state.videoState) {
            $('.mainVideo').animate(subVideo, 500)
            $('.subVideo').animate(mainVideo, 500)
        } else {
            $('.mainVideo').animate(mainVideo, 500)
            $('.subVideo').animate(subVideo, 500)
        }
        this.setState({
            videoState: !this.state.videoState
        })
    }
    componentDidMount  () {
        $('#global').height($(window).height())
        $('.msg-zone').height($('.chat-wrap').height() - 83 - 34)
        $('.subVideo').height($('.right-wrap').height() - 56)
        const subVideo = $('.subVideo')
        const mainVideo = $('.mainVideo')
        window.onresize = () => {
            $('#global').height($(window).height())
            $('.msg-zone').height($('.chat-wrap').height() - 83 - 34)
            const config = Config()
            // console.log(this.state)
            if (this.state.videoState) {
                subVideo.height(config.subVideo.height)
                mainVideo.height(config.mainVideo.height)
            } else {
                console.log('false')
                mainVideo.height(config.subVideo.height)
                subVideo.height(config.mainVideo.height)   
            }
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
                                            <ChatItem/>
                                            <ChatItem/>
                                            <ChatItem/>
                                            <ChatItem/>
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
                                        <Toolbar switchOp={() => this.videoStateSwitch.bind(this)}/>
                                    </div>
                                </div>
                                <div className="mainVideo"></div>
                                <div className="subVideo"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}