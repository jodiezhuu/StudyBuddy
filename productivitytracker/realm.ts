import {Realm, createRealmContext} from '@realm/react';

export class Monster extends Realm.Object {
  id!: string;
  count!: string;
  totalTime!: string;
  // the Task.generate() method creates Monster objects with fields with default values
  static generate(id: string, count: string, totalTime: string) {
    return {
      id,
      count,
      totalTime,
    };
  }
  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Monster',
    primaryKey: 'id',
    properties: {
      id: 'string',
      count: 'string',
      totalTime: 'string',
    },
  };
}

const config = {
  schema: [Monster],
};
export default createRealmContext(config);
