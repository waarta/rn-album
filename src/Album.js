import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

class Album extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<View style={styles.album}>
				<Text>ALBUM</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	album: {}
});

export default Album;
