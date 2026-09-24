import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function AddAccountsCard() {
  return (
    <View style={styles.accountAndServicesTab}>
      <TouchableOpacity>
        <Pressable style={styles.accountAndServicesTabTextContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={24}
              color="#008a00"
            />
          </View>
          <View>
            <Text style={styles.accountAndServicesTabText}>
              Add Accounts and Services
            </Text>
          </View>
        </Pressable>
      </TouchableOpacity>
    </View>
  );
}
