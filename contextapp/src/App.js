import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';
import ThemeContextProvider from './context/ThemeContext';

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<ThemeContextProvider>
					<Navbar />
					<BookContextProvider>
						<BookList />
					</BookContextProvider>
					<ThemeToggle />
				</ThemeContextProvider>
			</AuthContextProvider>
		</div>
	);
}

export default App;
