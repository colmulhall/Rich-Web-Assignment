(function(){Meteor.startup(function(){document.body.appendChild(Spark.render(Template.__define__(null,Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"navbar navbar-static-top navbar-inverse\">\r\n      <div class=\"navbar-inner\">\r\n        <div class=\"container\">\r\n\r\n          <a class=\"brand\" href=\"/\">Q & A</a>\r\n          <ul class=\"navbar pull-right\">\r\n            <li>\r\n              ",["{",[[0,"loginButtons"]]],"\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n\r\n      \r\n</div>\r\n\r\n        <div class=\"container\" id=\"main\">\r\n                ",["#",[[0,"if"],[0,"currentUser"]],["\r\n                        ",[">","addquestion"],"\r\n\r\n                "]],"\r\n                ",["#",[[0,"unless"],[0,"currentUser"]],["\r\n                        ",[">","banner"],"\r\n                "]],"\r\n                ",[">","questions"],"\r\n\r\n               \r\n          </div>"]))));});Template.__define__("banner",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"span6\">\r\n                              <div class=\"well\">\r\n                         <h4>Sign in using Twitter to submit new questions or to vote on existing questions.</h4>\r\n                         ",["{",[[0,"loginButtons"]]],"\r\n                              </div>\r\n                        </div>\r\n                </div>\r\n        </div>"]));
Template.__define__("addquestion",Package.handlebars.Handlebars.json_ast_to_func(["<textarea rows=\"3\" class=\"input-xxlarge\" name=\"questionText\" id=\"questionText\" placeholder=\"Add Your Question\"></textarea>\r\n  <br/>\r\n  <input type=\"button\" class=\"btn-info add-question\" value=\"Add Question\"/>"]));
Template.__define__("questions",Package.handlebars.Handlebars.json_ast_to_func(["<h2>All Questions</h2>\r\n        ",["#",[[0,"each"],[0,"items"]],["\r\n        ",[">","question"],"\r\n        "]]]));
Template.__define__("answers",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"each"],[0,"items"]],["\r\n        ",[">","answer"],"\r\n        "]]]));
Template.__define__("question",Package.handlebars.Handlebars.json_ast_to_func(["<div>\r\n                <p class=\"lead\">\r\n\t\t\t                  \r\n                       <h2 style=\"color:blue\"> ",["{",[[0,"questionText"]]]," ",["{",[[0,"answerText"]]]," <h6> by ",["{",[[0,"username"]]]," </h6> </h2> \r\n                      \r\n                       <a class=\"pull-right btn btn-small btn-danger delete ",["#",[[0,"unless"],[0,"currentUser"]],["invisible"]],"\" href=\"#\"><i class=\"icon-remove\" ></i>Delete ",["{",[[0,"delete"]]],"</a>\r\n\r\n                       <a class=\"btn btn-small btn-success yes ",["#",[[0,"unless"],[0,"currentUser"]],["invisible"]],"\" href=\"#\"><i class=\"icon-thumbs-up\"></i> Yes ",["{",[[0,"yes"]]],"</a>\r\n\r\n                       <a class=\"btn btn-small btn-warning no ",["#",[[0,"unless"],[0,"currentUser"]],["invisible"]],"\" href=\"#\"><i class=\"icon-thumbs-down\"></i> No ",["{",[[0,"no"]]],"</a>\r\n                        </br>\r\n                        </br>\r\n\r\n\r\n                       <textarea rows=\"3\" class=\"input-xxlarge visible\" name=\"answerText\" id=\"answerText\" placeholder=\"Add Your Answer\"></textarea>\r\n\r\n\r\n                      <input type=\"button\" class=\"btn-info add-answer\" value=\"Anwer question\"/>\r\n                         <br/>\r\n                        <div class=\"line-separator\"></div>\r\n                </p>\r\n        </div>"]));

})();
