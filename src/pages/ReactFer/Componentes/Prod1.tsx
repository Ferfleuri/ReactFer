import React from "react";
import { Image, Text, StyleSheet, Dimensions, View } from "react-native";

import produto from '../../../../assets/produto.jpg'
import logo from '../../../../assets/logo.png'
import reactFer from "../mocks/reactFer";

type Props = {
  nomeLogo: String,
  descricao: String,
  preco: String
}

const width = Dimensions.get('screen').width;

export default function Prod1() {
  return (
    <>
      <Image source={produto} style={personalizar.produto} />
      <View style={personalizar.skincare}>
        <View style={personalizar.logo}>
          <Image style={personalizar.imagemLogo} source={logo} />
          <Text style={personalizar.nomeLogo}>{reactFer.Prod1.nomeLogo}</Text>
        </View>
        <Text style={personalizar.descricao}>
        {reactFer.Prod1.descricao}
        </Text>
        <Text style={personalizar.preco}>{reactFer.Prod1.preco}</Text>
      </View>
    </>
  );
}

const personalizar = StyleSheet.create({
  produto: {
    width: "100%",
    height: 700 / 920 * width
  },
  skincare: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  nomeLogo: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12
  },
  imagemLogo: {
    width: 32,
    height: 32
  },
  logo: {
    flexDirection: "row",
    paddingVertical: 12
  },
  descricao: {
    color: "#A3A3A3",
    fontStyle: "italic"
  },
  preco:{
    fontSize: 26,
    lineHeight: 42,
    color: "#556B2F",
    marginTop: 8
  }
})
