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
  h1: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 50,
    fontWeight: '800',
    color: 'white',
  },
  box: {
    alignContent: 'flex-start',
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 5,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});