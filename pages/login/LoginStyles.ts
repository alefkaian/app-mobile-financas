import { StyleSheet, useWindowDimensions } from "react-native";
import { FontSizeCalculator } from "../../utils/FontSizeCalculator";

export const LoginStyles = (deviceWidth: number, deviceHeight: number) => {
	return StyleSheet.create({
		container: {
			alignItems: "center",
			justifyContent: "center",
			marginTop: deviceHeight * -0.1,
		},
		image: {
			width: deviceWidth * 0.49,
			aspectRatio: 184 / 150,
			resizeMode: "contain",
			marginBottom: deviceHeight * 0.06,
		},
		loginButton: {
			backgroundColor: "#3B3DBF",
			width: deviceWidth * 0.85,
			height: deviceHeight * 0.06,
			marginVertical: deviceHeight * 0.01,
			alignItems: "center",
			justifyContent: "center",
			borderRadius: 4,
		},
		loginButtonText: {
			color: "#fff",
			fontFamily: "Roboto",
			fontWeight: 700,
			fontSize: FontSizeCalculator(20, 28, deviceWidth),
		},
		registerButton: {
			marginVertical: deviceHeight * 0.005,
		},
		registerButtonText: {
			fontFamily: "Roboto",
			color: "#171717",
			fontWeight: 400,
			fontSize: FontSizeCalculator(16, 22, deviceWidth),
		},
	});
};
