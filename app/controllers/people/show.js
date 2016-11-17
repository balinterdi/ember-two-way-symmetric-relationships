import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  friendships: computed('model.friendships.[]', function() {
    let person = this.get('model');
    let friendships = this.get('model.friendships');
    return friendships.map((friendship) => {
      let friend;
      if (friendship.get('friended.id') === person.get('id')) {
        friend = friendship.get('friender');
      } else {
        friend = friendship.get('friended');
      }
      return {
        friend,
        strength: friendship.get('strength')
      };
    });
  })
});
