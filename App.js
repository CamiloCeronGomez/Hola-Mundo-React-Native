import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class holaCiapfa extends Component{

	render(){

		return(
			<View style={styles.container}>
			<Text>hola mundo react native paso a paso</Text>

			</View>

			)
	}


}

const styles = StyleSheet.create({
	container :{
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : 'red'

	}
})

export default holaCiapfa
