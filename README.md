# A Node Project

This project was setup with [robb-j/node-base](https://github.com/robb-j/node-base/) which creates a node app, with the common things already setup.

> **Deprecated:** I now use [puggle](https://github.com/robb-j/puggle/)
> and [puggle-presets](https://github.com/robb-j/puggle-presets/)
> to bootstrap my projects

## Template Features

- Docker build to install dependancies and package for production
- Testing & code coverage with `jest`
- Code linting with `eslint` & `standard`
- Code formatting with `prettier` on git commit
- Semantically versioned docker images using `npm version`

## Development

```bash
# Start the app
npm run start

# Start the app and reload on file changes
npm run dev

# Update version (builds & pushes a new docker image)
# -> Uses the REGISTRY file & the npm version to tag image
npm version ... # --help

# Lint the web & test directories
npm run lint

# Manually format code
# -> This repo runs prettier on git-stage, so code is always to standard
npm run prettier

# Run the unit tests
npm test

# Generate code coverage
npm run coverage
```
