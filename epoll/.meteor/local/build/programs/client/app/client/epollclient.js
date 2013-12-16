(function(){Questions = new Meteor.Collection("questions");
Answers = new Meteor.Collection("answers");
  
Template.addquestion.events({
    'click input.add-question' : function(event){
        event.preventDefault();
        var questionText = document.getElementById("questionText").value;
        if(questionText != "") {
            Meteor.call("addQuestion",questionText,function(error , questionId){
              console.log('added question with Id .. '+questionId);
          });
        }
        document.getElementById("questionText").value = "";
    }
});
Template.addquestion.events({
'click input.add-answer' : function(event){
        event.preventDefault();
        var answerText = document.getElementById("answerText").value;
        if(answerText != "") {
            Meteor.call("addAnswer",answerText,function(error , answerId){
            console.log('added answer with Id .. '+answerId);
          });
        }
        document.getElementById("answerText").value = "";
    }
});


Template.question.events({
        'click': function () {
            Session.set("selected_question", this._id);
    },

    'click a.yes' : function (event) {
      event.preventDefault();
      if(Meteor.userId()){
        var questionId = Session.get('selected_question');
        console.log('updating yes count for questionId '+questionId);
        Meteor.call("incrementYesVotes",questionId);
        
      }
      
    },
    'click a.no': function(event){
      event.preventDefault();
      if(Meteor.userId()){
        var questionId = Session.get('selected_question');
        console.log('updating no count for questionId '+questionId);
        Meteor.call("incrementNoVotes",questionId);
      }
    },

  

   'click a.delete': function (event) { 
     event.preventDefault();
     if(Meteor.userId()){
        var questionId = Session.get('selected_question');
        console.log('Deleting question '+questionId);
        Meteor.call("deleteQuestion",questionId);
      }
    }
    
  });

Template.questions.items = function(){
    return Questions.find({},{sort:{'submittedOn':-1}});
 };

})();
