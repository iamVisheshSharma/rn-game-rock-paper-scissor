import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Sizes } from '../assets';

const AppLoader = () => {
	const SignList = ['👊', '✋', '✌️'];
	const [val1, setVal1] = React.useState(0)
	const [val2, setVal2] = React.useState(0)
	React.useEffect(() => {
		const interval = setInterval(() => {
			setVal1(Math.floor(Math.random() * 3))
			setVal2(Math.floor(Math.random() * 3))
		}, 100)
		return () => clearInterval(interval);
	}, [val1, val2])
	return (
		<View style={styles.container}>
			<View style={styles.verticalAlign}>
				<Text style={styles.textStyle}>{SignList[val1]}</Text>
				<Text style={styles.textStyle}>{SignList[val2]}</Text>
			</View>
		</View>
	)
}

export default AppLoader

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		position: 'absolute',
		top: 0,
		height: '100%',
		width: '100%'
	},
	verticalAlign: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		fontSize: Sizes.ExtraLarge * 1.8,
		color: Colors.Black,
		marginHorizontal: Sizes.Large
	},
})