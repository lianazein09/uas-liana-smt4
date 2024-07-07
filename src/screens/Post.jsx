import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const post = ({navigation}) => {
  return (
    <View backgroundColor="black">
      <TouchableOpacity>
        <Image source={require('../assets/ppjuga.jpeg')} style={styles.image2} />
        <Text style={{color: 'white'}}>raisasalsa</Text>
        <Image source={require('../assets/pantai.jpg')} style={styles.image} />
        <Image source={require('../assets/ig.png')} style={styles.image3} />
      </TouchableOpacity>
      <Text style={{color: 'white'}}>
        raisasalsa Let us go to beach at afternoon
      </Text>
      <Text style={{color: 'white'}}>
        Disukai oleh justinbieber dan 197.234 lainnya
      </Text>
    </View>
  );
};

export default post;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 360,
    height: 320,
  },
  image2: {
    width: 50,
    height: 60,
  },
  image3: {
    width: 200,
    height: 40,
  },
});
