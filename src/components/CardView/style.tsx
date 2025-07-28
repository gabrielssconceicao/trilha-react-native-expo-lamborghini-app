import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  imageLogo: {
    flex: 1,
    width: '65%',
    resizeMode: 'contain',
  },
  carBrand: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
    fontStyle: 'italic',
  },
  carName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  carImage: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  priceLableContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  priceLable: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
