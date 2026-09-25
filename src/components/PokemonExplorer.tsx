'use client';

import { useState } from 'react';
import { PokemonCardData } from '@/types/pokemon';
import PokemonCard from './PokemonCard';

const ITEMS_PER_PAGE = 12;

interface PokemonExplorerProps {
	pokemonList: PokemonCardData[];
}

const PokemonExplorer = ({ pokemonList }: PokemonExplorerProps) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(pokemonList.length / ITEMS_PER_PAGE);

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;

	const currentPokemonList = pokemonList.slice(startIndex, endIndex);

	return (
		<>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 p-4'>
				{currentPokemonList.map((pokemon) => (
					<PokemonCard key={pokemon.name} pokemon={pokemon} />
				))}
			</div>

			<div className='mt-6 sm:mt-8 flex flex-wrap items-center text-xs md:text-sm justify-center gap-2 sm:gap-4 mb-5'>
				<button
					disabled={currentPage === 1}
					className='rounded-xl px-3 py-2 bg-blue-500 text-white cursor-pointer font-semibold tracking-wide '
					onClick={() => setCurrentPage((page) => page - 1)}>
					Previous
				</button>

				<p>
					Page {currentPage} of {totalPages}
				</p>

				<button
					disabled={currentPage === totalPages}
					className='rounded-xl px-3 py-2 bg-blue-500 text-white cursor-pointer font-semibold tracking-wide '
					onClick={() => setCurrentPage((page) => page + 1)}>
					Next
				</button>
			</div>
		</>
	);
};

export default PokemonExplorer;
