angular.module('chatroom').service('messageService', function($http){
  //Here you'll need to create two methods. One called postMessage and the other called getMessages.

  //On the lines below create a getMessages method. This method will retrieve data from the backend.
  var BASE_URL = 'https://practiceapi.devmounta.in/api/'
  this.getMessages = function() {
    return $http({
      method: 'GET',
      url: BASE_URL + 'chats'
    });
  };

  //The url for the get request should be 'https://practiceapi.devmounta.in/api/chats'
  //Be sure to return whatever gets returned from $http so you can call .then in your controller.
  //On the line below create the postMessage method. This method will add data to the backend server.
  this.postMessage = function(message) {
    return $http({
      method: 'POST',
      url: BASE_URL + 'chats',
      data: {
        message: message
      }
    })
  }

  //The url for the request needs to be 'https://practiceapi.devmounta.in/api/chats'
  //Because we're making a POST request, we need a way to tell the server the data we want to give it, in your $http call (along with url and method) have a data property which has a value that is equal to another object with a key of message and a value of the message being passed to parse. IE data: {message: yourMessage}
  //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.




});
