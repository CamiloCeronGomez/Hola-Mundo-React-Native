
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class holaCiapfa extends Component{

	render(){

		return(
			<View style={styles.container}>

				<View style ={styles.header}>

					<View style={styles.headerleft}>
					</View>

					<View style={styles.headerright}>
					</View>

				</View>

				<View style={styles.body}>
				<Text>hola mundo react native paso a paso</Text>
				</View>

			</View>
			)
	}


}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		flexDirection : 'column'
	}, 
	header:{
		flex : 0.3,
		flexDirection : 'row'
	},
	headerleft:{
		flex : 1,
		backgroundColor : 'yellow'
	},
	headerright:{
		flex : 1,
		backgroundColor : 'blue'
	},
	body:{
		flex : 1,
		backgroundColor : 'red'
	}

})

export default holaCiapfa
