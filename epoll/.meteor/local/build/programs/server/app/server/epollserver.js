(function(){Questions = new Meteor.Collection("questions");
Answers = new Meteor.Collection("answers");

Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.methods({
  addQuestion : function(questionText){
    console.log('Adding Question');
   
    if(this.userId) {
        var user = Meteor.user().profile.name;
      }
        var questionId = Questions.insert({
          'questionText' : questionText,
          'submittedOn': new Date(),
          'submittedBy' : Meteor.user(),
          'username' : user
      });
    return questionId;
  },

  addAnswer : function(answerText){
    console.log('Adding Answer');
    if(this.userId) {
        var user = Meteor.user().profile.name;
      }
        var answerId = Answers.insert({
          'questionText' : questionText,
          'submittedOn': new Date(),
          'submittedBy' : Meteor.user(),
          'username' : user
      });
    return answerId;
  },

  incrementYesVotes : function(questionId){
    console.log(questionId);
    Questions.update(questionId,{$inc : {'yes':1}});
  },

  incrementNoVotes : function(questionId){
    console.log(questionId);
    Questions.update(questionId,{$inc : {'no':1}});
  },

  answerQuestion : function(){
    console.log(answerId);
    document.getElementById("answerText").class = "visible";
    document.getElementById("answerbut").class = "visible";
  },  

  deleteQuestion : function(questionId){
    console.log(questionId);
    Questions.remove(questionId);
  }
});

})();
