import { View, Text } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
  url: string;
}

const Browser: React.FC<IProps> = (props) => {
  const { url } = props;
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "https://expo.dev" }} style={{ flex: 1 }} />
    </View>
  );
};

export default Browser;
