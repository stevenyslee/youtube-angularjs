angular.module('video-player')
  .component('app', {
    bindings: {
      
    },
  
    controller: function() {
      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      this.searchResults = (videos) => {
        this.currentVideo = videos[0];
        this.videos = videos;
      };
      
    },
  
    templateUrl: 'src/templates/app.html'
  });
