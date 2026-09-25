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
		<div className='flex flex-col justify-center items-center gap-3 mb-5'>
			<h1 className='text-5xl font-bold'>Explore Pokémon</h1>
			<p className='text-xl font-semibold'>Search and discover your favorite Pokémon from the list below.</p>
			<div className='relative w-full max-w-2xl mx-auto '>
				<label htmlFor='pokemon-search' className='sr-only'>
					Search Pokémon
				</label>

				<input
					id='pokemon-search'
					type='search'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder='Search Pokémon...'
					className='w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-sm outline-none transition-colors focus:border-blue-500'
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
		</div>
	);
};

export default Searchbar;
