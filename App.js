import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Liste from "./src/Liste";

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Liste />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		alignItems: "center"
	}
});
