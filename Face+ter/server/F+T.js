//REFERENCE:  For work on collections found information on the http://docs.meteor.com/#collections
Questions = new Meteor.Collection("questions");
//variables for checking vote status of the user


Meteor.startup(function () {
    // code to run on server at startup
});

//add a new comment
Meteor.methods({
  addAnswer : function(commentText){
    console.log('Adding Question');
   
   //REFERENCE: User accounts learned from http://docs.meteor.com/#accounts_api
    if(this.userId) {
        var user = Meteor.user().profile.name;    //get the currently logged in user
      }
        var questionId = Questions.insert({     //for each new comment log the user name, time of submission, and the comment
          'commentText' : commentText,
          'submittedOn': new Date(),
          'submittedBy' : Meteor.user(),
          'username' : user
      });
    return questionId;
  },

  //increment the like counter button
  incrementlikeVotes : function(questionId){
    console.log(questionId);

    Questions.update(questionId,{$inc : {'like':1}});
  },

  //increment the dislike counter button
  incrementdislikeVotes : function(questionId){
    console.log(questionId);
      Questions.update(questionId,{$inc : {'dislike':1}});
  },

  //delete a comment
  deleteComment : function(questionId){
    console.log(questionId);
    
    var user = Meteor.user().profile.name;
    var questionUser = Questions.findOne(questionId);

    //only allow the user to delete a comment if it is their own
    if(user == questionUser.username)
    {
      Questions.remove(questionId);   //remove a comment based on its ID
    }
    else
      console.log("Unable to remove. Not your message");
  }
});