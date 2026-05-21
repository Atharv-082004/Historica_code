# Historica

Historica is an interactive web app to explore Indian monuments through map navigation, 3D model viewing, timeline comparison, and simulated AR/VR experiences.

## Tech Stack

- React + TypeScript
- Vite
- Express (custom dev/prod server)
- Three.js / React Three Fiber / Drei
- Tailwind CSS
- Zustand + React Query

## Prerequisites

- Node.js 18+ (recommended)
- npm 9+

## Getting Started

1. Clone the repository.
2. Install dependencies.
3. Start the development server.

```bash
npm install
npm run dev
```

App runs at:

```text
http://localhost:5500
```

## Available Scripts

- `npm run dev`: Start development server (Express + Vite middleware)
- `npm run build`: Build client and bundle server into `dist/`
- `npm run start`: Run production build
- `npm run check`: Run TypeScript type check
- `npm run db:push`: Push schema updates with Drizzle

## Core Features

- Monument map exploration
- Monument detail page with 3D model
- Time travel view (ancient, past, present)
- Side-by-side timeline comparison
- Simulated AR view
- Simulated VR view

## Main Routes

- `/`: Monument map
- `/monument/:id`: Monument detail
- `/monument/:id/timetravel`: Time travel scene
- `/monument/:id/ar`: Simulated AR view
- `/monument/:id/vr`: Simulated VR view

## Project Structure

```text
client/
	src/
		components/      UI and feature components
		context/         App-level React context
		data/            Monument dataset and model paths
		hooks/           Reusable hooks (audio, model loading, etc.)
		lib/stores/      Zustand state stores
server/
	index.ts           Express entry
	routes.ts          API routes
	vite.ts            Vite middleware setup
shared/
	schema.ts          Shared schema/types
```

## Notes About AR/VR

- AR and VR are simulated browser experiences built with 3D rendering.
- AR route may request camera permission because it calls `getUserMedia({ video: true })`.
- Model quality and visual differences across time periods depend on available `.glb` assets in `client/public/models`.

## Troubleshooting

- If models fail to load, verify paths in `client/src/data/monuments.ts` match files in `client/public/models`.
- If UI shows stale behavior after code changes, hard refresh the browser.
- If port `5000` is busy, stop the running process and restart `npm run dev`.

## License

MIT
