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
      <Text>Pressable with broken styles</Text>
      <Pressable className="active:bg-gray-600 p-10 bg-yellow-300">
        <Text className="text-red-500 text-2xl">Pressable</Text>
      </Pressable>

      <Text>Sample button lifted from our app</Text>
      <LoginButton icon={GoogleLogo}>Continue with Google</LoginButton>

      <Text>View styles working!</Text>
      <View className="flex-row gap-4 items-center justify-center h-12 rounded-full border-2 border-black px-4 bg-yellow-200">
        <GoogleLogo height={28} width={28} />
        <Text>Contine with Google</Text>
      </View>

      <Text>View with active: styles not working</Text>
      <View className="flex-row gap-4 items-center justify-center h-12 rounded-full border-2 border-black px-4 bg-yellow-200 active:bg-yellow-500">
        <GoogleLogo height={28} width={28} />
        <Text>Contine with Google</Text>
      </View>
    </View>
  );
}
