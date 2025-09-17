import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./pages/login/Login";

export default function App() {
	return (
		/*<View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>*/
		<View style={styles.container}>
			<Login />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F0F4FF",
		alignItems: "center",
		justifyContent: "center",
	},
});
