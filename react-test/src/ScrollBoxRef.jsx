import React, { Component } from 'react'

export default class ScrollBox_ref extends Component {
    
    scrollToBottom=()=>{
        const {scrollHeight,clientHeight}= this.box;
        /*  scrollHeight :스크롤이 있는 박스 안의 div높이 (650)
            clientHeight : 스크롤이 있는 박스의 높이 (300)
            scrollTop : 세로 스크롤바 위치 (0~350)
         */
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    scrollToTop=()=>{

        this.box.scrollTop = 0;
    }

    render() {
        const style={
            border :'1px solid black',
            height:'300px',
            width:'300px',
            overflow:'auto',
            position:'relative'
        }
        const inner = {
            width:'100%',
            height:'650px',
            background:'linear-gradient(white,black)'
        }
        return (
            <div 
            style={style}
            ref={(ref)=> this.box=ref}>
                <div style={inner}></div>
            </div>
        )
    }
}
