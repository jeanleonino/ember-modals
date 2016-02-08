import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  isShowingBasic: false,
  isShowingNotTranslucent: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    toggleBasic: function() {
      this.toggleProperty('isShowingBasic');
    },
    toggleNotTranslucent: function() {
      this.toggleProperty('isShowingNotTranslucent');
    }
  }
});
