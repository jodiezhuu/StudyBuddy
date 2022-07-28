import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Image} from 'react-native';

// Db
import MonsterContext, {Monster} from '../realm';
const {RealmProvider} = MonsterContext;
import {Provider as PaperProvider} from 'react-native-paper';

// Screens
import HatchScreen from './screens/HatchScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import {Alert} from 'react-native';

//Screen names
const hatchName = 'Hatch';
const detailsName = 'Productivity';
const settingsName = 'Monsters';

const Tab = createBottomTabNavigator();

function MainContainer() {
  // const {useRealm, useQuery, useObject} = MonsterContext;
  // const realm = useRealm();

  // const isActivated = () => {
  //   if (realm.isEmpty()) {
  //     for (let i = 1; i <= 10; i++) {
  //       realm.create('Monster', Monster.generate(i.toString, '0', '0'));
  //     }
  //   }
  // };

  // const test = useObject(Monster, '1');
  // console.log(test?.id);
  // console.log(test?.count);

  return (
    <PaperProvider>
      <RealmProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName={hatchName}
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if (rn === hatchName) {
                  iconName = focused
                    ? require('./screens/icons/egg-filled.png')
                    : require('./screens/icons/egg-outline.png');
                } else if (rn === detailsName) {
                  iconName = focused
                    ? require('./screens/icons/graph-filled.png')
                    : require('./screens/icons/graph-outline.png');
                } else if (rn === settingsName) {
                  iconName = focused
                    ? require('./screens/icons/trophy-filled.png')
                    : require('./screens/icons/trophy-outline.png');
                }
                // You can return any component that you like here!
                return (
                  <Image
                    source={iconName}
                    style={{
                      resizeMode: 'contain',
                      height: 5,
                      width: 50,
                      paddingTop: 100,
                    }}
                  />
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: '#FEECD6',
              inactiveTintColor: '#FFDDE4',
              labelStyle: {
                paddingBottom: 9,
                fontSize: 9,
                fontWeight: 'bold',
              },
              style: {padding: 10, height: '70'},
              tabStyle: {height: 65, backgroundColor: '#9BB8ED'},
            }}>
            <Tab.Screen name={settingsName} component={SettingsScreen} />
            <Tab.Screen name={hatchName} component={HatchScreen} />
            <Tab.Screen name={detailsName} component={DetailsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </RealmProvider>
    </PaperProvider>
  );
}

export default MainContainer;
