import { StyleSheet } from "react-native";
import { FontSizeCalculator } from "../../utils/FontSizeCalculator";

export const InputBoxStyle = (deviceWidth: number, deviceHeight: number) => {
	return StyleSheet.create({
		TextInput: {
			backgroundColor: "#fff",
			width: deviceWidth * 0.85,
			height: deviceHeight * 0.06,
			marginVertical: deviceHeight * 0.01,
			paddingHorizontal: deviceWidth * 0.03,
			borderRadius: 4,
			fontFamily: "Roboto",
			fontWeight: 400,
			fontSize: FontSizeCalculator(16, 24, deviceWidth),
		},
	});
};
