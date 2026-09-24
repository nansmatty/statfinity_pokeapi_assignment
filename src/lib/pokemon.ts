import { PokemonDetail, PokemonListResponse } from '@/types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';
const TOTAL_POKEMON = 1351;

export const getPokemonList = async (): Promise<PokemonListResponse> => {
	const res = await fetch(`${BASE_URL}/pokemon?limit=${TOTAL_POKEMON}&offset=0`);
	if (!res.ok) {
		throw new Error('Failed to fetch Pokemon list');
	}
	return res.json();
};

export const getPokemonByName = async (name: string): Promise<PokemonDetail> => {
	const pokeName = name.trim().toLowerCase();
	const res = await fetch(`${BASE_URL}/pokemon/${pokeName}`);
	if (!res.ok) {
		throw new Error('Failed to fetch Pokemon');
	}

	return res.json();
};
