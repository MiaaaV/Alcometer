import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Alcometer from './components/Calculate.js';
import Styles from './styles/AppStyles.js';
import { useFonts } from 'expo-font';

export default function App() {

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [night] = useFonts({
    Nightmare: require('./assets/fonts/NightmarePills-BV2w.ttf')
  });

  if (!night) {
    return null;
  }

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={Styles.container}>
        <StatusBar style='auto' />
        <LinearGradient
          colors={['#865221', 'white']}
          style={Styles.background} />
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        <View>
          <View style={{ alignItems: 'center' }}>
            <Text style={[Styles.h1, { fontFamily: 'Nightmare' }]}>Alcometer</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={[Styles.box, Styles.shadow, { backgroundColor: 'white' }]}>
            <Alcometer />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
