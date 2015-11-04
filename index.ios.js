'use strict'

import React from 'react-native'
let {View, Text} = React

// https://facebook.github.io/react-native/docs/geolocation.html#content

const Styles = React.StyleSheet.create({
	text: {
		color: 'black',
		backgroundColor: 'white',
		fontSize: 20,
		margin: 80
	}
})

const GeoLocateSettings = {
	enableHighAccuracy: true,
	timeout: 20000,
	maximumAge: 1000
}

let GeoLocate = React.createClass({
	watchID: false,
	getInitialState() {
		// set initial cordinate values
		return {
			initialPosition: 'unknown',
			lastPosition: 'unknown'
		}
	},
	componentDidMount() {
		// fetch data and update state
		navigator.geolocation.getCurrentPosition(
			(initialPosition) => this.setState({
				initialPosition
			}), (error) => alert(error.message),
			GeoLocateSettings)
		this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
			this.setState({
				lastPosition
			})
		})
	},
	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID)
	},
	render() {
		return (
            <View>
    			<Text style={Styles.text}> Initial position: {JSON.stringify(this.state.initialPosition)}</Text>
    			<Text style={Styles.text}> Current position: {JSON.stringify(this.state.lastPosition)}</Text>
    		</View>
		)
	}
})

let reactNativeExampleApp = React.createClass({
	render() {
		return (<GeoLocate />)
	}
})

React.AppRegistry.registerComponent('reactNativeExample', () => {
	return reactNativeExampleApp
})
