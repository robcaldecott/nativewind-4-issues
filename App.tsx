import * as React from "react";
import { View } from "react-native";
import ErrorIcon from "./assets/error.svg";
import { cssInterop } from "nativewind";
import "./globals.css";

cssInterop(ErrorIcon, {
  className: {
    target: "style",
    nativeStyleToProp: { width: true, height: true, fill: true },
  },
});

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center gap-8">
      {/* Works */}
      <ErrorIcon style={{ height: 64, width: 64, fill: "red" }} />

      {/* Works */}
      <ErrorIcon height={64} width={64} fill="red" />

      {/* Fill does not work */}
      <ErrorIcon className="h-16 w-16 fill-red-500" />
    </View>
  );
}
