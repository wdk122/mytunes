// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() { 
    console.log(this.el);
    this.el.addEventListener('ended', function(){
      console.log('ended');
      this.el.ended = true;
    }, this);
  },

  events: {
    'ended': function() {
      console.log('ended');
      this.model.dequeue();
      // dequeue and play next song
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  ended: function(){
    this.trigger('ended', this);
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
