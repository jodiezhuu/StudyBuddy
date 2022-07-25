import * as React from 'react';
import MonsterContext, {Monster} from '../../realm';
import {Alert} from 'react-native';
const {RealmProvider} = MonsterContext;

export const Update = (monsterId, totalTime, endedTimer) => {
  const {useRealm, useQuery, useObject} = MonsterContext;
  const realm = useRealm();

  realm.write(() => {
    var updateMonster = realm.objects('Monster')[monsterId];
    if (endedTimer) {
      updateMonster.count = (parseInt(updateMonster.count, 10) + 1).toString(); // check why monster1 giving error
      updateMonster.totalTime = (
        parseInt(updateMonster.totalTime, 10) + totalTime
      ).toString();
    }
  });
};

export const isActivated = monsterId => {
  const {useRealm, useQuery, useObject} = MonsterContext;
  const monster = useObject('Monster', monsterId.toString());
  if (monster.count > 0) {
    return true;
  }
  return false;
};

export const getTotalTime = () => {
  const {useRealm, useQuery, useObject} = MonsterContext;
  const realm = useRealm();
  const monsters = realm.objects('Monster');
  var total = 0;
  for (var monster of monsters) {
    if (monster.totalTime) {
      total += parseInt(monster.totalTime, 10);
    }
  }
  // var time = 0;
  // for (const entry in timeEntries) {
  //   time += parseInt(entry, 10);
  //   Alert.alert(entry);
  // }
  return total.toString();
};

// export const getTotalMonster = () => {
//   const {useRealm, useQuery, useObject} = MonsterContext;
//   const realm = useRealm();
//   var monsterCount = 0;
//   for (let i = 1; i <= 21; i++) {
//     monsterCount += parseInt(realm.objects('Monster')[i].count, 10);
//   }
//   return monsterCount;
// };