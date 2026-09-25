import { getPokemonByName } from '@/lib/pokemon';

export default async function PokemonDetails({ params }: { params: Promise<{ name: string }> }) {
	const { name } = await params;

	const pokemon = await getPokemonByName(name);

	const image = pokemon.sprites.other['official-artwork'].front_default;

	const types = pokemon.types.map((item) => item.type.name);

	const abilities = pokemon.abilities.map((item) => item.ability.name);

	const stats = pokemon.stats.map((item) => ({
		name: item.stat.name,
		value: item.base_stat,
	}));

	return (
		<div>
			<div className='flex justify-center rounded-lg bg-gray-50 p-4'>
				<img src={image ?? undefined} alt={pokemon.name} className='h-32 w-32 object-contain' />
			</div>
			<h1>{pokemon.name}</h1>
			<p>Types: {types.join(', ')}</p>
			<p>Abilities: {abilities.join(', ')}</p>
			<p>Stats:</p>
			<ul>
				{stats.map((stat) => (
					<li key={stat.name}>
						{stat.name}: {stat.value}
					</li>
				))}
			</ul>
		</div>
	);
}
