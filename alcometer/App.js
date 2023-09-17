import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Alcometer from './components/Calculate.js';
import Styles from './styles/Styles.js';
import Colours from './styles/Colours.js';
import Fonts from './styles/Fonts.js';

export default function App() {

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView style={Colours.main}>
      <View style={Styles.container}>
        <LinearGradient
          colors={['#0096c7', 'white']}
          style={Styles.background} />
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        <View>
          <View style={Styles.contents}>
            <Text style={Fonts.h1}>Alcometer</Text>
          </View>
        </View>

        <View style={Styles.contents}>
          <View style={[Styles.box, Colours.section]}>
            <Alcometer />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}