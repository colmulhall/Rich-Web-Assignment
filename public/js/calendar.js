angular.module("Calendar",[])
        .controller("calendarCtrl",["$scope","$http",function($scope,$http){
        $scope.title = "My Calender"
        $scope.update = function() {
      if (!$scope.targetId) {
        $http.post('calendar/entries', {question: $scope.question, answer: $scope.answer})
          .success(function(data, status, headers, config) {
            $scope.messages.unshift(data);
			document.getElementById("questionbox").value="";
			document.getElementById("answerbox").value="";
            $scope.date = "";
          });

                 }
                 else
                 {
                $http.put('calendar/entries/' + $scope.targetId, {question: $scope.question, answer: $scope.answer})
                  .success(function(data, status, headers, config) 
                  {
                    var i;
                    for (i = 0; i < $scope.messages.length; i++) 
                    {
                      if ($scope.messages[i]._id === $scope.targetId) 
                      {
                        $scope.messages[i].question = $scope.question;
						$scope.messages[i].answer = $scope.answer;
                        break
                      }
                    }
                    $scope.targetId = null;
                    $scope.question = "";
					$scope.answer = "";

                  });
              };

                };
                $scope.edit = function(index) {
              var message = $scope.messages[index];
              $scope.question = message.question;
              $scope.targetId = message._id;
            };

                $scope.remove = function(index) {
              $http.delete('/calendar/entries/' + $scope.messages[index]._id)
          .success(function(data, status, headers, config) {
            $scope.messages.splice(index, 1);
           })
        };
				 $scope.answer = function(index) {
              var message = $scope.messages[index];
              $scope.answer = message.answer;
              $scope.targetId = message._id;
			  document.getElementById("answerbox").disabled=false;
            };
		
                // On Inital page load
                $http.get('/calendar/entries')
                  .success(function(data,status,headers,config){
                          $scope.messages = data;
                  })
        }]);