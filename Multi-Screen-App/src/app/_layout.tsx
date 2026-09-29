import { Stack } from "expo-router";
import NavBar from "@/components/NavBar/NavBar";
import { View } from "react-native";
import { useState } from "react";


export default function RootLayout() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <NavBar selectedTab={selectedTab} onSelectTab={setSelectedTab} />
    </View>
  );
}
