import React, { Component } from "react";
import { Text, View, StyleSheet, Picker, AppState } from "react-native";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 5
    };
  }
  componentDidMount = () => {
    // AppState can tell you if the app is in the foreground or background, and notify you when the state changes.

    // AppState is frequently used to determine the intent and proper behavior when handling push notifications.
    AppState.addEventListener("change", this.handleAppStateChange);
  };
  componentWillUnmount = () => {
    AppState.removeEventListener("change", this.handleAppStateChange);
  };
  handleAppStateChange = nextAppState => {
    if (nextAppState === "background") {
      console.log("App is in background now!", this.state.seconds);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Elige el tiempo de tu notificacion en segundos:
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={seconds => this.setState({ seconds })}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="15" value={15} />
          <Picker.Item label="20" value={20} />
          <Picker.Item label="25" value={25} />
          <Picker.Item label="30" value={30} />
        </Picker>
      </View>
    );
  }
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
  picker: {
    width: 100
  }
});
export default Home;
