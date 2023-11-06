import * as React from "react";
import { Text, View } from "react-native";
import ErrorIcon from "./assets/error.svg";
import { cssInterop } from "nativewind";
import "./globals.css";

cssInterop(ErrorIcon, {
  className: {
    target: "style",
    nativeStyleToProp: { width: true, height: true, fill: true },
  },
});

function Foo(props: { icon: React.ElementType }) {
  const Icon = props.icon;

  return (
    <View className="gap-2 flex-row items-center">
      <Icon className="h-16 w-16 fill-red-500" />
      <Text>Label</Text>
    </View>
  );
}

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center gap-8 p-6">
      {/* Works */}
      <ErrorIcon style={{ height: 64, width: 64, fill: "red" }} />

      {/* Works */}
      <ErrorIcon height={64} width={64} fill="red" />

      {/* Fill does not work */}
      <ErrorIcon className="h-16 w-16 fill-red-500" />

      {/* Fill does not work with icon as an element prop */}
      <Foo icon={ErrorIcon} />
    </View>
  );
}
