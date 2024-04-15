# ReelCrafter Coding Test

This is a simple test of some basic Vue 3 stuff. It shouldn't take more than 1-2 hours.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Project Setup

First, make a copy of this template repo, and then clone your personal copy (not this repo!).

Then:

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

## Instructions

This is a simple app that queries the [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/) and lists recent earthquakes. Your job is fairly simple: implement a way to filter the list by min/max magnitude.

Explore the code (starting at `main.ts` which is always the entry point of any Vue app) and go from there. Make sure the tests for `QuakeFilter.vue` pass, and—of course—don't modify the test file!

Please log your time spent on this and let us know about how long it took you.

### A Note About Using AI

Please don't use AI! With Vue 3 + TypeScript, it will probably do the wrong thing and you shouldn't trust it. This _is_ a test, after all, and using AI would prevent us from getting a solid understanding of your abilities.

## Turning It In

When you're done, commit your work and send us a link to your repo (make sure it's public).

Thanks, and have fun! 😁
