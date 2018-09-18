angular.module('video-player')
  .service('youTube', function($http) {
      
    this.search = function(max, q = 'dota', cb) {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: window.YOUTUBE_API_KEY,
          type: 'video',
          maxResults: max,
          part: 'snippet',
          q: q,
          videoEmbeddable: true        
        }
      }).then(function successCallback(response) {
          cb(response.data.items);
      }, function errorCallback(response) {
          console.log('Search error');
      });
      
    }
  });