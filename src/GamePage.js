import { View, Text, SafeAreaView, StyleSheet, Pressable, Modal } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images, Sizes } from './assets'
import Button from './components/Button'
import AppLoader from './components/AppLoader';

export default function GamePage({ navigation }) {
	const SignList = ['👊', '✋', '✌️'];
	const [computerChoice, setComputerChoice] = React.useState(0);
	const [yourChoice, setYourChoice] = React.useState(0)
	const [message, setMessage] = React.useState(null)
	const [modalVisible, setModalVisible] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(false)
	let computerOpt = 0;

	const gameResult = (idx) => {
		computerOpt = Math.floor(Math.random() * 3);
		setComputerChoice(computerOpt);
		setYourChoice(idx)
		switch (idx) {
			case 0:
				if (computerOpt == idx) return -1;
				else if (computerOpt == 1) return 1;
				else return 0;
			case 1:
				if (computerOpt == idx) return -1;
				else if (computerOpt == 2) return 1;
				else return 0;
			case 2:
				if (computerOpt == idx) return -1;
				else if (computerOpt == 0) return 1;
				else return 0;
		}
	}

	const showResult = (idx) => {
		setIsLoading(true)
		const output = gameResult(idx);
		const msg = output == -1 ? `Urgh, it's a tie` : output == 1 ? `Sorry! You Lose` : `Congratulation You Win !`
		setMessage(msg);
		setTimeout(() => {
			setIsLoading(false)
			setModalVisible(true)
		}, 3000)
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.center}>
				<Text style={styles.headerText}>
					your choice
				</Text>
			</View>
			<View style={styles.verticalAlign}>
				<View style={styles.card}>
					<Text style={styles.ruleHeading}>game rules</Text>
					<Text style={styles.ruleText}>paper wins rock</Text>
					<Text style={styles.ruleText}>rock wins scissor</Text>
					<Text style={styles.ruleText}>scissor wins paper</Text>
				</View>
				<View style={styles.horizontalAlign}>
					{SignList.map((item, index) => (
						<Pressable onPress={() => showResult(index)} key={index} style={styles.iconViewStyle}>
							<Text style={styles.textStyle}>{item}</Text>
						</Pressable>
					))}
				</View>
				<Button label={'Home'} onPressHandle={() => navigation.goBack()} />
			</View>
			<Modal
				animationType="none"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={{
							color: Colors.Black,
							fontSize: Sizes.ExtraLarge,
							fontFamily: Fonts.bold,
							lineHeight: 28,
							letterSpacing: 0.12,
						}}>Game Result</Text>
						<Text style={styles.messageText}>
							Your choice {SignList[yourChoice]}
						</Text>
						<Text style={styles.messageText}>
							Computer choice {SignList[computerChoice]}
						</Text>
						<Text style={styles.messageText}>
							{message} 
						</Text>
						<Pressable
							style={styles.btnView}
							onPress={() => {
								setModalVisible(!modalVisible)
								setComputerChoice(0)
								setYourChoice(0)
								setMessage(null)
								}}>
							<Text style={styles.btnText}>Play Again !</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			{isLoading && <AppLoader />}
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
	horizontalAlign: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	iconViewStyle: {
		backgroundColor: Colors.White,
		padding: Sizes.Small,
		borderRadius: Sizes.ExtraLarge * 1.6,
	},
	textStyle: {
		fontSize: Sizes.ExtraLarge * 1.8,
		color: Colors.Black,
	},
	verticalAlign: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		margin: Sizes.Small,
	},
	card: {
		backgroundColor: Colors.White,
		paddingHorizontal: Sizes.ExtraLarge,
		paddingVertical: Sizes.Large,
		borderRadius: Sizes.Medium,
		elevation: 2,
	},
	ruleHeading: {
		textTransform: 'capitalize',
		color: Colors.Black,
		fontSize: Sizes.Large,
		fontFamily: Fonts.bold,
		lineHeight: 23,
		letterSpacing: 0.12,
		marginBottom: Sizes.Base,
	},
	ruleText: {
		textTransform: 'capitalize',
		color: Colors.Red,
		fontSize: Sizes.Medium,
		fontFamily: Fonts.semiBold,
		lineHeight: 23,
		letterSpacing: 0.12,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	modalView: {
		alignItems: 'center',
		backgroundColor: Colors.White,
		paddingHorizontal: Sizes.ExtraLarge * 1.5,
		paddingVertical: Sizes.ExtraLarge,
		borderRadius: Sizes.Large,
		elevation: 4,
	},
	btnView: {
		backgroundColor: Colors.Red,
		padding: Sizes.Medium,
		borderRadius: Sizes.Medium,
		marginVertical: Sizes.Medium,
	},
	btnText: {
		fontSize: Sizes.Medium,
		fontFamily: Fonts.bold,
		textAlign: 'right',
		color: Colors.Black
	},
	messageText: {
		color: Colors.Black,
		fontSize: Sizes.Large,
		fontFamily: Fonts.semiBold,
		lineHeight: 28,
		letterSpacing: 0.12,
		marginTop: Sizes.Medium,
	},
})