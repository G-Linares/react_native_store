import { View, Text, Image, TextInput1 } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor:COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize:SIZES.extraLarge,
          color: COLORS.white,
          letterSpacing:"3px",
        }}>
          MyStore
        </Text>

      </View>
    </View>
  )
}

export default HomeHeader