## Getting Started

The repository consists of two seperate services:
- frontend (Next.js application)
- backend (express.js server-side API application)

# Run the backend (API)

From the `root` directory, run the following commands:

```bash
cd backend

npm install # yarn or pnpm should work too, I kept it basic to avoid confusion

npm run dev
```

The service should be running on [http://localhost:3001](http://localhost:3001)

# Run the frontend (Next.js)

From the `root` directory, run the following commands:

```bash
cd frontend

npm install # yarn or pnpm should work too, I kept it basic to avoid confusion

npm run dev
```

The service should be running on [http://localhost:3000](http://localhost:3000)

The frontend should also be able to run without the backend, with mocked data instead.
In the `.env` change the value of `MOCKED` from `false` to `true` to enable mocked data.
