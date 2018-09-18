angular.module('video-player')

  .component('videoListEntry', {
    bindings: {
      video: '<',
      onClick: '<'
    },
  
    controller: function($scope) {

    },
  
    templateUrl: 'src/templates/videoListEntry.html'
  });


