import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { cssInterop } from "nativewind";
import "./globals.css";

// Uncomment to fix the TouchableOpacity issue
// cssInterop(TouchableOpacity, { className: { target: "style" } });

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center gap-8">
      <TouchableOpacity className="p-4 bg-yellow-300">
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}
