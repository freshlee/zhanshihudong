import React, {Component} from 'react';
import './index.less'
import $ from 'jquery'
import bg_small from 'img/bg_smaall.png'
import Toolbar from 'components/Toolbar'
import ChatItem from 'components/ChatItem'
const Config = () => {
    const offetsetMax = {
        mainVideo: {
            height: '255px'
        },
        subVideo: {
            height: '746px'
        },
        global: {
            height: '802px'
        }
    }
    const offetsetMin = {
        mainVideo: {
            height: '142px'
        },
        subVideo: {
            height: '365px'
        },
        global: {
            height: '420px'
        }
    }
    let config = {
        mainVideo: {
            height: '37.5%'
        },
        subVideo: {
            height: $('.right-wrap').height() - 56
        },
        global: {
            height: 47.3 / 100 * $('.container-lee').width()
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
            height: config.mainVideo.height,
            left: '0',
            top: '0',
            width: '26%',
            position: 'absolute',
            'margin-left': '0',
        }
        let subVideo = {
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
        const global = $('#global')
        const config = Config()
        const msgZone = $('.msg-zone')
        const container_lee = $('.container-lee')
        const chatWrap = $('.chat-wrap')
        $('.expend').height(config.global.height)
        container_lee.height(config.global.height)
        $('.mainVideo').append('<gs:video-live uname="0602学员" site="hqyzx.gensee.com" ctx="webcast" ownerid="14a88dda6d14477ebe23610d4ff59d46" bar="false" authcode="333333" uid="10000055831" group="testgroup" />')
        $('.subVideo').append('<gs:doc uname="0602学员" ctx="webcast" site="hqyzx.gensee.com" ownerid="14a88dda6d14477ebe23610d4ff59d46" uid="10000055831" authcode="333333" bar="false" group="testgroup" />')
        const windowJQ = $(window)
        require('http://static.gensee.com/webcast/static/sdk/js/gssdk.js').then(() => {
            const channel = GS.createChannel('testgroup')
            channel.bind('onPublicChat', (res) => {
                console.log(res, 'res')
            })
        })
        const reRender = () => {
            global.height(windowJQ.height())
            msgZone.height(chatWrap.height() - 83 - 34)
            const config = Config()
            container_lee.height(config.global.height)
            if (this.state.videoState) {
                subVideo.height(config.subVideo.height)
                mainVideo.height(config.mainVideo.height)
            } else {
                console.log('false')
                mainVideo.height(config.subVideo.height)
                subVideo.height(config.mainVideo.height)   
            }
        }
        reRender()
        window.onresize = reRender
    }
    render() {
        return (
            <div className="global-wrap">
                <div className="global" id="global">
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
                            <div className="mainVideo">
                            </div>
                            <div className="subVideo">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}