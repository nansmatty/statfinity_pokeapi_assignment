'use client';

import { useEffect, useState } from 'react';

interface SearchbarProps {
	searchDataPokemonList: string[];
}

const Searchbar = ({ searchDataPokemonList }: SearchbarProps) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [pokeList, setPokeList] = useState<string[]>([]);

	// Debounce effect for search input and the list willbe used here is getPokemonList

	useEffect(() => {
		const debounceTimeout = setTimeout(() => {
			if (searchTerm === '') {
				setPokeList([]);
			} else {
				const filteredList = searchDataPokemonList.filter((pokemon) => pokemon.toLowerCase().includes(searchTerm.toLowerCase()));
				setPokeList(filteredList);
			}
		}, 300);

		return () => clearTimeout(debounceTimeout);
	}, [searchTerm, searchDataPokemonList]);

	return (
		<div className='relative w-full max-w-xl mx-auto mt-6'>
			<label htmlFor='pokemon-search' className='sr-only'>
				Search Pokémon
			</label>

			<input
				id='pokemon-search'
				type='search'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder='Search Pokémon...'
				className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-blue-500'
			/>

			{/* on search a list will appear here */}
			{pokeList.length > 0 && (
				<div className='mt-2 rounded-lg border border-gray-200 bg-white'>
					{pokeList.slice(0, 10).map((pokemon) => (
						<p key={pokemon} className='cursor-pointer px-4 py-2 capitalize hover:bg-gray-100'>
							{pokemon}
						</p>
					))}
				</div>
			)}
		</div>
	);
};

export default Searchbar;
