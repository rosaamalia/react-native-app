import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, ScrollViewBase, StyleSheet, Text, View } from "react-native";
import Dropdown from "./components/Dropdown";

export default function StatisticScreen() {
  const [balance, setBalance] = useState("21,350.54")
  return (
    <ScrollView>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Statistic</Text>
        </View>
        
        <View>
          <Text>Total Balance</Text>
          <Text style={{ fontSize: 28, fontWeight: "400" }}>${balance}</Text>
        </View>

        <View style={styles.headerOverview}>
          <Text>Overview</Text>
          <Dropdown/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  header: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 35,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "400"
  },
  headerOverview: {
    flex: 2
  }
});
