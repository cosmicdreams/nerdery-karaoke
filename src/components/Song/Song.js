import React from 'react';
import "./Song.css"

const Song = props => {
    return (
        <div
            style={props.song.completed ? {textDecoration: 'line-through'} : null}
            onClick={() => props.handleToggleComplete(props.song.id)}
            className="Song"
        >
            <div className="col">
                <div className="singer">
                    {props.song.singer}
                </div>
            </div>
            <div className="col">
                <div className="song">
                    {props.song.song_name}
                </div>
                <div className="artist">
                    By {props.song.artist}
                </div>
            </div>
        </div>
    );
};

export default Song;
