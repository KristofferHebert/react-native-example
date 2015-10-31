'use strict'

import React from 'react-native'

const Styles = React.StyleSheet.create({
    text : {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        margin: 80
    }
})

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
