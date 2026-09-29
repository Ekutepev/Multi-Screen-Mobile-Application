import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = {
  name: string;
  greeting?: string;
};

export default function AccHeader({ name, greeting }: HeaderProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.accHeader}>
        <View style={styles.groupedGreeting}>
          <Text style={[styles.greeting, { fontWeight: "bold", color: "black", fontSize: 32
          }]}>{name}</Text>
          <Text style={[styles.greeting, {color: "black"}]}>{greeting}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}