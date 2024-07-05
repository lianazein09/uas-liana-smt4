import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Image,
  SafeAreaView,
  MaterialCommunityIcons,
} from 'react-native';
import React from 'react';
import IconMenu from '../components/IconMenu';
import { TabActions } from '@react-navigation/native';

const Data = [
  {id: 1, label: 'Mufida.ryh.'},
  {id: 2, label: 'meifintl_440'},
  {id: 3, label: 'nindia.pcc_'},
  {id: 4, label: 'dianaulfa97'},
  {id: 5, label: 'amilats_sh'},
  {id: 6, label: 'susi_rahma'},
];

const Home = ({navigation}) => {
  return (
    <View style={styles.container} backgroundColor="black">
      <Image source={{uri:'https://asset-2.tstatic.net/batam/foto/bank/images/ilustrasi-instagram-resmi-merilis-fitur-darkmode-selamat-datang-di-instagram-dark-mode.jpg'}}
             style={{width:150, height:40}} 
      />
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
        vertical={true}
      />
    </View>

  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
