//import libraries for making components
import React from 'react';
import { Text, View } from 'react-native';

//make component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'powderblue',
		paddingTop: 15, 
		height: 50,
		shadowColor: '#000',
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 },
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

//make component available to other parts of the app
export default Header;
