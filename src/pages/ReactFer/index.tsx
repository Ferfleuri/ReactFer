import React from "react";
import { View } from "react-native";

import Prod1 from "./Componentes/Prod1";
import Prod2 from "./Componentes/Prod2";

export default function ReactFer() {
  return (
    <>
      <View>
        <Prod1 />
        <Prod2 />
      </View>
    </>
  );
}
