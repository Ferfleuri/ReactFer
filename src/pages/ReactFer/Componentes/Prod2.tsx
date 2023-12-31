import React from "react";
import { Image, Text, StyleSheet, Dimensions, View } from "react-native";

import produto2 from "../../../../assets/produto2.jpg";
import logo from "../../../../assets/logo.png";
import reactFer from "../mocks/reactFer";

const width = Dimensions.get("screen").width;

export default function Prod2() {
  return (
    <>
      <Image source={produto2} style={personalizar.produto} />
      <View style={personalizar.skincare}>
        <View style={personalizar.logo}>
          <Image style={personalizar.imagemLogo} source={logo} />
          <Text style={personalizar.nomeLogo}>{reactFer.Prod2.nomeLogo}</Text>
        </View>
        <Text style={personalizar.descricao}>
        {reactFer.Prod2.descricao}
        </Text>
        <Text style={personalizar.preco}>{reactFer.Prod2.preco}</Text>
      </View>
    </>
  );
}

const personalizar = StyleSheet.create({
  produto: {
    width: "100%",
    height: (700 / 920) * width,
  },
  skincare: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nomeLogo: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  imagemLogo: {
    width: 32,
    height: 32,
  },
  logo: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontStyle: "italic",
  },
  preco: {
    fontSize: 26,
    lineHeight: 42,
    color: "#556B2F",
    marginTop: 8,
  },
});
