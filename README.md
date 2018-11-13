# Node Sample Project

A project setup with [robb-j/node-base](https://github.com/robb-j/node-base/) which creates a node app, with the common things already setup.

## Dev Commands

```bash
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
