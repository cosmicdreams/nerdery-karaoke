import React from 'react';

import Song from '../Song/Song';
import "./SongList.css"

const SongList = props => {
    return (
        <div className="SongList">
            {props.songs.map(song => (
                <Song
                    handleToggleComplete={props.handleToggleComplete}
                    key={song.id}
                    song={song}
                />
            ))}
        </div>
    );
};

export default SongList;
