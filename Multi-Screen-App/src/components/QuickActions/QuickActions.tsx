import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { ReactNode } from "react";
import {
  Pressable,
  ScrollView,
  StyleProp,
  Text,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

type QuickActionButtonProps = {
  icon: ReactNode;
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

function QuickActionButton({ icon, label, onPress, style }: QuickActionButtonProps) {
  return (
    <Pressable style={[styles.ovalButton, style]} onPress={onPress}>
      {icon}
      <Text style={styles.ovalButtonText}>{label}</Text>
    </Pressable>
  );
}

export default function QuickActions() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      <QuickActionButton
        style={{ marginLeft: 20 }}
        icon={
          <MaterialCommunityIcons name="send-outline" size={24} color="#008a00" />
        }
        label="Interac e-Transfer"
        onPress={() => router.navigate("/interacETransfer")}
      />
      <QuickActionButton
        icon={<Fontisto name="arrow-swap" size={24} color="#008a00" />}
        label="Transfer"
      />
      <QuickActionButton
        icon={
          <MaterialCommunityIcons
            name="file-document-outline"
            size={24}
            color="#008a00"
          />
        }
        label="Pay Bills"
      />
      <QuickActionButton
        icon={
          <MaterialCommunityIcons
            name="camera-outline"
            size={24}
            color="#008a00"
          />
        }
        label="Deposit Cheque"
      />
      <QuickActionButton
        icon={<SimpleLineIcons name="globe" size={24} color="#008a00" />}
        label="TD Global Transfer"
      />
      <QuickActionButton
        style={{ marginRight: 20 }}
        icon={
          <MaterialCommunityIcons name="currency-usd" size={24} color="#008a00" />
        }
        label="Request Money"
      />
    </ScrollView>
  );
}
