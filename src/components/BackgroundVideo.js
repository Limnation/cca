import React from 'react';
import { StyleSheet } from 'react-native';

const video = "../../assets/heroVideoHomeH.mp4"

const BackgroundVideo = () => {
  return (
    <video autoplay muted loop style={styles.video}>
        <source src={video} type="video/mp4" />
    </video>
  );
}

const styles = StyleSheet.create({
  video: {
    position: fixed,
    right: 0,
    bottom: 0,
    minWidth: 100,
    minHeight: 100,
  }
});

export default BackgroundVideo;