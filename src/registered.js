import React, { Component } from 'react';

class register extends Component {
    componentWillMount(){
        console.log('componentWillMount')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        //写一些条件，根据条件，手动更新
        // React.createElement('div',{},'手动更新后的内容');
        // return false;//禁止自动更新
        return true;//允许自动更新
    }

    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    componentDidMount(){
        console.log('componentDidMount');
        /* this.setState({
        timer:setInterval(()=>{console.log('活着')},1000)
        })*/
    }


    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps',this.props,nextProps)//nextProps==更新后的
        // this.setState({msg2:'修改渲染中的数据'+Math.random()});
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        // clearInterval(this.state.timer);
    }

    render() {
        return (
            <div>zujian</div>
        );
    }
}

export default register;
