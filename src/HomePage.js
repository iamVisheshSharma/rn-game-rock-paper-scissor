import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images, Sizes } from './assets'
import Button from './components/Button'
import { playSound } from './utils'

export default function HomePage({ navigation }) {

	const goToNext = () => {
		playSound('tap.mp3', () => {
			navigation.navigate("GamePage")
		})
	}

	React.useEffect(() => {
		playSound('drum_roll.mp3');
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor={Colors.LimeGreen} />
			<View style={styles.center}>
				<Text style={styles.headerText}>
					rock paper scissor
				</Text>
			</View>
			<View style={styles.verticalAlign}>
				<Image source={Images.backgroundImage} style={{ width: '100%', }} resizeMode='contain' />
				<Button label={"Play Game"} onPressHandle={goToNext} />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.LimeGreen
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: Sizes.Medium,
	},
	headerText: {
		textTransform: 'capitalize',
		fontSize: Sizes.ExtraLarge,
		fontFamily: Fonts.bold,
		color: Colors.White,
		lineHeight: Sizes.ExtraLarge,
		letterSpacing: 0.12,
	},
	verticalAlign: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		margin: Sizes.Small,
	},
})