import DS from 'ember-data';
import Model from 'ember-data/model';

//TODO: Fetch not just the friendships but also include the friender and friended relationships
// along with each friendship (use `include`)
export default Model.extend({
  name: DS.attr(),
  friendships: DS.hasMany(),
  frienderFriendships: DS.hasMany('friendship', { inverse: 'friender' }),
  friendedFriendships: DS.hasMany('friendship', { inverse: 'friended' }),
});
