/**
 * Song model.
 *
 * @public
 */
export default class Song {
    /**
     * Song constructor.
     *
     * @param {Object} song
     */
    constructor(song = {}) {
        this.id = song.id !== '' ? song.id : '';
        this.singer = song.singer ? song.singer : '';
        this.song_name = song.song_name ? song.song_name : '';
        this.artist = song.artist ? song.artist : '';
        this.url = song.url ? song.url : '';
        // this.artists = this.transformArtistData(song.artists);
        // this.tags = this.transformTagData(song.tags);
    }
}
