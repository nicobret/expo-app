import { ImageSource } from "expo-image";
import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ imageSrc }: { imageSrc: ImageSource }) {
  return <Image source={imageSrc} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
