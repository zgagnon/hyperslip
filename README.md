# HyperSlip

A digital [zettelkasten](https://zettelkasten.de) tool inspired by 
[HyperCard](https://en.wikipedia.org/wiki/HyperCard).

<!-- toc -->

- [Development](#development)
  * [Prerequisites](#prerequisites)
  * [Dependencies](#dependencies)
  * [Running tests](#running-tests)
  * [Code quality](#code-quality)
  * [README](#readme)

<!-- tocstop -->

## Development

To develop, begin by cloning this repo.

### Prerequisites

- [NodeJs](https://nodejs.org/en/) - This codebase is intended to run in and build with NodeJs
- [PNPM](https://pnpm.js.org) - This repository uses pnpm for dependency management and linking

### Dependencies

Run `pnpm install` to automatically install dependencies.

### Running tests

Run `pnpm test` to run tests.

### Code quality

This repository is quality checked using [eslint](eslint.org) and has 
code formatting with [prettier](https://prettier.io). Both tools will be 
installed with pnpm. The following scripts are available:

- `pnpm lint`
- `pnpm format`


### README

If you change the readme, please run `pnpm toc` to regenerate the table of contents.