import React, {Text} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {getTotalTime} from '../context/Update';

export default function DetailsScreen({totalTime, count}) {
  var test = getTotalTime();
  return (
    <Card>
      <Card.Title title="Total Number of Productive Hours" subtitle={test} />
      <Card.Content>
        <Paragraph>hi</Paragraph>
      </Card.Content>
      <Card.Cover source={require('./monsters/monster2.png')} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
}
