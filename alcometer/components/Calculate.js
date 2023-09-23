import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { Provider, RadioButton, TextInput, Text, Button, useTheme, MD3Colors } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from '../styles/CalcStyles.js';

export default function Alcometer() {
  const { colors } = useTheme();

  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);
  const [congrats, setCongrats] = useState("")

  function setColor(result) {
    if (result <= 0.08) {
      return 'green';
    } else if (result <= 0.20) {
      return '#e0d100';
    } else {
      return 'red';
    }
  }

  const calculate = () => {
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burn = weight / 10;
    let newGrams = grams - (burn * hours);

    if (!weight || weight === 0) {
      setResult(0);
      Alert.alert("Insert weight!");
    } else {
      let newResult = 0;

      if (gender === "male") {
        newResult = newGrams / (weight * 0.7);
      } else if (gender === "female") {
        newResult = newGrams / (weight * 0.6);
      }

      const roundedResult = Math.max(0, parseFloat(newResult.toFixed(2)));
      setResult(roundedResult);

      if (roundedResult === 69) {
        setCongrats("Nice.")
      } else {
        setCongrats("");
      }

    }
  }

  return (
    <Provider theme={MD3Colors}>
      <View>
        <TextInput
          label="Weight (kg)"
          keyboardType='number-pad'
          value={weight.toString()}
          onChangeText={text => setWeight(text)}
          mode='outlined'
          outlineColor={colors.lighter}
          style={[{
            marginBottom: 10,
            backgroundColor: colors.background1
          }]}
          right={<TextInput.Icon icon='scale' size={30} />}
        />

        <View style={Styles.numInput}>
          <View>
            <Text style={[{ marginBottom: 5, color: colors.font }]}>Bottles</Text>
            <NumericInput
              type='up-down'
              value={bottles}
              onChange={value => setBottles(value)}
              minValue={0}
              totalHeight={45}
              containerStyle={[Styles.border, { borderColor: colors.lighter }]}
              reachMinDecIconStyle={{ color: colors.font2 }}
              borderColor='transparent'
              iconStyle={{ color: colors.white, fontSize: 20 }}
              upDownButtonsBackgroundColor={colors.primary} />
          </View>

          <View>
            <Text style={[{ marginBottom: 5, color: colors.font }]}>Hours</Text>
            <NumericInput
              type='plus-minus'
              value={hours}
              onChange={value => setHours(value)}
              minValue={0}
              totalHeight={45}
              containerStyle={[Styles.border, { borderColor: colors.lighter }]}
              reachMinDecIconStyle={{ color: colors.font2 }}
              borderColor='transparent'
              iconStyle={{ color: colors.white, fontSize: 20 }}
              rightButtonBackgroundColor={colors.primary}
              leftButtonBackgroundColor={colors.primary} />
          </View>
        </View>

        <View style={{ marginVertical: 10 }}>
          <View style={Styles.radio}>
            <Text style={{ color: colors.font3 }}>Male</Text>
            <View style={{ borderBottomWidth: 1, borderColor: colors.primary }}>
              <RadioButton
                value="male"
                status={gender === 'male' ? 'checked' : 'unchecked'}
                onPress={() => setGender('male')}
                color={colors.lighter}
              />
            </View>
          </View>

          <View style={Styles.radio}>
            <Text style={{ color: colors.font3 }}>Female</Text>
            <View style={{ borderBottomWidth: 1, borderColor: colors.primary }}>
              <RadioButton
                value="female"
                status={gender === 'female' ? 'checked' : 'unchecked'}
                onPress={() => setGender('female')}
                color={colors.lighter}
              />
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ alignSelf: 'center', fontSize: 20, color: 'green' }}>
            {congrats}
          </Text>
          <Text style={[Styles.result, { color: setColor(result) }]}>{result}</Text>

          <LinearGradient
            colors={[colors.gradient1, colors.gradient2, colors.gradient3]}
            style={{ borderRadius: 10 }}>
            <Button onPress={calculate}>
              <Text style={[{ color: colors.font, fontWeight: '700', letterSpacing: 3 }]}>CALCULATE</Text>
            </Button>
          </LinearGradient>
        </View>
      </View>
    </Provider >
  );
}