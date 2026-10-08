import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function InvestingCard() {
  const [expanded, setExpanded] = useState(false);
  const accounts = [
    { name: "HIGH INTEEREST TFSA SAVINGS ACCOUNT", balance: "$0.00" },
    { name: "MUTLI-HOLDING TFSA", balance: "$0.00" }];
  return (

    <View style={styles.personalInvestmentTab}>

      <Pressable style={styles.personalInvestmentTabTextContainer} onPress={() => setExpanded(!expanded)}>
        <View>
          <Text style={styles.personalInvestmentTabText}>
            Personal Investing
          </Text>
          <Text>2 accounts</Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>$0.00</Text>
          <MaterialCommunityIcons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={30}
            color="#797979"
          />
        </View>
      </Pressable>
      {expanded && (
        <View style={styles.accountList}>
          {accounts.map((acc) => (
            <View key={acc.name} style={styles.accountRow}>
              <Text style={styles.cardName}>{acc.name}</Text>
              <Text style={styles.balance}>{acc.balance}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
