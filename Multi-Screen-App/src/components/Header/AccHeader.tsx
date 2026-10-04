import { Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type AccHeaderProps = {
  mainHead?: string;
  subHead?: string;
  PeraText?: string;
};

export default function AccHeader({ mainHead, subHead }: AccHeaderProps) {
  return (
    <SafeAreaView style={styles.accHeader}>
      <View style={styles.groupedGreeting}>
        {mainHead && <Text style={[styles.HeaderOne, { color: "black" }]}>{mainHead}</Text>}
        {subHead && <Text style={[styles.HeaderTwo, { color: "black" }]}>{subHead}</Text>}
      </View>
    </SafeAreaView>
  );
}