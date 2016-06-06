import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('people', { path: '/' }, function() {
    this.route('show', { path: '/people/:person_id' });
  });
});

export default Router;
