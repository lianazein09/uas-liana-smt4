import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Fyp from './Fyp';
import Post from './Post';
import {useNavigation} from '@react-navigation/native';

const Data = [
  {
    id: '01',
    name: 'Cerita Anda',
    image: require('../assets/lian.jpg'),
  },
  {
    id: '02',
    name: 'vinachuaks',
    image: require('../assets/vina.jpg'),
  },
  {
    id: '03',
    name: 'dianawakwaw',
    image: require('../assets/diana.jpg'),
  },
  {
    id: '04',
    name: 'mimilslebew',
    image: require('../assets/mimil.jpg'),
  },
  {
    id: '05',
    name: 'nindicomel',
    image: require('../assets/nindia.jpg'),
  },
];

const Home = () => {
  const Navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image1} />
      <FlatList
        style={styles.bgd}
        horizontal
        data={Data}
        renderItem={({item}) => (
          <Pressable style={styles.List}>
            <Image
              source={item.image}
              style={{
                width: 75,
                height: 75,
                resizeMode: 'center',
                borderRadius: 50,
                marginHorizontal: 7,
                marginVertical: 10,
              }}
            />
            <Text
              style={{
                color: 'white',
                top: -8,
                marginLeft: 5,
              }}>
              {item.name}
            </Text>
          </Pressable>
        )}
      />
      <View>
        <Fyp />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 5,
    //padding: 3,
  },
  image1: {
    width: 150,
    height: 50,
  },
});
