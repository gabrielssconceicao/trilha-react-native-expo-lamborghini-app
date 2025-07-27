import { View } from 'react-native';
import { styles } from './style';

export function Divider() {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider}></View>
    </View>
  );
}
