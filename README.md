# FitAI

This repository contains a simple prototype of a fitness assistant web application built as a PWA. The project includes a small Next.js frontend and an Express backend.

## Structure

- `frontend` – Next.js application. Pages include a training view, a nutrition view and a minimal chat component.
- `backend` – Express server providing demo API endpoints for trainings and meals.

## Development

Install dependencies (requires Node.js):

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
```

Run both frontend and backend in development mode:

```bash
npm run dev
```

The frontend will be available on `http://localhost:3000` and the backend on `http://localhost:4000`.

## Production Build

To build the frontend:

```bash
npm run build
```

Start the backend:

```bash
npm start
```
