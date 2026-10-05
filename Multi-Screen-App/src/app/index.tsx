import Header from "@/components/Header/Header";
import MonthlySpendCard from "@/components/MonthlySpendCard/MonthlySpendCard";
import MyAccounts from "@/components/MyAccounts/IndexMyAccounts";
import QuickActions from "@/components/QuickActions/QuickActions";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View >
          <Header name="Evgeny" greeting="Good morning" />
          <View>
            <QuickActions />
            <MyAccounts title="My Accounts" additionTitle="TD MySpend" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
