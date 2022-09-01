import React from 'react';
import { StyleSheet } from 'react-native';
import Video from "react-native-video";

const video = "../../assets/heroVideoHomeH.mp4"
const { width, height } = Dimensions.get("window");

const BackgroundVideo = () => {
  return (
    <Video
      source={require(video)}
      style={styles.backgroundVideo}
      muted={true}
      repeat={true}
      resizeMode={"cover"}
      rate={1.0}
      ignoreSilentSwitch={"obey"}
    />
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  }
});

export default BackgroundVideo;