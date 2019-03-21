import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ItemListe from "./ItemListe";

const axios = require("axios");

class Liste extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tri: "nom",
			albums: [],
			page: 0,
			nbPages: 0
		};
	}

	componentDidMount() {
		this.getAlbum();
	}

	getAlbum() {
		const params = {
			critereTri: this.state.tri,
			triAscendant: true,
			albumsParPage: 10,
			page: 0
		};
		axios
			.get("http://jonquet.iut-rcc-info.urca/albums/albums", params)
			.catch(function(error) {
				console.log(error);
			})
			.then(res => {
				if (res != undefined) {
					console.log(res.data);
					this.setState({ albums: res.data.albums });
				}
			});
	}

	setTri(tri) {}

	render() {
		console.log("state", this.state.albums);
		return (
			<View>
				<View style={styles.header}>
					<TouchableOpacity style={styles.buttonTri} onPress={this.onPress}>
						<Text>Artiste</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonTri} onPress={this.onPress}>
						<Text>Année</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonTri} onPress={this.onPress}>
						<Text>Genre</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.list}>
					{this.state.albums.map((alb, i) => {
						return (
							<ItemListe
								key={"album_" + i}
								nomAlbum={alb.nom}
								nomArtiste={alb.artiste.nom}
							/>
						);
					})}
				</View>
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
	header: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	list: {}
});

export default Liste;
