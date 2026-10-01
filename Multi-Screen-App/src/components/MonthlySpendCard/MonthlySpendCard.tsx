import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function MonthlySpendCard() {
  return (
    <View style={styles.MonthTab}>
      <TouchableOpacity>
        <Pressable style={styles.monthTabTextContainer}>
          <View>
            <Text style={styles.monthTabText}>Banking</Text>
            <Text style={styles.subText}>5 accounts</Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>$25654.00</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={30}
              color="#797979"
            />
          </View>
        </Pressable>
      </TouchableOpacity>
    </View>
  );
}
