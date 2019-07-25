import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { RNCamera } from "react-native-camera";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity style={styles.capture}>
            <Text onPress={this.takePicture.bind(this)} style={{ fontSize: 14 }}> Capture </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 15,
    top: 220,
    alignSelf: "center",
    margin: 20
  }
});
