import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const axios = require("axios");

class Album extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pistes: []
		};
	}

	componentDidMount() {
		this.getTracks();
	}

	getTracks() {
		console.log(this.props.id);
		axios
			.get(
				"http://jonquet.iut-rcc-info.urca/albums/albums/" +
					this.props.id +
					"/pistes"
			)
			.catch(function(error) {
				console.log(error);
			})
			.then(res => {
				if (res != undefined) {
					console.log(res.data);
					this.setState({ pistes: res.data });
				}
			});
	}

	render() {
		return (
			<View style={styles.album}>
				{this.state.pistes.map((p, i) => {
					return (
						<Text key={"track_" + i}>
							{p.nom} {p.durée}
						</Text>
					);
				})}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	album: {}
});

export default Album;
