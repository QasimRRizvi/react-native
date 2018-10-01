import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

// custom component
import SignInForm from './SignInForm';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#122033',
	},
	formContainer:{

	},
	logo: {
		position: 'absolute',
		height: 100,
		width: 300,
	},
	SingInContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
});

class SignIn extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.SingInContainer}>
					<Image resizeMode="contain" style={styles.logo} source={require('./logo.png')} />
				</View>
				<View style={styles.formContainer}>
					<SignInForm />
				</View>
			</View>
		)
	}
}

export default SignIn;