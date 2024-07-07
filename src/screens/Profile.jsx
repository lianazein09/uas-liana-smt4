import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import IconMenu from '../components/IconMenu';

const Data = [];

const Profile = ({navigation}) => {
  return (
    <View backgroundColor="black">
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
      />
      <Image source={require('../assets/logo.png')} style={styles.image1} />
      <Image style={styles.avatar} source={require('../assets/lyn.jpg')} />
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Postingan</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>650</Text>
          <Text style={styles.statLabel}>Pengikut</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>112</Text>
          <Text style={styles.statLabel}>Mengikuti</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Happiness belongs to those who are grateful.
      </Text>
      <Text style={styles.link}>taplink.cc/lianazein</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.btn}>
        <Text style={styles.txt}>PROFIL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
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
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#888',
    fontSize: 14,
  },
  bio: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  link: {
    color: '#1DA1F2',
    textAlign: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  image1: {
    width: 200,
    height: 70,
  },
  buttonText: {
    color: 'blue',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  photos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photo: {
    width: '50%',
    height: 150,
  },
});
