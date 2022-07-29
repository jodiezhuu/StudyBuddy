import React, {Text} from 'react';
import {StyleSheet, View, Image, Alert} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {getTotalTime, getTotalMonster} from '../context/Update';

export default function DetailsScreen({}) {
  var totalHours = Math.floor(parseInt(getTotalTime()) / 360);
  var totalMinutes = Math.floor(
    (parseInt(getTotalTime()) - totalHours * 360) / 60,
  );
  return (
    <>
      <Card>
        <Card.Title
          title="Total Number of Productive Hours"
          titleStyle={{
            textAlign: 'center',
            fontSize: 30,
            color: '#9BB8ED',
            paddingBottom: 50,
            fontWeight: 'bold',
          }}
          titleNumberOfLines={2}
          subtitle={
            totalHours.toFixed(0) +
            ' hours and ' +
            totalMinutes.toFixed(0) +
            ' minutes'
          }
          subtitleStyle={{fontSize: 20, color: '#9BB8ED', textAlign: 'center'}}
          style={{height: 300}}
        />
      </Card>
      <Card>
        <Card.Title
          title="Total Number of Monsters Collected"
          titleNumberOfLines={2}
          titleStyle={{
            textAlign: 'center',
            fontSize: 30,
            color: '#9BB8ED',
            paddingBottom: 50,
            fontWeight: 'bold',
          }}
          subtitle={getTotalMonster()}
          subtitleStyle={{fontSize: 20, color: '#9BB8ED', textAlign: 'center'}}
          style={{height: 300}}
        />
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  hoursCard: {
    alignItems: 'center',
    fontSize: 300,
  },
});
