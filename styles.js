import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#000000',
  },
  title: {
    color: '#F4F2F3',
    fontSize: 24,
    textAlign: "center"
  },
  resultCont: {
    backgroundColor: '#2E2E2E',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    color: '#000000',
    fontSize: 124,
    fontWeight: "bold"
  },
  diceBag: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '60%',
    width: '100%',
  },
  text: {
    fontSize: 18,
    color: '#F4F2F3',
  },
  dieCont: {
    width: 150,
    height: 180,
    alignItems: 'center'
  },
  die: {

  },
});