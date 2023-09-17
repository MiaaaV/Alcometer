import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  contents: {
    alignItems: 'center',
  },
  box: {
    alignContent: 'flex-start',
    width: '85%',
    padding: 20,
    borderRadius: 5,
  },
  textInput: {
    padding: 5,
    borderWidth: 1,
    marginBottom: 10
  },
  label: {
    fontSize: 18,
    fontWeight: "bold"
  },
  result: {
    color: '#fb8500',
    fontSize: 18,
    fontWeight: "bold"
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#63d1e7',
    borderRadius: 5,
    padding: 10,
  }
});