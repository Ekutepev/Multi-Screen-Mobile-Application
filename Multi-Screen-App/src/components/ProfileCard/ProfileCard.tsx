import { View, Text } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';



type ProfileCardProps = {
    icon: "person" | "briefcase";
    name: string;
    email: string;
    available: string;
};

export default function ProfileCard({ icon, name, email, available }: ProfileCardProps) {
  return (
    <View style={styles.accCard}>
      <View style={styles.accCardTop}>
        <View style={styles.iconCircle}>
          <Ionicons name={icon} size={24} color="#1b5e3b" />
        </View>
        <View style={styles.accCardText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <Text style={styles.available}>Available to send: {available}</Text>
    </View>
  );
};