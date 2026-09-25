# Statfinity Pokémon Explorer

A web app for browsing and exploring Pokémon. Search by name, paginate through the full list, and view each Pokémon's types, abilities, moves, and base stats.

## Features

- Browse all Pokémon on the homepage
- Search Pokémon by name with debounced input
- Client-side pagination (12 per page)
- Dynamic detail page with artwork, types, abilities, first 10 moves, and base stats with progress bars

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- [PokeAPI](https://pokeapi.co)
- [Lucide React](https://lucide.dev)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/          # Pages and root layout
├── components/   # UI components (Searchbar, PokemonCard, PokemonExplorer)
├── lib/          # Data-fetching helpers (PokeAPI calls)
├── types/        # Shared TypeScript types
└── utils/        # Shared utility functions
```

## API

Pokémon data is fetched from [PokeAPI](https://pokeapi.co). The full list is fetched at build time; individual Pokémon details are fetched per page visit.

## Notes

Search and pagination are handled entirely client-side after the Pokémon list is loaded — no additional API calls are made when filtering or changing pages.
