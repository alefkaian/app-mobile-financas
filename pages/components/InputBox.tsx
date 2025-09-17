import { TextInput, TextInputProps, useWindowDimensions } from "react-native";
import { InputBoxStyle } from "./InputBoxStyle";

const InputBox = (props: TextInputProps) => {
	const deviceWidth = useWindowDimensions().width;
	const deviceHeight = useWindowDimensions().height;
    const styles = InputBoxStyle(deviceWidth, deviceHeight);
	return <TextInput style={styles.TextInput} {...props} />;
};

export default InputBox;
