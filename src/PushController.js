import React, { Component } from "react";
import { Text, View } from "react-native";
import PushNotification from "react-native-push-notification";

export class PushController extends Component {
  componentDidMount = () => {
    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);

        // process the notification
      }
    });
  };
  render() {
    return null;
  }
}

export default PushController;
