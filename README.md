# ChatGPT + Whisper API NextJS Demo

This project was created to play around with the Whisper and ChatGPT APIs from OpenAI.

![ChatGPT + Whisper API Demo Image](public/Demo.png?raw=true 'ChatGPT + Whisper API Demo')

## Here's what it does:

- Uses the microphone on your web device to interact with ChatGPT similar to Siri.
- Sets a default context for ChatGPT where you can configure its role, personality, and brevity of its responses.
- Just like ChatGPT, it remembers your conversation
- Button to reset the conversation.

## What's so cool about this?

- Talking is easier than typing and the Whisper API does a great job at translating speech to text.
- Refining the context of ChatGPT allows its responses to be extremely relevant to you.
- With the context pre-defined, you can save a lot of time interacting with ChatGPT.

## ENV setup

To use the OpenAI API you must generate an OpenAI API key, create a file called `.env.local` at the root level of this project, and set the following environment variable: `OPENAI_API_KEY={your OpenAI API key}`

## Deploying on Vercel

This project is setup to deploy on the free version of vercel, just clone and add it to your project and deploy it to production.

Special note: In order for this to deploy and work properly on Vercel, you must use Node 16.x for your serverless functions.

## Configuring ChatGPT Context

Open up `pages/index.tsx` and

## Boilerplate stuff:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
