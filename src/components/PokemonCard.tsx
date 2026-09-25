import { PokemonCardData } from '@/types/pokemon';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PokemonCardProps {
	pokemon: PokemonCardData;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
	return (
		<div className='rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg transition-shadow duration-300'>
			<div className='flex justify-center rounded-lg bg-gray-50 p-4'>
				<img src={pokemon.image} alt={pokemon.name} className='h-28 w-28 sm:h-32 sm:w-32 object-contain scale-125 sm:scale-150' />
			</div>
			<div className='mt-4'>
				<p className='text-sm text-gray-500'>#{pokemon.id.toString().padStart(3, '0')}</p>
				<h2 className='font-extrabold capitalize tracking-wider'>{pokemon.name}</h2>
			</div>
			<Link
				href={`/pokemon/${pokemon.name}`}
				className='mt-4 block w-full rounded-lg bg-blue-200 py-2 text-center text-sm font-bold tracking-wider text-blue-800 transition-colors duration-300 hover:bg-blue-300 hover:text-blue-900'>
				View Details <ArrowRight className='inline-block ml-2 h-4 w-4' />
			</Link>
		</div>
	);
};

export default PokemonCard;
