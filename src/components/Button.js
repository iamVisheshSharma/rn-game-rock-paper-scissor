import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../assets";

export default function Button({ label, onPressHandle }) {
	return (
		<TouchableOpacity onPress={onPressHandle} style={styles.button}>
			<Text style={styles.buttonText}>
				{label}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.Yellow,
		padding: Sizes.Medium,
		width: '100%',
		borderRadius: Sizes.Small,
		elevation: 4,
	},
	buttonText: {
		textTransform: 'capitalize',
		color: Colors.Black,
		fontSize: Sizes.Large,
		fontFamily: Fonts.semiBold,
		lineHeight: Sizes.ExtraLarge,
		letterSpacing: 0.12,
	}
})