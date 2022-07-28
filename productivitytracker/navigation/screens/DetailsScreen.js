import React, {Text} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {getTotalTime, getTotalMonster} from '../context/Update';

export default function DetailsScreen({}) {
  var totalTime = getTotalTime();
  var monsterCount = getTotalMonster();
  return (
    <>
      <Card>
        <Card.Title
          title="Total Number of Productive Hours"
          subtitle={getTotalTime()}
        />
        <Card.Content>
          <Paragraph>hi</Paragraph>
        </Card.Content>
        <Card.Cover source={require('./monsters/monster2.png')} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title
          title="Total Number of Monsters"
          subtitle={getTotalMonster()}
        />
        <Card.Content>
          <Paragraph>hi</Paragraph>
        </Card.Content>
        <Card.Cover source={require('./monsters/monster2.png')} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </>
  );
}
