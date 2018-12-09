# A Node Project

This project was setup with [robb-j/node-base](https://github.com/robb-j/node-base/) which creates a node app, with the common things already setup.

## Template Features

- Docker build to install dependancies and deploy
- Testing & code coverage with `jest`
- Code linting with eslint
- Code formatting with prettier on git file stage
- Semantically versioned docker images using `npm version`

## Dev Commands

```bash
# Start the app
npm run start

# Start the app and reload on file changes
npm run watch

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
npm run coverage          # outputs to coverage/
```
