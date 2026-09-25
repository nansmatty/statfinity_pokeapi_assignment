'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface SearchbarProps {
	searchDataPokemonList: string[];
}

const Searchbar = ({ searchDataPokemonList }: SearchbarProps) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [pokeList, setPokeList] = useState<string[]>([]);

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
		<div className='flex flex-col justify-center items-center gap-3 mb-5 px-4 sm:px-0'>
			<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center'>Explore Pokémon</h1>
			<p className='text-sm sm:text-base md:text-xl font-semibold text-center px-2'>Search and discover your favorite Pokémon from the list below.</p>
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
					<div className='absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-y-auto rounded-lg border flex flex-col border-gray-200 bg-white shadow-lg'>
						{pokeList.slice(0, 10).map((pokemon) => (
							<Link href={`/pokemon/${pokemon}`} key={pokemon} className='cursor-pointer px-4 py-2 capitalize hover:bg-gray-100'>
								{pokemon}
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Searchbar;
