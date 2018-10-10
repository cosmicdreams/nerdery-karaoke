
import React from 'react';

const Song = props => {
    return (
        <div
            style={props.song.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => props.handleToggleComplete(props.song.id)}
        >
            {props.song.singer} : {props.song.artist} - {props.song.song_name}
        </div>
    );
};

export default Song;
