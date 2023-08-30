import {View, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import ReactFer from './src/pages/ReactFer';

export default function App() {


  return (
    <ScrollView>
      <StatusBar/>
      <ReactFer/>
    </ScrollView>
  );
}
