import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "@/components/Header/AccHeader"
import CreditCardCard from "@/components/CreditCardCard/CreditCardCard";
import BankingCard from "@/components/BankingCard/BankingCard";

export default function Accounts() {
  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <Header name="My Accounts"/>
      <View style={{width: "100%"}}>
        <View>
          <Header name="Banking" />
          <BankingCard />
        </View>
        <View >
          <Header name="Credit Cards"/>
          <CreditCardCard />
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
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    paddingHorizontal: 15
  },
});