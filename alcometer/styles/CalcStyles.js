import { StyleSheet } from "react-native";

export default StyleSheet.create({
  numInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  border: {
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 5,
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '50%',
    marginVertical: 5
  },
  result: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: 'center',
    marginBottom: 20
  },
})