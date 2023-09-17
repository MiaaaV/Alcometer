import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import Styles from '../styles/Styles.js';

export default function Alcometer() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("")

  const calculate = () => {
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burn = weight / 10;
    let newGrams = grams - (burn * hours);

    if (weight === 0) {
      setResult(0);
      setError("Please insert weight");
    } else {
      setError("");

      let newResult = 0;

      if (gender === "male") {
        newResult = newGrams / (weight * 0.7);
      } else if (gender === "female") {
        newResult = newGrams / (weight * 0.6);
      }

      setResult(Math.max(0, newResult));
    }
  }

  return (
    <View>
      <Text style={Styles.label}>Weight</Text>
      <TextInput
        keyboardType='number-pad'
        value={weight.toString()}
        onChangeText={text => setWeight(text)}
        style={Styles.textInput}
      />

      <Text style={Styles.label}>Bottles</Text>
      <NumericInput value={bottles} onChange={value => setBottles(value)} />

      <Text style={Styles.label}>Hours</Text>
      <NumericInput value={hours} onChange={value => setHours(value)} />

      <View>
        <View>
          <Text>Male</Text>
          <RadioButton
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
          />
        </View>

        <View>
          <Text>Female</Text>
          <RadioButton
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
          />
        </View>
      </View>

      <Text style={Styles.result}>{result}</Text>
      <Text>{error}</Text>
      <TouchableOpacity style={Styles.button} onPress={calculate}>
        <Text>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}