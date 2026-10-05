import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "@/components/Header/AccHeader"
import CreditCardCard from "@/components/CreditCardCard/CreditCardCard";
import BankingCard from "@/components/BankingCard/BankingCard";
import InvestingCard from "@/components/InvestingCard/InvestingCard";

export default function Accounts() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <Header mainHead="My Accounts" />
        <View>
          <Header subHead="Banking" />
          <BankingCard />
        </View>
        <View >
          <Header subHead="Credit Cards" />
          <CreditCardCard />
        </View>
        <View>
          <Header subHead="Personal Investing" />
          <InvestingCard />
        </View>

      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    paddingBottom: 100,
  },
});