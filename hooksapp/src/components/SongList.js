import React, { useState } from 'react';
import { v4 } from 'uuid';
import NewSongForm from './NewSongForm';

function SongList() {
	const [songs, setSongs] = useState([
		{ title: 'this wild darkness', id: 1 },
		{ title: 'memory gospel', id: 2 },
		{ title: 'almost home', id: 3 },
	]);
	const addSong = (title) => {
		setSongs([...songs, { title, id: v4() }]);
	};
	return (
		<div className="song-list">
			<ul>
				{songs.map((song) => (
					<li key={song.id}>{song.title}</li>
				))}
			</ul>
			<NewSongForm addSong={addSong} />
		</div>
	);
}

export default SongList;
