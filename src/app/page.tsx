import PokemonExplorer from '@/components/PokemonExplorer';
import Searchbar from '@/components/Searchbar';
import { getPokemonList, getPokemonListHomepage } from '@/lib/pokemon';

export const dynamic = 'force-static';

export default async function Home() {
	const pokemonList = await getPokemonListHomepage();

	const searchDataPokemonList = await getPokemonList();

	return (
		<div>
			<Searchbar searchDataPokemonList={searchDataPokemonList} />
			<PokemonExplorer pokemonList={pokemonList} />
		</div>
	);
}
