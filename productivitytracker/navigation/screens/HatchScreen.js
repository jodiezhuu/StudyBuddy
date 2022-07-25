import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MonsterContext, {Monster} from '../../realm';
import {Setup} from '../context/Setup';
import {Update} from '../context/Update';

function Timer(props) {
  const hoursLeft = Math.floor((props.diff / (1000 * 60 * 60)) % 24);
  const minsLeft = Math.floor((props.diff / 1000 / 60) % 60);
  const secsLeft = Math.floor((props.diff / 1000) % 60);
  return (
    <View>
      <View>
        <Text>
          {hoursLeft} : {minsLeft} : {secsLeft}
        </Text>
      </View>
    </View>
  );
}

function Egg(props) {
  const imgs = [
    require('./eggs/egg0.png'),
    require('./eggs/egg1.png'),
    require('./eggs/egg2.png'),
    require('./eggs/egg3.png'),
    require('./eggs/egg4.png'),
    require('./eggs/egg5.png'),
    require('./eggs/egg6.png'),
    require('./eggs/egg7.png'),
    require('./eggs/egg8.png'),
    require('./eggs/egg9.png'),
    require('./eggs/egg10.png'),
    require('./eggs/egg11.png'),
    require('./eggs/egg12.png'),
    require('./eggs/egg13.png'),
    require('./eggs/egg14.png'),
    require('./eggs/egg15.png'),
  ];

  // const maxFrames = 15;
  // const imgs = [];
  // for (let i = 0; i <= maxFrames; i++) {
  //   imgs.push(require('./eggs/egg' + i + '.png'));
  // }

  return (
    <View>
      <Image source={imgs[props.index]} style={styles.egg} />
    </View>
  );
}

export default function HatchScreen({navigation}) {
  const [selectedHours, setSelectedHours] = useState('0');
  const [selectedMins, setSelectedMins] = useState('0');
  const [initialDiff, setInitialDiff] = useState(0);
  const [timerDiff, setTimerDiff] = useState(0);
  const [endDate, setEndDate] = useState(null);
  const [eggIndex, setEggIndex] = useState(0);
  const [monsterIndex, setMonsterIndex] = useState(0);
  const [timerEnded, setTimerEnded] = useState(false);
  // booleans
  const [running, setRunning] = useState(false);
  Setup();
  const closeAlert = () => {
    if (running) {
      Alert.alert('Are you sure?', 'How could you...', [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Kill', onPress: () => stopTimer()},
      ]);
    }
  };
  const startTimer = () => {
    if (!running) {
      const duration =
        parseInt(selectedHours) * 3600 + parseInt(selectedMins) * 5; // change bak
      if (duration == 0) {
        setEndDate(null);
      } else {
        const current = new Date();
        const newDate = new Date(current.getTime() + duration * 1000);
        setEndDate(newDate);
        setInitialDiff(Math.abs(current - newDate));
        setRunning(true);
        setEggIndex(0);
        setMonsterIndex(Math.floor(Math.random() * 21));
      }
    }
  };

  const stopTimer = () => {
    setEndDate(null);
    setRunning(false);
  };

  // const testing = (MonsterId, AddTime) => {
  //   const {useRealm, useQuery, useObject} = MonsterContext;
  //   const realm = useRealm();
  //   const monsterToUpdate = realm.objects('Monster')[MonsterId - 1];
  //   monsterToUpdate.count += 1;
  //   monsterToUpdate.totalTime += AddTime;
  //   const test = realm.objects('Monster')[MonsterId - 1];
  //   Alert.alert(test.totalTime, test.count);
  // };
  const calculateTime = end => {
    if (end == null) {
      setTimerDiff(0);
    } else {
      const currentTime = new Date();
      const diff = Math.abs(currentTime - end);
      setTimerDiff(diff);
      if (Math.floor(diff / 1000) === 0) {
        setTimerEnded(true);
      }
      const start = Math.floor(initialDiff / 1000);
      const current = Math.floor(diff / 1000);
      const interval = start / 16;
      setEggIndex(Math.floor((start - current) / interval));
    }
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      calculateTime(endDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDate]);

  // if (Math.floor(timerDiff / 1000) === 0) {
  //   stopTimer();
  //   // clearInterval(endDate);
  //   Alert.alert('Great Job!', 'Your cute monster has hatched', [
  //     {text: 'Back', style: 'cancel'},
  //   ]);
  // }

  Update(monsterIndex, initialDiff / 1000, timerEnded);

  if (timerEnded) {
    stopTimer();
    Alert.alert('Great Job!', 'Your cute monster has hatched', [
      {text: 'Back', style: 'cancel'},
    ]);
    setTimerEnded(false);
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.container}>
        <Text style={{height: 50, width: 100, right: 45, top: 30}}>
          {'Hours'}
        </Text>
        <Picker
          id="hoursInput"
          selectedValue={selectedHours}
          style={{height: 50, width: 100, right: 75, top: 0}}
          onValueChange={(itemValue, itemindex) => setSelectedHours(itemValue)}>
          <Picker.Item label="3" value="3" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="0" value="0" />
        </Picker>
        <Text style={{height: 50, width: 100, left: 100, top: -70}}>
          {'Minutes'}
        </Text>
        <Picker
          id="minsInput"
          selectedValue={selectedMins}
          style={{height: 50, width: 100, left: 75, top: -100}}
          onValueChange={(itemValue, itemindex) => setSelectedMins(itemValue)}>
          <Picker.Item label="45" value="45" />
          <Picker.Item label="30" value="30" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="0" value="0" />
        </Picker>
        <Button
          title="Start Hatching"
          onPress={() => {
            startTimer();
          }}
        />
        <Button
          title="Kill Monster"
          onPress={() => {
            closeAlert();
          }}
        />
      </View>
      <Timer diff={timerDiff} />
      <Monsters index={monsterIndex} />
      <Egg index={eggIndex} />
    </View>
  );
}

function Monsters(props) {
  let MonsterImg = [
    require('./monsters/monster1.png'),
    require('./monsters/monster2.png'),
    require('./monsters/monster3.png'),
    require('./monsters/monster4.png'),
    require('./monsters/monster5.png'),
    require('./monsters/monster6.png'),
    require('./monsters/monster7.png'),
    require('./monsters/monster8.png'),
    require('./monsters/monster9.png'),
    require('./monsters/monster10.png'),
    require('./monsters/monster11.png'),
    require('./monsters/monster12.png'),
    require('./monsters/monster13.png'),
    require('./monsters/monster14.png'),
    require('./monsters/monster15.png'),
    require('./monsters/monster16.png'),
    require('./monsters/monster17.png'),
    require('./monsters/monster18.png'),
    require('./monsters/monster19.png'),
    require('./monsters/monster20.png'),
    require('./monsters/monster21.png'),
  ];

  return (
    <View>
      <Image style={styles.monster} source={MonsterImg[props.index]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  egg: {
    width: 500,
    height: 400,
    right: -250,
    bottom: -250,
    position: 'absolute',
    alignItems: 'center',
  },
  monster: {
    height: 110,
    width: 120,
    top: 65,
    position: 'relative',
  },
});
