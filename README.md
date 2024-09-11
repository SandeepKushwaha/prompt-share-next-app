This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- First Clone the project.

- Second, Create `.env` file for Configuration:

```shell
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=<OPENSSL_SECRECT_KEY>
GOOGLE_ID=<YOUR_GOOGLE_AUTH_API_ID>
GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_AUTH_API_CLIENT_SECRET>
MONGODB_URI=<YOUR_MONGODB_URI>
```

- and then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

> [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
> [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
> [Next-Auth Configuration](https://next-auth.js.org/configuration/options#environment-variables) - Configuration for Next-Auth
> [Online SSL Tool for NEXTAUTH_SECRET](https://www.cryptool.org/en/cto/openssl/) - OnlineSSL Tool
> [Google Sign-in Configuration](https://console.cloud.google.com/apis/) - Google Console

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
