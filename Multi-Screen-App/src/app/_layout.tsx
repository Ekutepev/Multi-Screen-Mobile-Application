import { Stack } from "expo-router";
import NavBar from "@/components/NavBar/NavBar";
import { View } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <NavBar selectedTab={selectedTab} onSelectTab={setSelectedTab} />
    </SafeAreaProvider>
  );
}
