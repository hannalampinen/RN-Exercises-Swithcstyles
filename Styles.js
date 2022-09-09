import { StyleSheet} from "react-native";

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1f211f',
  },
    fields: {
      flexDirection:'row',
      justifyContent:'space-between',
      padding: 30,
    },
  label: {
    color: 'white',
  }
});
export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
    fields: {
      flexDirection:'row',
      justifyContent:'space-between',
      padding: 30,
    }
});