# Hackachat

Hackachat is an open source ai chatbot built for hackclubber, and it's powered by HCAI (Hackclub AI).

Built by teens and for teen

## Features

- Privacy focused: All chats are stored locally on your browser, and can be exported anytime
- Build to attend to Hackclubber

## Note on Privacy

This project is privacy focused, but why require authentication with Hackclub Auth?

Hackclub AI has specific [rules](https://docs.ai.hackclub.com/guide/rules.html#rules) that needs to be abided by, if we are to use their services.
And in order to enforce this rules we need to verify if you qualify to use the service.

No data is stored while authenticating, your data is used solely for verification of eligibility.

## Tech stack used

**Frontend**

- Nextjs
- Shadcn
- Heyapi

**Backend**

- Nestjs
- OpenRouter SDK
- Swagger UI

## How to run it locally

This is a monorepo with both the frontend code and backend code are in the same repo

1. Clone the repo

   ```bash
   git clone https://github.com/mumuniazeez/hackachat.git
   ```

2. Install all dependency

   This project uses PNPM to manage it's packages

   ```bash
   pnpm install
   ```

   That will install all dependency for both frontend and backend

3. Run the application

   ```bash
   pnpm dev
   ```

   That will start both the frontend server and backend server

   By default the frontend server starts on http://localhost:3000, and backend starts on http://localhost:4000

## Running parts individually

If you want to run only one of the servers

- For frontend (`~/client`)

```bash
pnpm client
```

- For backend (`~/server`)

```bash
pnpm server
```

## Environment Variable

All environment variables are written in the `.env.example` file in both the client and server folders

To copy it into an `.env` file run:

```bash
cp .env.example .env
```

## Contributing

Feel free to clone this repo and make a PR.

## License

This project is licensed under MIT
