export interface PokemonListItem {
	name: string;
	url: string;
}

export interface PokemonAbility {
	ability: {
		name: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
}

export interface PokemonType {
	slot: number;
	type: {
		name: string;
		url: string;
	};
}

export interface PokemonStat {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
}

export interface PokemonMove {
	move: {
		name: string;
		url: string;
	};
}

export interface PokemonSprites {
	other: {
		'official-artwork': {
			front_default: string | null;
		};
	};
}

export interface PokemonDetail {
	id: number;
	name: string;
	abilities: PokemonAbility[];
	types: PokemonType[];
	stats: PokemonStat[];
	moves: PokemonMove[];
	sprites: PokemonSprites;
}

export interface PokemonCardData {
	id: number;
	name: string;
	image: string;
}
