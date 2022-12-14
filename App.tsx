import {
  Box,
  Rect,
  Canvas,
  Circle,
  Group,
  Drawing,
  Skia,
  PaintStyle
} from "@shopify/react-native-skia"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  const size = 256
  const r = size * 0.33

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 50 }}>Canvas Experiment</Text>
      <Canvas style={{ flex: 1 }}>
        {/* // Comment out to make it work on the web */}
        <Box
          box={{ width: size, height: size, x: 1, y: 1 }}
          color='red'
          style='stroke'
          strokeWidth={2}
        />

        {/* // Uncomment to test using rect in declarative and imperative style */}
        {/* <Rect width={size} height={size} x={1} y={1} color='red' style='stroke' strokeWidth={2} /> */}
        {/* <Drawing
          drawing={({ canvas, paint }) => {
            paint.setColor(Skia.Color("red"))
            paint.setStrokeWidth(2)
            paint.setStyle(PaintStyle.Stroke)
            canvas.drawRect({ x: 1, y: 1, width: size, height: size }, paint)

            // reset paint style
            paint.setStyle(PaintStyle.Fill)
          }}
        /> */}

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
