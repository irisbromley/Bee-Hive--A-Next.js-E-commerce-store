# Ecommerce Store

This is an ecommerce store project that simulates an online shop, where you can perform CRUD operations on products, add them to cart, and make orders.

```sql
-- This is the schema for the database ecommerce
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(80) NOT NULL,
  price integer NOT NULL,
  image varchar(500),
  description text
);

INSERT INTO
  products
  (name, price, image, description)
VALUES
  ('Propolis & Honey Beeswax Soap', 2150, 'Bienenwachs Propolis Seife.jpg', 'Propolis resin gives this soap its deep brown colour and rich scent. Propolis is a natural substance collected by honey bees from trees, and used within the hive for health and hygiene. It has been used for centuries in skincare because of its natural medicinal, anti-inflammatory, anti-bacterial, anti-fungal and anti-viral properties.'),
  ('Chilihoney', 1199, 'Chilihonig.jpg', 'Chili honey by Forts Ferry Farm in Latham, NY. A fun little kick to the sweetest of honey! Mix in hot water with lemon to create an instant morning kickstarter, or to liven up a spicy margarita. This is a raw honey, great for aiding in seasonal allergies and is a tremendous source of antioxidants. Made by folding dried, organically-grown heirloom chili peppers into a spring varietal honey.&nbsp;'),
  ('Springflower Honey', 899, 'fruehlingsbleutenhoney.png', 'Our Springflower Honey from the southern parts of Flowerhills is of light amber color. It is creamy, sweet and fresh.'),
  ('Mustard Sauce with Honey', 949, 'Honig Senf.jpg', 'A crunchy whole grain mustard sauce, with the contrasting sweetness of natural honey and a sharp bite, perfect to complement a summer salad.');
```

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

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
