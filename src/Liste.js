import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ItemListe from "./ItemListe";
import Album from "./Album";

const axios = require("axios");

class Liste extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tri: "nom",
			albums: [],
			page: 0,
			nbPages: 0,
			showAlbum: false,
			currentAlbum: 0
		};
	}

	componentDidMount() {
		this.getAlbum();
	}

	showAlbum(id) {
		this.setState({
			showAlbum: !this.state.showAlbum,
			currentAlbum: id
		});
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
					this.setState({ albums: res.data.albums });
				}
			});
	}

	setTri(tri) {
		this.setState({ tri: tri });
		this.getAlbum();
	}

	render() {
		//console.log("state", this.state.albums);
		let res = "";

		this.state.showAlbum
			? (res = <Album id={this.state.currentAlbum} />)
			: (res = (
					<View>
						<View style={styles.header}>
							<TouchableOpacity
								style={styles.buttonTri}
								onPress={this.setTri.bind(this, "artiste")}
							>
								<Text>Artiste</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.buttonTri}
								onPress={this.setTri.bind(this, "ann%C3%A9e")}
							>
								<Text>Année</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.buttonTri}
								onPress={this.setTri.bind(this, "genre")}
							>
								<Text>Genre</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.list}>
							{this.state.albums.map((alb, i) => {
								return (
									<ItemListe
										key={"album_" + i}
										nomAlbum={alb.nom}
										id={alb.id}
										nomArtiste={alb.artiste.nom}
										showAlbum={this.showAlbum.bind(this, alb.id)}
									/>
								);
							})}
						</View>
					</View>
			  ));
		return res;
	}
}
const styles = StyleSheet.create({
	container: {
		//justifyContent: "space-between"
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
