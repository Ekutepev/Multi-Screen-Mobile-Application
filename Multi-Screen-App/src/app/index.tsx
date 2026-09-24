import Header from "@/components/Header/Header";
import MyAccounts from "@/components/MyAccounts/MyAccounts";
import NavBar from "@/components/NavBar/NavBar";
import QuickActions from "@/components/QuickActions/QuickActions";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <View style={styles.container}>
      <Header name="Evgeny" />

      <View>
        <QuickActions />
        <MyAccounts />
      </View>

      <NavBar selectedTab={selectedTab} onSelectTab={setSelectedTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f3f3f3",
  },
});
