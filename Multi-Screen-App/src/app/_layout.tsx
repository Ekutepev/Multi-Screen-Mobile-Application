import { Stack } from "expo-router";
import NavBar from "@/components/NavBar/NavBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSegments } from "expo-router";

const HIDE_NAVBAR_ON = ["interacETransfer", "transfer"];

export default function RootLayout() {
  const segments = useSegments();

  const hideNavBar = HIDE_NAVBAR_ON.includes(segments[0]);
  
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      {!hideNavBar && <NavBar  />}
    </SafeAreaProvider>
  );
}
