Questions = new Meteor.Collection("questions");

  
Template.addquestion.events({
    'click input.add-answer' : function(event){
        event.preventDefault();
        var commentText = document.getElementById("commentText").value;
        if(commentText != "") {
            Meteor.call("addAnswer",commentText,function(error , questionId){
              console.log('added question with Id .. '+questionId);
          });
        }
        document.getElementById("commentText").value = "";
    }
});


Template.question.events({
        'click': function () {
            Session.set("selected_comment", this._id);
    },

    'click a.like' : function (event) {
      event.preventDefault();
      if(Meteor.userId()){
        var questionId = Session.get('selected_comment');
        console.log('updating like count for commentId '+questionId);
        Meteor.call("incrementlikeVotes",questionId);
        
      }
      
    },
    'click a.dislike': function(event){
      event.preventDefault();
      if(Meteor.userId()){
        var questionId = Session.get('selected_comment');
        console.log('updating dislike count for commentId '+questionId);
        Meteor.call("incrementdislikeVotes",questionId);
      }
    },

  

   'click a.delete': function (event) { 
     event.preventDefault();
     if(Meteor.userId()){
        var questionId = Session.get('selected_comment');
        console.log('Posting comment '+questionId);
        Meteor.call("deleteComment",questionId);
      }
    },

    'click a.quote': function (event) { 
     event.preventDefault();
     var comment = document.getElementById("commentText").value;
     if(Meteor.userId()){
        var questionId = Session.get('selected_comment');
        var editcom = Questions.findOne(questionId);
        console.log('Edit comment '+questionId);
        document.getElementById("commentText").value = "''" + editcom.commentText + "''";
      }
    }
    
  });

Template.questions.items = function(){
    return Questions.find({},{sort:{'submittedOn':-1}});
 };