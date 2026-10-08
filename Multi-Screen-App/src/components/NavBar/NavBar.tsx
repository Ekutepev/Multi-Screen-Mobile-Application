import { FontAwesome6 } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ReactNode } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { router, usePathname } from "expo-router";


const ACTIVE_COLOR = "#038204";
const INACTIVE_COLOR = "#7a7a7a";

type NavBarItemProps = {
  label: string;
  selected: boolean;
  onPress?: () => void;
  renderIcon: (color: string) => ReactNode;
};

function NavBarItem({ label, selected, onPress, renderIcon }: NavBarItemProps) {
  const color = selected ? ACTIVE_COLOR : INACTIVE_COLOR;

  return (
    <Pressable onPress={onPress} style={styles.navBarContainer}>
      <View style={styles.navBarIconAlignment}>
        <View style={styles.iconRow}>{renderIcon(color)}</View>
        <Text
          style={[
            styles.navBarText,
            { fontWeight: selected ? "bold" : "normal" },
          ]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  return (
    <View style={styles.navBar}>
      <NavBarItem
        label="Home"
        selected={pathname === "/"}
        onPress={() => router.navigate("/")}
        renderIcon={(color) => (
          <MaterialCommunityIcons name="home" size={24} color={color} />
        )}
      />
      <NavBarItem
        label="Accounts"
        selected={pathname === "/accounts"}
        onPress={() => router.navigate("/accounts")}
        renderIcon={(color) => (
          <MaterialCommunityIcons name="equal" size={24} color={color} />
        )}
      />
      <NavBarItem
        label="Move Money"
        selected={pathname === "/moveMoney"}
        renderIcon={(color) => (
          <>
            <FontAwesome6 name="bars-staggered" size={12} color={color} />
            <AntDesign name="dollar-circle" size={24} color={color} />
          </>
        )}
      />
      <NavBarItem
        label="Rewards"
        selected={pathname === "/rewards"}
        renderIcon={(color) => (
          <MaterialCommunityIcons name="wallet-giftcard" size={24} color={color} />
        )}
      />
      <NavBarItem
        label="More"
        selected={pathname === "/more"}
        renderIcon={(color) => (
          <MaterialCommunityIcons name="menu" size={24} color={color} />
        )}
      />
    </View>
  );
}
