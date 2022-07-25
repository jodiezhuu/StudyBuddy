import * as React from 'react';
import MonsterContext, {Monster} from '../../realm';
import {Alert} from 'react-native';
const {RealmProvider} = MonsterContext;

export const Setup = () => {
  const {useRealm, useQuery, useObject} = MonsterContext;
  const realm = useRealm();
  const numMonsters = 21;

  if (realm.empty) {
    for (let i = 1; i <= numMonsters; i++) {
      realm.write(() => {
        realm.create('Monster', Monster.generate(i.toString(), '0', '0'));
      });
    }
  }
  // reset monster db
  // realm.write(() => {
  //   realm.deleteAll();
  // });

  // realm.write(() => {
  //   realm.create('Monster', Monster.generate('40', '0', '0'));
  // });
  // if (!realm.empty){
  //   Alert.alert('Not empty');
  // }
  // const test = useObject('Monster', '11');
  // Alert.alert(test?.id);
};
