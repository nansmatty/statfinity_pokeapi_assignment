import { getPokemonByName } from '@/lib/pokemon';

export default async function PokemonDetails({ params }: { params: Promise<{ name: string }> }) {
	const { name } = await params;

	const pokemonDetails = await getPokemonByName(name);

	return <div>PokemonDetails</div>;
}
