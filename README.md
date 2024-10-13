This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Error found in API docs

### To get the population of a single country

API docs: https://documenter.getpostman.com/view/1134062/T1LJjU52#d83b0a69-5256-48e7-9f0a-988233c39aa7

- To docs indicate that:

1.  It's a `POST` method
2.  Requires country in the body
3.  The endpoint is `https://countriesnow.space/api/v0.1/countries/population`

Open source code: https://github.com/MartinsOnuoha/countriesNowAPI/blob/master/routes/countries.js

- The code (and the actual API) indicates that:

1.  it's a `GET` method
2.  Requires country with query/search params
3.  The endpoint is `https://countriesnow.space/api/v0.1/countries/population/q`

### To get the flag of a single country

API docs: https://documenter.getpostman.com/view/1134062/T1LJjU52#1141d10a-d85f-4a66-93af-7b88fa08207d

- To docs indicate that:

1.  It's a `POST` method
2.  Requires country in the body
3.  The endpoint is `https://countriesnow.space/api/v0.1/countries/flag/images`

Open source code: https://github.com/MartinsOnuoha/countriesNowAPI/blob/master/routes/countries.js

- The code (and the actual API) indicates that:

1.  it's a `GET` method
2.  Requires country with query/search params
3.  The endpoint is `https://countriesnow.space/api/v0.1/countries/flag/images/q`
