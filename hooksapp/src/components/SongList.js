import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import NewSongForm from './NewSongForm';

function SongList() {
	const [songs, setSongs] = useState([
		{ title: 'this wild darkness', id: 1 },
		{ title: 'memory gospel', id: 2 },
		{ title: 'almost home', id: 3 },
	]);
	const [age, setAge] = useState(20);

	const addSong = (title) => {
		setSongs([...songs, { title, id: v4() }]);
	};
	useEffect(() => {
		console.log('useEffect hook ran', songs);
	}, [songs]);
	return (
		<div className="song-list">
			<ul>
				{songs.map((song) => (
					<li key={song.id}>{song.title}</li>
				))}
			</ul>
			<NewSongForm addSong={addSong} />
			<button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
		</div>
	);
}

export default SongList;
