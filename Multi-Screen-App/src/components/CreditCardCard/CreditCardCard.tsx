import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function CreditCardCard() {
  return (
    <View style={styles.creditCardTab}>
      <TouchableOpacity>
        <Pressable style={styles.creditCardTabTextContainer}>
          <View>
            <Text style={styles.creditCardTabText}>Credit card</Text>
          </View>
        </Pressable>
      </TouchableOpacity>
      <TouchableOpacity>
        <Pressable style={styles.innerCreditCardTabTextContainer}>
          <View>
            <Text style={styles.cardName}>TD AEROPLAN VISA{"\n"}INFINITE</Text>
            <Text>452034*****4350</Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>$1234.56</Text>
          </View>
        </Pressable>
      </TouchableOpacity>
    </View>
  );
}
