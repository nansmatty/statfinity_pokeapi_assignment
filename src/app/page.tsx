import PokemonExplorer from '@/components/PokemonExplorer';
import { getPokemonListHomepage } from '@/lib/pokemon';

// export const dynamic = 'force-static';

export default async function Home() {
	const pokemonList = await getPokemonListHomepage();

	return (
		<main>
			<PokemonExplorer pokemonList={pokemonList} />
		</main>
	);
}
