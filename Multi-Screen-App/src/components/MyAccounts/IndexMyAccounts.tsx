import AddAccountsCard from "@/components/AddAccountsCard/AddAccountsCard";
import BankingCard from "@/components/BankingCard/BankingCard";
import CreditCardCard from "@/components/CreditCardCard/CreditCardCard";
import InvestingCard from "@/components/InvestingCard/InvestingCard";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import MonthlySpendCard from "../MonthlySpendCard/MonthlySpendCard";


type TextProps = {
  title: string;
  additionTitle?: string;
};

export default function MyAccounts({ title, additionTitle }: TextProps) {
  return (
    <View style={styles.myAccountContainer}>
      <View style={styles.myAccounts}>
        <Text style={styles.title}>{title}</Text>
        <MaterialCommunityIcons name="chevron-right" size={40} color="#008a00" />
        <MaterialCommunityIcons
          style={{ marginLeft: "auto" }}
          name="dots-horizontal"
          size={24}
          color="black"
        />
      </View>

      <BankingCard />
      <CreditCardCard />
      <InvestingCard />
      <AddAccountsCard />
      <View style={styles.myAccounts}>
        <Text style={styles.title}>
          {additionTitle}
        </Text>
        <MaterialCommunityIcons name="chevron-right" size={40} color="#008a00" />
      </View>
      <MonthlySpendCard balance="$245.24" monthTabText="This month, you've spent" subText="You're on track to save some money this month." />
    </View>
  );
}
