import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { DefaultTheme, DarkTheme, Provider, Switch } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Alcometer from './components/Calculate.js';
import Styles from './styles/AppStyles.js';
import { useFonts } from 'expo-font';
import { lightTheme, darkTheme } from './Themes';

export default function App() {

  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const customLightTheme = {
    ...DefaultTheme,
    ...lightTheme.colors,
    colors: lightTheme.colors,
  };

  const customDarkTheme = {
    ...DarkTheme,
    ...darkTheme.colors,
    colors: darkTheme.colors,
  };

  const theme = isDarkMode ? customDarkTheme : customLightTheme;

  const [night] = useFonts({
    Nightmare: require('./assets/fonts/NightmarePills-BV2w.ttf'),
  });

  if (!night) {
    return null;
  }

  return (
    <ScrollView backgroundColor={theme.colors.background1}>
      <Provider theme={theme}>
        <View style={Styles.container}>
          <StatusBar style='auto' />
          <LinearGradient
            colors={[theme.colors.lighter, theme.colors.background1]}
            style={Styles.background}
          />

          <View style={{ marginLeft: 10, marginTop: 20 }}>
            <Switch value={isDarkMode} onValueChange={toggleTheme} />
          </View>

          <View>
            <View style={{ alignItems: 'center' }}>
              <Text style={[Styles.h1, { color: theme.colors.font }, { fontFamily: 'Nightmare' }]}>
                Alcometer
              </Text>
            </View>
          </View>

          <View style={{ alignItems: 'center' }}>
            <View
              style={[Styles.box, Styles.shadow, { backgroundColor: theme.colors.background2 },]}>
              <Alcometer />
            </View>
          </View>
        </View>
      </Provider>
    </ScrollView>
  );
}
