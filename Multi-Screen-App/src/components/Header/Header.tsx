import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";
import { styles } from "./styles";

type HeaderProps = {
  name: string;
  greeting?: string;
};

export default function Header({ name, greeting }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.groupedGreeting}>
        <Text style={[styles.greeting, { fontSize: 14 }]}>{greeting}</Text>
        <Text style={[styles.greeting, { fontWeight: "bold" }]}>{name}</Text>
      </View>
      <View style={styles.circleIcon}>
        <MaterialCommunityIcons name="email-outline" size={24} color="#008a00" />
      </View>
    </View>
  );
}
