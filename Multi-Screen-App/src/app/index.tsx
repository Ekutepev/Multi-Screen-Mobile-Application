import Header from "@/components/Header/Header";
import MyAccounts from "@/components/MyAccounts/IndexMyAccounts";
import QuickActions from "@/components/QuickActions/QuickActions";
import { StyleSheet, View } from "react-native";

export default function Index() {

  return (
    <View style={styles.container}>
      
      <Header name="Evgeny" greeting="Good morning" />

      <View>
        <QuickActions />
        <MyAccounts />
      </View>
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
