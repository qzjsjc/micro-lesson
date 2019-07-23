import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.styl';

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject((error.response||{}).data);
});

class App extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        this.getList();
    }

    getList = () => {
        axios.get('/list')
            .then((result)=>{
                this.setState({
                    list: result
                });
            })
            .catch((e)=>{
                console.log(e);
            })
    }

    openViedo = (item) => {
        window.open(`practice/${item}`);
    }

    render(){
        return <ul>
            {this.state.list.map((item)=>{
                return <li onClick={() => this.openViedo(item)} style={{cursor: 'pointer'}}>{item}</li>
            })}
        </ul>
    }
}

App.contextTypes = {
    store: PropTypes.object
}

export default connect(state => state )(App);
