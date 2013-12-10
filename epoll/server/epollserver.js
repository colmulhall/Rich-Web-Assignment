Questions = new Meteor.Collection("questions");

Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.methods({
  addQuestion : function(questionText){
    console.log('Adding Question');
    var questionId = Questions.insert({
          'questionText' : questionText,
          'submittedOn': new Date(),
          'submittedBy' : Meteor.userId()
      });
    return questionId;
  },
<<<<<<< HEAD

=======
>>>>>>> fca180be1061af644df93eabce64bc6850a9b25d
  incrementYesVotes : function(questionId){
    console.log(questionId);
    Questions.update(questionId,{$inc : {'yes':1}});
  },
<<<<<<< HEAD

  incrementNoVotes : function(questionId){
    console.log(questionId);
    Questions.update(questionId,{$inc : {'no':1}});
  },

  deleteAllQs : function() {
    Questions.remove();
  }
});
=======
  incrementNoVotes : function(questionId){
    console.log(questionId);
    Questions.update(questionId,{$inc : {'no':1}});
  }
});


>>>>>>> fca180be1061af644df93eabce64bc6850a9b25d
