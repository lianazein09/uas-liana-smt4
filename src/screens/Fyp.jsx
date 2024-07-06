import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const fyp = ({navigation}) => {
  return (
    <View backgroundColor="black">
      <TouchableOpacity>
        <Image source={require('../assets/lian.jpg')} style={styles.image} />
      </TouchableOpacity>
      <Text style={{color: 'white'}}>belum ada postingan</Text>
    </View>
  );
};
export default fyp;

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
    width: 350,
    height: 350,
  },
});
