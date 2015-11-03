'use strict'

import React from 'react-native'

// https://facebook.github.io/react-native/docs/geolocation.html#content

const Styles = React.StyleSheet.create({
    text : {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        margin: 80
    }
})

class GeoLocate extends React.Component {
    watchId: null,
    getIntialState(){

	// set initial cordinate values
        return {
            initialPostion: 'unknown',
            lastPostion: 'unknown'
        }
    }
    componentDidMount(){
	// fetch data and update state
    }
}

class reactNativeExampleApp extends React.Component {
    render(){
        return React.createElement(React.Text, {
            style: Styles.text
        }, "Hello World")
    }
}

React.AppRegistry.registerComponent('reactNativeExample', ()=>{
    return reactNativeExampleApp
})
