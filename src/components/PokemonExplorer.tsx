import { PokemonCardData } from '@/types/pokemon';
import PokemonCard from './PokemonCard';

interface PokemonExplorerProps {
	pokemonList: PokemonCardData[];
}

const PokemonExplorer = ({ pokemonList }: PokemonExplorerProps) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 p-4'>
			{pokemonList.map((pokemon) => (
				<PokemonCard key={pokemon.name} pokemon={pokemon} />
			))}
		</div>
	);
};

export default PokemonExplorer;
