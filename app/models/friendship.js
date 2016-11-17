import DS from 'ember-data';
import Model from 'ember-data/model';

export default Model.extend({
  strength: DS.attr('number'),
  friender: DS.belongsTo('person', { async: false, inverse: 'frienderFriendships' }),
  friended: DS.belongsTo('person', { async: false, inverse: 'friendedFriendships' }),
});
