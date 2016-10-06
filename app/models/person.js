import DS from 'ember-data';
import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  friendships: DS.hasMany(),
  frienderFriendships: DS.hasMany('friendship', { inverse: 'friender' }),
  friendedFriendships: DS.hasMany('friendship', { inverse: 'friended' }),
});
