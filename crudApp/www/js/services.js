angular.module('starter.services', [])

.factory('Chats', function() {
  var chats = [{
    id: 0,
    name: 'Igor',
    ra: 963258741
  }, {
    id: 1,
    name: 'Willian',
    ra: 789456123
  }, {
    id: 2,
    name: 'Leticia',
    ra: 321456987,
  }, {
    id: 3,
    name: 'Daniel',
    ra: 123456789,
  }, {
    id: 4,
    name: 'Aline',
    ra: 987654321,
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
