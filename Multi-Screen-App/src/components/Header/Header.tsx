import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = {
  name: string;
  greeting?: string;
};

export default function Header({ name, greeting }: HeaderProps) {
  return (
    <SafeAreaView style={{ backgroundColor: "#008a00" }}>
      <View style={styles.header}>
        <View style={styles.groupedGreeting}>
          <Text style={styles.HeaderThree}>{greeting}</Text>
          <Text style={styles.HeaderTwo}>{name}</Text>
        </View>
        <View style={styles.circleIcon}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#008a00" />
        </View>
      </View>
    </SafeAreaView>
  );
}
