import { Box, Canvas, Circle, Group } from "@shopify/react-native-skia"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  const size = 256
  const r = size * 0.33
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 50 }}>Canvas Experiment</Text>
      <Canvas style={{ flex: 1 }}>
        <Box
          box={{ width: size, height: size, x: 1, y: 1 }}
          color='red'
          style='stroke'
          strokeWidth={2}
        />
        <Group blendMode='multiply'>
          <Circle cx={r} cy={r} r={r} color='cyan' />
          <Circle cx={size - r} cy={r} r={r} color='magenta' />
          <Circle cx={size / 2} cy={size - r} r={r} color='yellow' />
        </Group>
      </Canvas>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  }
})
