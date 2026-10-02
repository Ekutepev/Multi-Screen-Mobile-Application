import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function InvestingCard() {
  return (
    <View style={styles.personalInvestmentTab}>
      
        <Pressable style={styles.personalInvestmentTabTextContainer}>
          <View>
            <Text style={styles.personalInvestmentTabText}>
              Personal Investing
            </Text>
            <Text>2 accounts</Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>$0.00</Text>
          </View>
        </Pressable>
    </View>
  );
}
