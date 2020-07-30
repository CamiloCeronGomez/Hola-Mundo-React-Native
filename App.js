
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native'

class holaCiapfa extends Component{

	saludo = () => {Alert.alert('Mensaje de alerta Login')}

	render(){

		return(
			<View style={styles.container}>

				<View style ={styles.header}>

					<View style={styles.headerleft}>
					<Image source={require('./assets/CAMILO.png')} style ={styles.logo}/>
					</View>

					<View style={styles.headerright}>
					<Button title='Login' onPress={this.saludo}/>
					</View>

				</View>

				<View style={[styles.body, styles.negrita]}>
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
	negrita :{
		fontWeight : 'bold'
	},
	header:{
		flex : 0.3,
		flexDirection : 'row',
		marginTop: 40
	},
	headerleft:{
		flex : 1,
		
	},
	headerright:{
		flex : 1,
	
	},
	body:{
		flex : 1,
		alignItems : 'center'
		
	},
	logo : {
		width : 100,
		height : 100,
		borderRadius: 50,
		resizeMode: 'contain'
	}

})

export default holaCiapfa
