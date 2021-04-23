import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import AuthContext from "../context/authContext";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { color } from "../constants/color";

const { blue, red } = color;
const { width, height } = Dimensions.get("screen");

export default function Signin() {
  const [identifiant, setIdentifiant] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser, signin } = useContext(AuthContext);

  return (
    <>
      <StatusBar style="light" backgroundColor={blue} />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          behavior="position"
          style={{ flex: 1, backgroundColor: blue }}
          keyboardVerticalOffset={height * -0.2}
        >
          <View style={styles.container}>
            <View style={styles.containerLogoAndImage}>
              <Image
                style={styles.imageLogo}
                source={require("./../assets/signin/logoblanc/logoblanculteamtv.png")}
              />
            </View>
            <View style={styles.containerImages}>
              <Image
                style={styles.imagesHeader}
                source={require("./../assets/signin/trace43/Trace43.png")}
              />
              <Image
                style={styles.imagesHeader}
                source={require("./../assets/signin/trace44/Trace44.png")}
              />
              <Image
                style={styles.imagesHeader}
                source={require("./../assets/signin/trace46/Trace46.png")}
              />
              <Image
                style={styles.imagesHeader}
                source={require("./../assets/signin/trace45/Trace45.png")}
              />
            </View>
            <View style={styles.containerLogAndText}>
              <Text style={styles.textPlatVideo}>Plateforme Vidéo</Text>
              <Text style={{ color: "white", fontSize: 20 }}>
                Sport, bien-être & prévention santé
              </Text>
              <View style={styles.verticalRedLine}></View>
              <Text style={styles.textSignin}>Identifiez vous</Text>

              <View style={styles.containerInput}>
                <TextInput
                  onChangeText={(term) => {
                    setIdentifiant(term);
                    setError(false);
                  }}
                  value={identifiant}
                  placeholder="Identifiant"
                  autoCapitalize="none"
                  style={styles.textInput}
                  autoCompleteType="username"
                />
                <TextInput
                  onChangeText={(term) => {
                    setPassword(term);
                    setError(false);
                  }}
                  value={password}
                  autoCapitalize="none"
                  secureTextEntry
                  placeholder="Mot de passe"
                  style={styles.textInput}
                  autoCompleteType="password"
                />
              </View>
              {error && (
                <Text style={{ color: red, marginBottom: 10 }}>{error}</Text>
              )}

              <Pressable>
                <Text style={styles.textForgotPassword}>
                  J'ai oublié mon mot de passe
                </Text>
              </Pressable>
              <TouchableOpacity style={{ marginBottom: 20 }}>
                <View style={styles.viewCode}>
                  <Text style={styles.textCode}>J'ai un code entreprise</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => signin(identifiant, password, setError, setUser)}
                style={{ marginBottom: 15 }}
              >
                <View style={styles.viewConnection}>
                  <Text style={styles.textConnection}>Connexion</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: blue,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  containerLogoAndImage: {
    justifyContent: "center",
    flexDirection: "row",
  },
  containerImages: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerLogAndText: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  imageLogo: {
    height: 39,
    width: 186,
    marginTop: 30,
    marginBottom: 50,
    marginTop: 70,
  },
  imagesHeader: {
    width: 129,
    height: 153,
  },
  textPlatVideo: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
  },
  verticalRedLine: {
    height: 25,
    width: 1,
    backgroundColor: red,
    marginVertical: 15,
  },
  containerInput: {
    alignItems: "stretch",
    width: "100%",
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 25,
    maxWidth: 400,
    marginHorizontal: 55,
    paddingVertical: 8,
    textAlign: "center",
    marginBottom: 20,
  },
  textForgotPassword: {
    color: "white",
    fontSize: 14,
    textDecorationLine: "underline",
    marginBottom: 30,
  },
  viewCode: {
    borderColor: red,
    borderWidth: 1,
    borderRadius: 30,
  },
  viewConnection: {
    backgroundColor: red,
    borderWidth: 1,
    borderRadius: 30,
  },
  textConnection: {
    fontSize: 20,
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 40,
  },
  textCode: {
    fontSize: 20,
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 28,
  },
  textSignin: {
    color: "white",
    fontSize: 39,
    fontWeight: "bold",
    marginBottom: 40,
  },
});
