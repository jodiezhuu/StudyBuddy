import {relativeTimeRounding} from 'moment';
import * as React from 'react';
import {View, Image, StyleSheet, ImageBackground, Alert} from 'react-native';
import {Update, isActivated} from '../context/Update';
import MonsterContext from '../../realm';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.stretch}
        source={require('./monsters/shelf.png')}>
        <Image
          style={isActivated(1) ? styles.monster1 : styles.monster1Inactive}
          source={require('./monsters/monster1.png')}
        />
        <Image
          style={isActivated(2) ? styles.monster2 : styles.monster2Inactive}
          source={require('./monsters/monster2.png')}
        />
        <Image
          style={isActivated(3) ? styles.monster3 : styles.monster3Inactive}
          source={require('./monsters/monster3.png')}
        />
        <Image
          style={isActivated(4) ? styles.monster4 : styles.monster4Inactive}
          source={require('./monsters/monster4.png')}
        />
        <Image
          style={isActivated(5) ? styles.monster5 : styles.monster5Inactive}
          source={require('./monsters/monster5.png')}
        />
        <Image
          style={isActivated(6) ? styles.monster6 : styles.monster6Inactive}
          source={require('./monsters/monster6.png')}
        />
        <Image
          style={isActivated(7) ? styles.monster7 : styles.monster7Inactive}
          source={require('./monsters/monster7.png')}
        />
        <Image
          style={isActivated(8) ? styles.monster8 : styles.monster8Inactive}
          source={require('./monsters/monster8.png')}
        />
        <Image
          style={isActivated(9) ? styles.monster9 : styles.monster9Inactive}
          source={require('./monsters/monster9.png')}
        />
        <Image
          style={isActivated(10) ? styles.monster10 : styles.monster10Inactive}
          source={require('./monsters/monster10.png')}
        />
        <Image
          style={isActivated(11) ? styles.monster11 : styles.monster11Inactive}
          source={require('./monsters/monster11.png')}
        />
        <Image
          style={isActivated(12) ? styles.monster12 : styles.monster12Inactive}
          source={require('./monsters/monster12.png')}
        />
        <Image
          style={isActivated(13) ? styles.monster13 : styles.monster13Inactive}
          source={require('./monsters/monster13.png')}
        />
        <Image
          style={isActivated(14) ? styles.monster14 : styles.monster14Inactive}
          source={require('./monsters/monster14.png')}
        />
        <Image
          style={isActivated(15) ? styles.monster15 : styles.monster15Inactive}
          source={require('./monsters/monster15.png')}
        />
        <Image
          style={isActivated(16) ? styles.monster16 : styles.monster16Inactive}
          source={require('./monsters/monster16.png')}
        />
        <Image
          style={isActivated(17) ? styles.monster17 : styles.monster17Inactive}
          source={require('./monsters/monster17.png')}
        />
        <Image
          style={isActivated(18) ? styles.monster18 : styles.monster18Inactive}
          source={require('./monsters/monster18.png')}
        />
        <Image
          style={isActivated(19) ? styles.monster19 : styles.monster19Inactive}
          source={require('./monsters/monster19.png')}
        />
        <Image
          style={isActivated(20) ? styles.monster20 : styles.monster20Inactive}
          source={require('./monsters/monster20.png')}
        />
        <Image
          style={isActivated(21) ? styles.monster21 : styles.monster21Inactive}
          source={require('./monsters/monster21.png')}
        />
      </ImageBackground>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  stretch: {
    width: 420,
    height: 750,
  },
  monster1: {
    width: 75,
    height: 60,
    position: 'absolute',
    marginTop: 110,
  },
  monster1Inactive: {
    width: 75,
    height: 60,
    position: 'absolute',
    marginTop: 110,
    tintColor: 'black',
  },
  monster2: {
    width: 100,
    height: 100,
    position: 'absolute',
    marginTop: 80,
    left: 70,
  },
  monster2Inactive: {
    width: 100,
    height: 100,
    position: 'absolute',
    marginTop: 80,
    left: 70,
    tintColor: 'black',
  },
  monster3: {
    width: 100,
    height: 120,
    position: 'absolute',
    marginTop: 60,
    left: 155,
  },
  monster3Inactive: {
    width: 100,
    height: 120,
    position: 'absolute',
    marginTop: 60,
    left: 155,
    tintColor: 'black',
  },
  monster4: {
    width: 100,
    height: 120,
    position: 'absolute',
    marginTop: 210,
    right: 10,
  },
  monster4Inactive: {
    width: 100,
    height: 120,
    position: 'absolute',
    marginTop: 210,
    right: 10,
    tintColor: 'black',
  },
  monster5: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 365,
    right: 30,
  },
  monster5Inactive: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 365,
    right: 30,
    tintColor: 'black',
  },
  monster6: {
    width: 150,
    height: 100,
    position: 'absolute',
    marginTop: 200,
  },
  monster6Inactive: {
    width: 150,
    height: 100,
    position: 'absolute',
    marginTop: 200,
    tintColor: 'black',
  },
  monster7: {
    width: 100,
    height: 100,
    position: 'absolute',
    marginTop: 218,
    right: 80,
  },
  monster7Inactive: {
    width: 100,
    height: 100,
    position: 'absolute',
    marginTop: 218,
    right: 80,
    tintColor: 'black',
  },
  monster8: {
    width: 100,
    height: 100,
    position: 'absolute',
    marginTop: 80,
    right: 30,
  },
  monster8Inactive: {
    width: 100,
    height: 100,
    position: 'absolute',
    marginTop: 80,
    right: 30,
    tintColor: 'black',
  },
  monster9: {
    width: 70,
    height: 90,
    position: 'absolute',
    bottom: 170,
    right: 100,
  },
  monster9Inactive: {
    width: 70,
    height: 90,
    position: 'absolute',
    bottom: 170,
    right: 100,
    tintColor: 'black',
  },
  monster10: {
    width: 75,
    height: 60,
    position: 'absolute',
    bottom: 308,
    right: 115,
  },
  monster10Inactive: {
    width: 75,
    height: 60,
    position: 'absolute',
    bottom: 308,
    right: 115,
    tintColor: 'black',
  },
  monster11: {
    width: 100,
    height: 80,
    position: 'absolute',
    bottom: 170,
    left: 170,
  },
  monster11Inactive: {
    width: 100,
    height: 80,
    position: 'absolute',
    bottom: 170,
    left: 170,
    tintColor: 'black',
  },
  monster12: {
    width: 100,
    height: 75,
    position: 'absolute',
    bottom: 305,
  },
  monster12Inactive: {
    width: 100,
    height: 75,
    position: 'absolute',
    bottom: 305,
    tintColor: 'black',
  },
  monster13: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 305,
    left: 70,
    tintColor: 'black',
  },
  monster13Inactive: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 305,
    left: 70,
    tintColor: 'black',
  },
  monster14: {
    width: 75,
    height: 75,
    position: 'absolute',
    bottom: 170,
    right: 30,
  },
  monster14Inactive: {
    width: 75,
    height: 75,
    position: 'absolute',
    bottom: 170,
    right: 30,
    tintColor: 'black',
  },
  monster15: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 165,
  },
  monster15Inactive: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 170,
    tintColor: 'black',
  },
  monster16: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 90,
    top: 75,
  },
  monster16Inactive: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 90,
    top: 75,
    tintColor: 'black',
  },
  monster17: {
    width: 70,
    height: 80,
    left: 85,
    position: 'absolute',
    bottom: 170,
  },
  monster17Inactive: {
    width: 70,
    height: 80,
    left: 85,
    position: 'absolute',
    bottom: 170,
    tintColor: 'black',
  },
  monster18: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: 180,
    bottom: 300,
  },
  monster18Inactive: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: 180,
    bottom: 300,
    tintColor: 'black',
  },
  monster19: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 445,
    left: 120,
  },
  monster19Inactive: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 445,
    left: 120,
    tintColor: 'black',
  },
  monster20: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 215,
    right: 150,
  },
  monster20Inactive: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 215,
    right: 150,
    tintColor: 'black',
  },
  monster21: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 170,
    right: 225,
    tintColor: 'black',
  },
  monster21Inactive: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 170,
    right: 225,
    tintColor: 'black',
  },
});
