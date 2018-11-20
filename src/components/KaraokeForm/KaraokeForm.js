import React from 'react';
import './KaraokeForm.css';

class KaraokeForm extends React.Component {
    form = React.createRef();

    handleAddSong = ev => {
        ev.preventDefault();
        this.props.handleAddSong(this.form.current);
    };

    render() {

        return (
            <form ref={this.form} className="AddSong">
                <input
                    type="text"
                    name="singer"
                    placeholder="Singer Name"
                />
                <input
                    type="text"
                    name="song_name"
                    placeholder="Song Name"
                />
                <input
                    type="text"
                    name="artist"
                    placeholder="Song Artist"
                />
                <button type="button" onClick={this.handleAddSong}>Add Song</button>
                <button type="button" onClick={this.props.handleClearSongs}>Clear Completed</button>
            </form>
        );
    };
};

export default KaraokeForm;
