import React from 'react';

import Song from './Song';

const SongList = props => {
    return (
        <div>
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
