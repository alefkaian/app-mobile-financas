import { View, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { LoginStyles } from "./LoginStyles";
import { useState } from "react";
import InputBox from "../components/InputBox";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const deviceWidth = useWindowDimensions().width;
	const deviceHeight = useWindowDimensions().height;
	const styles = LoginStyles(deviceWidth, deviceHeight);

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require("../../assets/logo.png")}></Image>
			<InputBox placeholder="Email" value={email} keyboardType="email-address" autoCapitalize="none" onChangeText={setEmail} />
			<InputBox placeholder="Senha" value={password} secureTextEntry={true} onChangeText={setPassword} />
			<TouchableOpacity style={styles.loginButton} onPress={() => {}}>
				<Text style={styles.loginButtonText}>Acessar</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.registerButton} onPress={() => {}}>
				<Text style={styles.registerButtonText}>Criar uma conta gratuita</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;
