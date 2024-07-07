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
  List,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMenu from '../components/IconMenu';

const Profile = ({navigation}) => {
  return (
    <ScrollView backgroundColor="black">
      <FlatList
        renderItem={({item}) => <IconMenu label={item.label} />}
      />
      <Image source={require('../assets/logo.png')} style={styles.image1} />
      <Image style={styles.avatar} source={require('../assets/lyn.jpg')} />
      <Text style={styles.statLabel1}>Liana Zein</Text>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Postingan</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>27M</Text>
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
      <MaterialCommunityIcons name="plus-box" color="grey" size={40}
      style={styles.btn1}/>
    </ScrollView>
    
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
    padding:50,
    marginTop:10,
    marginLeft:130,
    borderRadius: 900,

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
  image11: {
    width: 100,
    height: 100,
  },
  btn1: {
    margin: 10,
    padding: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight:10,
  },
  statLabel1: {
    color: 'white',
    fontSize: 16,
    marginLeft:150,
    marginTop:10,
  },  
});
