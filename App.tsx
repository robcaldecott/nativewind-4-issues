import * as React from "react";
import { Text, View } from "react-native";
import ErrorIcon from "./assets/error.svg";
import "./globals.css";

function Foo(props: { icon: React.ElementType }) {
  const Icon = props.icon;

  return (
    <View className="gap-2 flex-row items-center">
      <Icon className="prop:h-16 prop:w-16 fill-red-500" />
      <Text>Label</Text>
    </View>
  );
}

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center gap-8 p-6">
      {/* Height and width do not work */}
      <ErrorIcon style={{ height: 64, width: 64, fill: "red" }} />

      {/* Works */}
      <ErrorIcon height={64} width={64} fill="red" />

      {/* Does not work */}
      <ErrorIcon className="prop:h-16 prop:w-16 fill-red-500" />

      {/* Does not work with icon as an element prop */}
      <Foo icon={ErrorIcon} />
    </View>
  );
}
