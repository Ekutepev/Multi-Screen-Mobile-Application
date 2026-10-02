import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";
import { styles } from "./styles";
import SubCard from "./SubCards";

type MonthProps = {
  balance: string;
  monthTabText?: string;
  subText?: string;
};

export default function MonthlySpendCard({ monthTabText, balance, subText }: MonthProps) {
  return (
    <View style={styles.monthTab}>
      <View style={styles.monthTabTextContainer}>
        <View>
          <Text style={styles.monthTabText}>{monthTabText}</Text>
        </View>
        <View style={styles.greenBalanceContainer}>
          <View>
            <Text style={styles.balance}>{balance}</Text>
          </View>
          <View>
            <Text style={[styles.subText, { color: "black" }]}>{subText}</Text>
          </View>
        </View>
      </View>
      <View style={styles.Subcard}>
        <SubCard balance="600" subText="Typical Spend" />
        <SubCard balance="285" subText="Below Typical" />
      </View>
    </View >
  );
}
