# Utrust Developers Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/79dd4173-485f-41ed-bc18-e75cbeaca004/deploy-status)](https://app.netlify.com/sites/jolly-keller-612a14/deploys)

Although this is not an API specs page, this is built with [ReDoc](https://github.com/Redocly/redoc) to have consistent stylings between the Developers page and the [API Reference](https://github.com/utrustdev/merchant-api-spec).

### Install

```
bin/setup
```

### Usage

```
bin/server
```

Starts the development server on [localhost:8080](localhost:8080).

#### `npm run build`

Bundles the spec and prepares `build` folder with static assets.

### Deploy

The project is hosted on Netlify, deploys are automatic to `https://docs.utrust.com` when merged to `master`.
