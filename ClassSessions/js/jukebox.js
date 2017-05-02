function Song( artist, title, url ) {
   this.artist = artist;
   this.title  = title;
   this.url    = url;
}

function Jukebox( videoElement, titleElement, artistElement ) {
   this.videoElement  = videoElement;
   this.titleElement  = titleElement;
   this.artistElement = artistElement;
   this.songs         = [ ];

   this.loadSong      = function( song ) {
      this.songs.push( song );
   }
   this.loadSongs     = function( songList ) {
      for ( i = 0; i < songList.length; i++ ) {
         this.loadSong(songList[i]);
      }
   }
   this.playSong      = function( index ) {
      var song = this.songs[index];

      this.videoElement.attr('src', ( song.url ));
      this.videoElement[0].play( );
      this.titleElement.html( song.title );
      this.artistElement.html( song.artist );
   }
   this.stopSong      = function( ) {
      this.videoElement.pause( );
   }
}

var videoElement = $( '#jukebox-current-song' );
var titleElement = $( '#jukebox-current h1' );
var artistElement = $( '#jukebox-current h2' );
var myJukebox = new Jukebox( videoElement, titleElement, artistElement );

var songList = [
   new Song( 'J.Cole', 'Return of Simba', 'assets/audio/return-of-simba.mp3' ),
   new Song( 'Griz', 'Getting Live', 'assets/audio/getting-live.mp3' ),
   new Song( 'Griz', 'Getting Live', 'assets/audio/getting-live.mp3' ),
   new Song( 'J.Cole', 'Return of Simba', 'assets/audio/return-of-simba.mp3' ),
];

myJukebox.loadSongs( songList );

var songPlaylist = $( '#jukebox-playlist' );

for ( i = 0; i < myJukebox.songs.length; i++ ) {
   var newElement = $( '<li>' + myJukebox.songs[i].artist + ' - ' + myJukebox.songs[i].title + '</li>' );

   newElement.click( function( j ) {
      return function( ) {
         myJukebox.playSong( j );
      };
   }( i ));

   songPlaylist.append( newElement );
}
