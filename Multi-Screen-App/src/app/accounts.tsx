import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Header from "@/components/Header/AccHeader"

export default function Accounts() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header name="My Accounts" greeting="Banking" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#f3f3f3",
    paddingHorizontal: 15
  },
});