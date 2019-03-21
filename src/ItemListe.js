import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

class ItemListe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//nomAlbum: "",
			//nomArtiste: ""
		};
	}

	componentDidMount() {}

	getInfos() {}

	render() {
		return (
			<View style={styles.item}>
				<TouchableOpacity onPress={this.onPress}>
					<Text>{this.props.nomAlbum}</Text>
					<Text>{this.props.nomArtiste}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between"
	},
	buttonTri: {
		backgroundColor: "#DDDDDD",
		padding: 10,
		margin: 10
	},
	item: {
		flexDirection: "row",
		justifyContent: "space-between"
	}
});

export default ItemListe;
