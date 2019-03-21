import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import PreviewAlbum from "./PreviewAlbum";

const axios = require("axios");

class ItemListe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPreview: false
		};
	}

	componentDidMount() {}

	async showPreview(id) {
		console.log("show", id);
		this.setState({
			showPreview: !this.state.showPreview
		});
	}

	render() {
		let res = this.state.showPreview ? (
			<PreviewAlbum
				nomAlbum={this.props.nomAlbum}
				id={this.props.id}
				nomArtiste={this.props.nomArtiste}
			/>
		) : null;
		return (
			<View style={styles.item}>
				<TouchableOpacity onPress={this.showPreview.bind(this, this.props.id)}>
					<Text style={styles.album}>{this.props.nomAlbum}</Text>
					<Text style={styles.artiste}>{this.props.nomArtiste}</Text>
				</TouchableOpacity>
				{res}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		paddingLeft: 15,
		justifyContent: "space-between"
	},
	album: {
		fontSize: 18
	},
	artiste: {
		marginRight: 0,
		fontSize: 16
	}
});

export default ItemListe;
