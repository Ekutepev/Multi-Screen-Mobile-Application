import AddAccountsCard from "@/components/AddAccountsCard/AddAccountsCard";
import BankingCard from "@/components/BankingCard/BankingCard";
import CreditCardCard from "@/components/CreditCardCard/CreditCardCard";
import InvestingCard from "@/components/InvestingCard/InvestingCard";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View, ScrollView} from "react-native";
import { styles } from "./styles";

export default function MyAccounts() {
  return (
    <ScrollView>
      <View style={styles.myAccountContainer}>
        <View style={styles.myAccounts}>
          <Text style={styles.title}>My Accounts</Text>
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
      </View>
    </ScrollView>
  );
}
