import { PokemonCardData, PokemonDetail, PokemonListItem } from '@/types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';
const TOTAL_POKEMON = 1351;

export const getPokemonList = async (): Promise<string[]> => {
	const res = await fetch(`${BASE_URL}/pokemon?limit=${TOTAL_POKEMON}&offset=0`, {
		cache: 'force-cache',
	});
	if (!res.ok) {
		throw new Error('Failed to fetch Pokemon list');
	}
	const data = await res.json();
	return data.results.map((item: { name: string }) => item.name);
};

export const getPokemonByName = async (name: string): Promise<PokemonDetail> => {
	const pokeName = name.trim().toLowerCase();
	const res = await fetch(`${BASE_URL}/pokemon/${pokeName}`);
	if (!res.ok) {
		throw new Error('Failed to fetch Pokemon');
	}

	const data = await res.json();

	return {
		id: data.id,
		name: data.name,
		types: data.types,
		abilities: data.abilities,
		stats: data.stats,
		moves: data.moves,
		sprites: {
			other: {
				'official-artwork': {
					front_default: data.sprites.other['official-artwork'].front_default,
				},
			},
		},
	};
};

export const getPokemonListHomepage = async (): Promise<PokemonCardData[]> => {
	const res = await fetch(`${BASE_URL}/pokemon?limit=${TOTAL_POKEMON}&offset=0`, {
		cache: 'force-cache',
	});
	if (!res.ok) {
		throw new Error('Failed to fetch Pokemon list for homepage');
	}
	const data = await res.json();
	return data.results.map((item: PokemonListItem) => {
		const id = Number(item.url.split('/').filter(Boolean).pop());

		return {
			id: id,
			name: item.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
		};
	});
};
