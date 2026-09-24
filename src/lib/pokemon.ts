const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async () => {
	const res = await fetch(`${BASE_URL}/pokemon`);
	if (!res.ok) {
		throw new Error('Failed to fetch Pokemon list');
	}
	return res.json();
};

export const getPokemonByName = async (name: string) => {
	const res = await fetch(`${BASE_URL}/pokemon/${name}`);
	if (!res.ok) {
		throw new Error('Failed to fetch Pokemon');
	}
	return res.json();
};
