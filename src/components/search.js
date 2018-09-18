angular.module('video-player')

  .component('search', {
    bindings: {
      searchResults: '<'
    },
  
    controller: function($scope, youTube) {      
      this.result = () => {
        youTube.search(5, this.input, this.searchResults);
      };
    },
  
    templateUrl: 'src/templates/search.html'
  });
