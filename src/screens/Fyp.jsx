import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Post from './Post';

const fyp = ({navigation}) => {
  return (
    <ScrollView backgroundColor="black" style={styles.View}>
      <TouchableOpacity>
        <Image source={require('../assets/pp..jpg')} style={styles.image2} />
        <Text style={{color: 'white'}}>lilyzyn</Text>
        <Image source={require('../assets/lyn.jpg')} style={styles.image} />
        <Image source={require('../assets/ig.png')} style={styles.image3} />
      </TouchableOpacity>
      <Text style={{color: 'white'}}>lilyzyn Happiness belongs to those who are gratefull</Text>
      <Text style={{color: 'white'}}>Disukai oleh justinbieber dan 197.234 lainnya
      </Text>
      <View>
      <Post />
      </View>
    </ScrollView>
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
    width: 360,
    height: 320,
  },
  image2: {
    width: 50,
    height: 50,
  },
  image3: {
    width: 200,
    height: 40,
  },
});
