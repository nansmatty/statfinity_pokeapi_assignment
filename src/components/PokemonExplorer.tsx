'use client';

import { useState } from 'react';
import { PokemonCardData } from '@/types/pokemon';
import PokemonCard from './PokemonCard';

const ITEMS_PER_PAGE = 18;

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
			<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4'>
				{currentPokemonList.map((pokemon) => (
					<PokemonCard key={pokemon.name} pokemon={pokemon} />
				))}
			</div>

			<div className='mt-8 flex items-center justify-center gap-4'>
				<button disabled={currentPage === 1} onClick={() => setCurrentPage((page) => page - 1)}>
					Previous
				</button>

				<p>
					Page {currentPage} of {totalPages}
				</p>

				<button disabled={currentPage === totalPages} onClick={() => setCurrentPage((page) => page + 1)}>
					Next
				</button>
			</div>
		</>
	);
};

export default PokemonExplorer;
