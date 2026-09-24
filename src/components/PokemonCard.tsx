import { PokemonCardData } from '@/types/pokemon';

interface PokemonCardProps {
	pokemon: PokemonCardData;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
	return (
		<div className='rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg transition-shadow duration-300'>
			<div className='flex justify-center rounded-lg bg-gray-50 p-4'>
				<img src={pokemon.image} alt={pokemon.name} className='h-32 w-32 object-contain' />
			</div>
			<div className='mt-4'>
				<p className='text-sm text-gray-500'>#{pokemon.id.toString().padStart(3, '0')}</p>
				<h2 className='text-sm font-semibold capitalize tracking-wider'>{pokemon.name}</h2>
			</div>
			<button className='mt-4 cursor-pointer w-full rounded-lg text-sm font-semibold tracking-wider bg-blue-500 py-2 text-white hover:bg-blue-600 transition-colors duration-300'>
				View Details
			</button>
		</div>
	);
};

export default PokemonCard;
