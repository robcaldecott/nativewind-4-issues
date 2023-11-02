import * as React from "react";
import { Pressable, Text, View } from "react-native";
import GoogleLogo from "./assets/google.svg";
import "./globals.css";

function LoginButton(props) {
  const Icon = props.icon;

  return (
    <Pressable
      className={
        "h-12 flex-row items-center justify-between rounded-full border-2 border-black px-4 bg-yellow-200 active:bg-slate-500"
      }
      disabled={props.disabled}
      onPress={props.onPress}
    >
      <Icon height={28} width={28} />
      <Text>{props.children}</Text>
    </Pressable>
  );
}

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center gap-8">
      <Pressable className="active:bg-gray-600 p-10 bg-yellow-100">
        <Text className="text-red-500 text-2xl">Pressable</Text>
      </Pressable>
      <LoginButton icon={GoogleLogo}>Continue with Google</LoginButton>
    </View>
  );
}
