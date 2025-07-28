import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from './style';

import Logo from '../../../assets/logo.png';

import { Divider } from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import { BuyButton } from '../BuyButton';
import { CarModel } from './props';
import { handleNextItem, handlePrevieusItem, loadCarData } from './actions';

export function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  useEffect(() => {
    (async () => {
      await loadCarData(6, setCarData);
    })();
  }, []);

  const renderCarDetails = () => (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.carImage}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`,
      }}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLableContainer}>
      <Button
        title='<'
        color={'#01A6B3'}
        onPress={() => handlePrevieusItem(carData, setCarData)}
      />
      <Text style={styles.priceLable}>{carData?.price}</Text>
      <Button
        title='>'
        color={'#01A6B3'}
        onPress={() => handleNextItem(carData, setCarData)}
      />
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      <Divider />
      {renderCarDetails()}
      {renderCarImage()}

      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}
