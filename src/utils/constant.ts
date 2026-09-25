// Here I will define some variables with tailwind color as their value. This will use the Types and Stats.
export const typeColors: Record<string, string> = {
	fire: 'bg-red-500',
	water: 'bg-blue-500',
	grass: 'bg-lime-500',
	electric: 'bg-yellow-600',
	psychic: 'bg-pink-500',
	ice: 'bg-cyan-500',
	dragon: 'bg-indigo-500',
	dark: 'bg-gray-800 text-white',
	fairy: 'bg-pink-300',
	normal: 'bg-gray-400',
	fighting: 'bg-red-700 text-white',
	flying: 'bg-sky-500',
	poison: 'bg-purple-500 text-white',
	ground: 'bg-yellow-700',
	rock: 'bg-taupe-700 text-white',
	bug: 'bg-green-700 text-white',
	ghost: 'bg-indigo-700 text-white',
	steel: 'bg-gray-400',
};

export const statColors: Record<string, string> = {
	hp: 'bg-red-500',
	attack: 'bg-orange-600',
	defense: 'bg-yellow-600',
	'special-attack': 'bg-blue-500',
	'special-defense': 'bg-green-500',
	speed: 'bg-purple-700',
};
