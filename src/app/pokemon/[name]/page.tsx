import { getPokemonByName } from '@/lib/pokemon';
import { typeColors, statColors } from '@/utils/constant';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function PokemonDetails({ params }: { params: Promise<{ name: string }> }) {
	const { name } = await params;

	const pokemon = await getPokemonByName(name);

	const image = pokemon.sprites.other['official-artwork'].front_default;

	const types = pokemon.types.map((item) => item.type.name);

	const abilities = pokemon.abilities.map((item) => item.ability.name);

	const moves = pokemon.moves.map((item) => item.move.name);

	const stats = pokemon.stats.map((item) => ({
		name: item.stat.name,
		value: item.base_stat,
	}));

	return (
		<div className='px-4'>
			<Link href='/' className='text-black font-semibold tracker-wider px-5 py-3 bg-blue-300 rounded-full'>
				<ArrowLeft className='inline-block mr-2' />
				Back to Home
			</Link>

			<div className='bg-white px-4 py-7 rounded-xl capitalize mb-4 mt-10 flex gap-10'>
				<div className='flex rounded-lg p-4'>
					<img src={image ?? undefined} alt={pokemon.name} className='h-80 w-80 object-contain scale-125' />
				</div>
				<div className='flex flex-col justify-center ml-6'>
					<h1 className='text-5xl font-bold mb-2'>{pokemon.name}</h1>
					<div className='my-3'>
						<p className='font-semibold tracking-wide text-xl mb-2'>Types</p>
						<div className='flex gap-2'>
							{types.map((type, index) => (
								<div key={index} className={`rounded-xl text-center font-semibold tracking-wide text-sm py-2 px-3 ${typeColors[type]}`}>
									{type}
								</div>
							))}
						</div>
					</div>
					<div className='my-3'>
						<p className='font-semibold tracking-wide text-xl mb-2'>Abilities</p>
						<div className='flex gap-2'>
							{abilities.map((ability, index) => (
								<div key={index} className='rounded-xl bg-gray-300 text-center font-semibold tracking-wide text-sm py-2 px-3'>
									{ability}
								</div>
							))}
						</div>
					</div>
					<div className='my-3'>
						<p className='font-semibold tracking-wide text-xl mb-2'>Moves {moves.length > 10 ? '(First 10)' : ''} </p>
						<div className='flex gap-2'>
							{moves.length > 10
								? moves.slice(0, 10).map((move, index) => (
										<div key={index} className='rounded-xl bg-gray-300 text-center font-semibold tracking-wide text-sm py-2 px-3'>
											{move}
										</div>
									))
								: moves.map((move, index) => (
										<div key={index} className='rounded-xl bg-gray-300 text-center font-semibold tracking-wide text-sm py-2 px-3'>
											{move}
										</div>
									))}
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white px-4 py-7 rounded-xl capitalize mb-4 mt-10 flex flex-col gap-4'>
				<p className='font-semibold text-2xl tracking-wider'>Base Stats</p>
				<div className='flex flex-col gap-2 '>
					{stats.map((stat, index) => {
						console.log(stat);
						return (
							<div key={index} className='flex items-center justify-between'>
								<p className='w-1/4 font-semibold tracking-wide'>{stat.name} </p>
								<p className='w-1/4 font-semibold tracking-wide'>{stat.value}</p>
								<div className='w-3/4 bg-gray-200 rounded-full'>
									<div
										className={`text-xs font-medium text-white text-center p-0.5 leading-none rounded-full h-4 flex items-center justify-center ${statColors[stat.name]}`}
										style={{ width: `${stat.value}%` }}></div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
