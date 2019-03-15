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
                <div>
                    <input type="text" name="singer" placeholder="Stage Name" autoFocus />

                </div>
                <div>
                    <input type="text" name="song_name" placeholder="Song Name" />
                    <input type="text" name="artist" placeholder="Song Artist" />
                </div>
                <div>
                    <input type="text" name="url" placeholder="Youtube url (optional)" />
                </div>

                <button type="button" onClick={this.handleAddSong}>Add Song</button>
            </form>
        );
    };
}

export default KaraokeForm;
