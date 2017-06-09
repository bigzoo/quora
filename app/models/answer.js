import DS from 'ember-data';

export default DS.Model.extend({
  actualAnswer: DS.attr(),
  author: DS.attr(),
  voteCount: DS.attr(),
  answer: DS.belongsTo('question', {async:true})
});
