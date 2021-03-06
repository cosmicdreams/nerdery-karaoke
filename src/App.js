import React from 'react';
import './App.css';

import SongList from './components/SongList/SongList';
import KaraokeForm from './components/KaraokeForm/KaraokeForm';
import Song from "./models/Song";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            songs: [
                new Song(
                    {

                        id: 1528817077286,
                        singer: 'Chris Weber',
                        artist: 'Peter Gabriel',
                        song_name: 'In Your Eyes',
                        url: "q8paX24shfk",
                        completed: false
                    }
                ),
                new Song(
                    {
                        id: 1528817084358,
                        singer: 'Chris Weber',
                        artist: "Des'ree",
                        song_name: 'You Gotta Be',
                        url: "yLec_TsaTpA",
                        completed: false
                    }
                ),

            ],
        };
    }

    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    addSong = form => {
        console.log(form);
        const songs = this.state.songs.slice();
        songs.push(
            new Song(
                {
                    id: Date.now(),
                    singer: form.singer.value,
                    artist: form.artist.value,
                    song_name: form.song_name.value,
                    url: "",
                    completed: false
                })
        );
        this.setState({songs});
    };

    toggleSongComplete = id => {
        let songs = this.state.songs.slice();
        songs = songs.map(song => {
            if (song.id === id) {
                song.completed = !song.completed;
                return song;
            } else {
                return song;
            }
        });
        this.setState({songs});
    };

    getSongToPlay = id =>  {
        let songs = this.state.songs.slice();
        return songs[0].url;
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="App-logo"></div>
                    <div className="App-title">Nerdery Karaoke</div>
                    <div className="App-version">v0.1</div>
                </div>

                <div className="App-body">
                    <div className="col">
                        <SongList
                            handleToggleComplete={this.toggleSongComplete}
                            songs={this.state.songs}
                        />
                    </div>
                    <div className="col">
                        <h2>Quick Add</h2>
                        <KaraokeForm
                            value={this.state.song}
                            handleAddSong={this.addSong}/>
                        <h2>Currently playing</h2>
                        <youtube-thumbnail video_id={this.getSongToPlay(0)} target="karaokeWindow" />
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
