# create-svelte

Everything you need to build a Svelte project, powered by [`svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).


## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```


##Developing

Once you've created a project and installed dependencies with `pnpm install` (or `npm install` or `yarn`), start a development server:

You need to generate the query 
```bash
pnpm run generate
```
Then start the database with 
```bash
#For the first time
edgedb project init
#After
edgedb watch
```

start the server and open the app in a new browser tab
```bash
pnpm run dev -- --open

```


To create a production version of your app:

```bash
npm run build
tickets/a1df3f3c-9b22-11ee-9e4f-c77bc934f422
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
