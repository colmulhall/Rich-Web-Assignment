Questions = new Meteor.Collection("questions");
var votedyes = false;
var votedno = false;


Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.methods({
  addAnswer : function(commentText){
    console.log('Adding Question');
   
    if(this.userId) {
        var user = Meteor.user().profile.name;
      }
        var questionId = Questions.insert({
          'commentText' : commentText,
          'submittedOn': new Date(),
          'submittedBy' : Meteor.user(),
          'username' : user
      });
    return questionId;
  },

  incrementlikeVotes : function(questionId){
    console.log(questionId);

    if(!votedyes)
    {
      Questions.update(questionId,{$inc : {'like':1}});
      votedyes = true;
    }
    if(votedno)
    {
      votedyno = false;
      Questions.update(questionId,{$inc : {'like':-1}});
    }
    
  },

  incrementdislikeVotes : function(questionId){
    console.log(questionId);

    if(!votedyno)
    {
      Questions.update(questionId,{$inc : {'dislike':1}});
      votedno = true;
    }
    if(votedyes)
    {
      votedyes = false;
      Questions.update(questionId,{$inc : {'dislike':-1}});
    }
    
  },

  deleteComment : function(questionId){
    console.log(questionId);
    
    var user = Meteor.user().profile.name;
    var questionUser = Questions.findOne(questionId);

    if(user == questionUser.username)
    {
      Questions.remove(questionId);
    }
    else
      console.log("Unable to remove. Not your message");
  }
});