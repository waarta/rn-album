import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

class PreviewAlbum extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<View style={styles.preview}>
				<TouchableOpacity onPress={this.press}>
					<Text style={styles.album}>{this.props.nomAlbum}</Text>
					<Text style={styles.artiste}>{this.props.nomArtiste}</Text>
					<Image
						source={{
							uri:
								"http://jonquet.iut-rcc-info.urca/albums/albums/" +
								this.props.id +
								"/jaquette"
						}}
						style={{
							width: 200,
							height: 200
						}}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	preview: {
		backgroundColor: "grey"
	}
});

export default PreviewAlbum;
