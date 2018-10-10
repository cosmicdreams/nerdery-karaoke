import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo';
import KaraokeForm from "../components/KaraokeForm";
import SongList from "../components/SongList";
import Song from "../components/Song";
import App from "../App";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
        </Button>
    ));

storiesOf('App', module)
    .add('full app', () => <App />);

storiesOf('KaraokeForm', module)
    .add('default', () => <KaraokeForm/>);

storiesOf('SongList', module)
    .add('default', () => <SongList songs={[
        {
            id: 1528817077286,
            singer: 'Chris Weber',
            artist: 'Peter Gabriel',
            song_name: 'In Your Eyes',
            url: "",
            completed: false
        },
        {
            id: 1528817084358,
            singer: 'Chris Weber',
            artist: "Des'ree",
            song_name: 'You Gotta Be',
            url: "",
            completed: false
        }
    ]}/>);

storiesOf('Song', module)
    .add('default', () => <Song
        key={[1]}
        song={[
            {
                id: 1,
                singer: 'Chris Weber',
                artist: "Des'ree",
                song_name: 'You Gotta Be',
                url: "https://www.youtube.com",
                completed: false,
            }
        ]}
    />);
