import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function BankingCard() {
  const [expanded, setExpanded] = useState(false);
  const accounts = [
    { name: "TD ALL-INCLUSIVE", balance: "$6,500.56"},
    { name: "COMPANION SAVINGS ACCOUNT", balance: "$8500.00"},
    { name: "TD EVERY DAY SAVINGS ACCOUNT", balance: "$4,800.00"},
    { name: "TD UNLIMITED CHEQING ACCOUNT", balance: "$432.56"},
    { name: "TD BUSINESS BASIC ACCOUNT", balance: "$5,872.87"}];
  return (
    <View style={styles.bankTab}>
      <Pressable style={styles.bankTabTextContainer} onPress={()  => setExpanded(!expanded)}>
        <View>
          <Text style={styles.bankTabText}>Banking</Text>
          <Text style={styles.subText}>5 accounts</Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>$26,105.99</Text>
          <MaterialCommunityIcons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={30}
            color="#797979"
          />
        </View>
      </Pressable>
      {expanded && (
        <View style={styles.accountList}>
          {accounts.map((acc)  => (
            <View key={acc.name} style={styles.accountRow}>
              <Text>{acc.name}</Text>
              <Text>{acc.balance}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
