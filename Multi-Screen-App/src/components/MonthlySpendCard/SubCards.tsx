import { Text, View } from "react-native";
import { styles } from "./styles";

type subProps = {
    balance: string;
    text?: string;
    subText?: string;
}


export default function SubCard({ balance, subText }: subProps) {
    return (

        <View style={styles.subTabTextContainer}>
            <View style={styles.grayBalanceContainer}>
                <Text style={styles.subBalance}>{balance}</Text>
                <Text style={[styles.subText, { color: "black" }]}>{subText}</Text>
            </View>

        </View>

    )
};