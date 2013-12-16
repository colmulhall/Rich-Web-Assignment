//REFERENCING : METEOR.COM
Questions = new Meteor.Collection("questions"); //create new collection
var firstcomment;
  
Template.addquestion.events({ // Template for adding a new comment
    'click input.add-answer' : function(event){ //When the function will be called
        event.preventDefault();
        var commentText = document.getElementById("commentText").value; //get value of the commentText area into a variable comment text
        if(commentText != "") { //check if commentText area is empty
           if(firstcomment == null)
          {
            firstcomment = commentText;
            document.getElementById("Text").value = firstcomment;
          }
          else
          {
              Meteor.call("addAnswer",commentText,function(error , questionId){ // call function to add comment to collection
              console.log('added question with Id .. '+questionId); // log message to the console
          });
          }
        }
        document.getElementById("commentText").value = ""; //reset textarea to empty
    }
});


Template.question.events({ //Templte for interacting with comments
        'click': function () {
            Session.set("selected_comment", this._id); //the comment is to b used
    },

    'click a.like' : function (event) { //if the like button is clicked
      event.preventDefault();
      if(Meteor.userId()){  //checs if the user is logged in
        var questionId = Session.get('selected_comment'); //gets the id of the comment
        console.log('updating like count for commentId '+questionId); //print out to the console
        Meteor.call("incrementlikeVotes",questionId); // call function the increment the likes
        
      }
      
    },
    'click a.dislike': function(event){ //if the dislike button is clicked
      event.preventDefault();
      if(Meteor.userId()){  //checks if the user is logged in
        var questionId = Session.get('selected_comment');  //gets the id of the comment
        console.log('updating dislike count for commentId '+questionId); //print out to the console
        Meteor.call("incrementdislikeVotes",questionId); // call function the increment the likes
      }
    },

  

   'click a.delete': function (event) { //if the delete button is selected  
     event.preventDefault();
     if(Meteor.userId()){ //checks if the user is logged in
        var questionId = Session.get('selected_comment'); //gets the id of the comment
        console.log('Posting comment '+questionId); //prints out to the console
        Meteor.call("deleteComment",questionId); // call function to delete the comment
      }
    },

    'click a.quote': function (event) { //if the quote button is selected
     event.preventDefault();
     var comment = document.getElementById("commentText").value; //gets value of the commentText
     if(Meteor.userId()){ //checks if the user is logged in
        var questionId = Session.get('selected_comment');  //selects the comment by id
        var editcom = Questions.findOne(questionId); //REFERENCE : METEOR DOCS
        console.log('Edit comment '+questionId);  //log to the console 
        document.getElementById("commentText").value = "''" + editcom.commentText + "''"; //set text of the of comment text to the value of rthe comment id
      }
    }
    
  });

Template.questions.items = function(){
    return Questions.find({},{sort:{'submittedOn':-1}}); //order in which the comments appear, Newest at the top
 };