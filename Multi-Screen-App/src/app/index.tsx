import { FontAwesome6 } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.groupedGreeting}>
          <Text style={[styles.greeting, { fontSize: 14 }]}>Good morning</Text>
          <Text style={[styles.greeting, { fontWeight: "bold" }]}>Evgeny</Text>
        </View>
        <View style={styles.circleIcon}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="#008a00"
          />
        </View>
      </View>

      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: -20, flexGrow: 0 }}
        >
          <TouchableOpacity>
            <Pressable style={[styles.ovalButton, { marginLeft: 20 }]}>
              <MaterialCommunityIcons
                name="send-outline"
                size={24}
                color="#008a00"
              />
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                Interac e-Transfer
              </Text>
            </Pressable>
          </TouchableOpacity>

          <TouchableOpacity>
            <Pressable style={styles.ovalButton}>
              <Fontisto name="arrow-swap" size={24} color="#008a00" />
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                Transfer
              </Text>
            </Pressable>
          </TouchableOpacity>

          <TouchableOpacity>
            <Pressable style={styles.ovalButton}>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={24}
                color="#008a00"
              />
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                Pay Bills
              </Text>
            </Pressable>
          </TouchableOpacity>

          <TouchableOpacity>
            <Pressable style={styles.ovalButton}>
              <MaterialCommunityIcons
                name="camera-outline"
                size={24}
                color="#008a00"
              />
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                Deposit Cheque
              </Text>
            </Pressable>
          </TouchableOpacity>

          <TouchableOpacity>
            <Pressable style={styles.ovalButton}>
              <SimpleLineIcons name="globe" size={24} color="#008a00" />
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                TD Global Transfer
              </Text>
            </Pressable>
          </TouchableOpacity>

          <TouchableOpacity>
            <Pressable style={[styles.ovalButton, { marginRight: 20 }]}>
              <MaterialCommunityIcons
                name="currency-usd"
                size={24}
                color="#008a00"
              />
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                Request Money
              </Text>
            </Pressable>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.myAccountContainer}>
          <View style={styles.myAccounts}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              My Accounts
            </Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={40}
              color="#008a00"
            />
            <MaterialCommunityIcons
              style={{ marginLeft: "auto" }}
              name="dots-horizontal"
              size={24}
              color="black"
            />
          </View>

          <View style={styles.bankTab}>
            <TouchableOpacity>
              <Pressable style={styles.bankTabTextContainer}>
                <View>
                  <Text style={styles.bankTabText}>Banking</Text>
                  <Text style={{ color: "#7a7a7a" }}>5 accounts</Text>
                </View>
                <View
                  style={{
                    marginLeft: "auto",
                    marginRight: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontWeight: "bold", marginRight: 5, fontSize: 18 }}
                  >
                    $25654.00
                  </Text>
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={30}
                    color="#797979"
                  />
                </View>
              </Pressable>
            </TouchableOpacity>
          </View>
          <View style={styles.creditCardTab}>
            <TouchableOpacity>
              <Pressable style={styles.creditCardTabTextContainer}>
                <View>
                  <Text style={styles.creditCardTabText}>Credit card</Text>
                </View>
              </Pressable>
            </TouchableOpacity>
            <TouchableOpacity>
              <Pressable
                style={[
                  styles.innerCreditCardTabTextContainer,
                  { borderTopWidth: 1, borderTopColor: "#ccc" },
                ]}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "#008a00",
                    }}
                  >
                    TD AEROPLAN VISA{"\n"}INFINITE
                  </Text>
                  <Text>452034*****4350</Text>
                </View>
                <View
                  style={{
                    marginLeft: "auto",
                    marginRight: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    $1234.56
                  </Text>
                </View>
              </Pressable>
            </TouchableOpacity>
          </View>

          <View style={styles.personalInvestmentTab}>
            <TouchableOpacity>
              <Pressable style={styles.personalInvestmentTabTextContainer}>
                <View>
                  <Text style={styles.personalInvestmentTabText}>
                    Personal Investing
                  </Text>
                  <Text>2 accounts</Text>
                </View>
                <View
                  style={{
                    marginLeft: "auto",
                    marginRight: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    $0.00
                  </Text>
                </View>
              </Pressable>
            </TouchableOpacity>
          </View>

          <View style={styles.accountAndServicesTab}>
            <TouchableOpacity>
              <Pressable style={styles.accountAndServicesTabTextContainer}>
                <View style={{ paddingLeft: 15 }}>
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
        </View>
      </View>
      <View style={styles.navBar}>
        <Pressable
          onPress={() => setSelectedTab("Home")}
          style={styles.navBarContainer}
        >
          <View style={[styles.navBarIconAlignment]}>
            <MaterialCommunityIcons
              style={{ paddingBottom: 10 }}
              name="home"
              size={24}
              color={selectedTab === "Home" ? "#038204" : "#7a7a7a"}
            />
            <Text
              style={{
                ...styles.navBarText,
                fontWeight: selectedTab === "Home" ? "bold" : "normal",
              }}
            >
              Home
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSelectedTab("Accounts")}
          style={styles.navBarContainer}
        >
          <View style={styles.navBarIconAlignment}>
            <MaterialCommunityIcons
              style={{ paddingBottom: 10 }}
              name="equal"
              size={24}
              color={selectedTab === "Accounts" ? "#038204" : "#7a7a7a"}
            />
            <Text
              style={{
                ...styles.navBarText,
                fontWeight: selectedTab === "Accounts" ? "bold" : "normal",
              }}
            >
              Accounts
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedTab("Alert");
            Alert.alert("Alert tab selected");
          }}
          style={styles.navBarContainer}
        >
          <View style={styles.navBarIconAlignment}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <FontAwesome6
                name="bars-staggered"
                size={12}
                color={selectedTab === "Alert" ? "#038204" : "#7a7a7a"}
              />
              <AntDesign
                name="dollar-circle"
                size={24}
                color={selectedTab === "Alert" ? "#038204" : "#7a7a7a"}
              />
            </View>
            <Text
              style={{
                ...styles.navBarText,
                fontWeight: selectedTab === "Alert" ? "bold" : "normal",
              }}
            >
              Alert
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSelectedTab("Rewards")}
          style={styles.navBarContainer}
        >
          <View style={styles.navBarIconAlignment}>
            <MaterialCommunityIcons
              style={{ paddingBottom: 10 }}
              name="wallet-giftcard"
              size={24}
              color={selectedTab === "Rewards" ? "#038204" : "#7a7a7a"}
            />
            <Text
              style={{
                ...styles.navBarText,
                fontWeight: selectedTab === "Rewards" ? "bold" : "normal",
              }}
            >
              Rewards
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSelectedTab("More")}
          style={styles.navBarContainer}
        >
          <View style={[styles.navBarIconAlignment]}>
            <MaterialCommunityIcons
              style={{ paddingBottom: 10 }}
              name="menu"
              size={24}
              color={selectedTab === "More" ? "#038204" : "#7a7a7a"}
            />
            <Text
              style={{
                ...styles.navBarText,
                fontWeight: selectedTab === "More" ? "bold" : "normal",
              }}
            >
              More
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f3f3f3",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    minHeight: 200,
    width: "100%",
    padding: 20,
    backgroundColor: "#008a00",
  },

  groupedGreeting: {
    justifyContent: "flex-start",
    alignSelf: "flex-end",
    marginBottom: 30,
  },

  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  ovalButton: {
    width: "auto",
    height: 45,
    borderRadius: 22,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginLeft: 8,
    flexDirection: "row",
  },

  greeting: {
    color: "white",
    fontSize: 18,
  },

  myAccountContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },

  myAccounts: {
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    zIndex: 1,
    elevation: 1,
  },

  bankTab: {
    width: "90%",
    height: "auto",
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 10,
  },

  bankTabTextContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
  },

  bankTabText: {
    fontWeight: "bold",
    fontSize: 19,
  },

  creditCardTab: {
    width: "90%",
    height: "auto",
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  creditCardTabTextContainer: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 15,
    marginLeft: 15,
  },
  innerCreditCardTabTextContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 15,
  },

  creditCardTabText: {
    fontWeight: "bold",
    fontSize: 19,
  },

  personalInvestmentTab: {
    width: "90%",
    height: "auto",
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  personalInvestmentTabTextContainer: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    marginLeft: 15,
  },

  personalInvestmentTabText: {
    fontWeight: "bold",
    fontSize: 19,
  },

  accountAndServicesTab: {
    width: "90%",
    height: "auto",
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 10,
  },

  accountAndServicesTabTextContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
  },

  accountAndServicesTabText: {
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 10,
  },

  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  navBarContainer: {
    flex: 1,
    height: "auto",
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  navBarIconAlignment: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 20,
  },

  navBarText: {
    fontSize: 12,
  },
});
