# orion-ui-kit

> Shared UI components and styles

## Build

```bash
npm run build

cp -R src/locales dist/

mkdir dist/css
cp src/css/calendar.css dist/css/
```

## Authorize

```bash
npm login --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

where `TOKEN` is github auth token (https://github.com/settings/tokens) with permissions: repo, delete:packages, write:packages

## Install

In project that used orion-ui-kit:

* make file ".npmrc" with line "registry=https://npm.pkg.github.com/orionprotocol"

* add "@orionprotocol/orion-ui-kit" to "dependencies" in package.json

* `npm install`

## Usage

```tsx
import React, { Component } from 'react'

import {ExampleComponent} from '@orionprotocol/orion-ui-kit'
import '@orionprotocol/orion-ui-kit/dist/index.css'

class Example extends Component {
  render() {
    return <ExampleComponent />
  }
}
```

## Info

Created by create-react-library

[Configuring npm for use with GitHub Packages](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)
