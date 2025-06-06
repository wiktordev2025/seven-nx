## sevenNx
Monorepo POC of Angular hosting React, using Nx and Module Federation.

**Prerequisites:**
- Node version specified in [.nvmrc](./.nvmrc)
- Pnpm Package manager version specified in [`package.json > packageManager`](./package.json) (recommendation -> corepack)

**Installation:**

Install dependencies, from root package.json:

```sh
pnpm i
```

Serve host and remote apps in dev mode:

```sh
pnpm nx serve carter
pnpm nx serve host --devRemotes=carter

// should print: 
// ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
```

- Each app defines its dev ports in respective project.json. 


#### NX Caveats:
1. "host" angular app fails when trying to build its remote "carter" app:
```sh
pnpm nx build carter //works fine
pnpm nx serve host //fails when "host" tries to build "carter" - rspack error
```
2. `import { withModuleFederation } from '@nx/angular/module-federation';` expects remoteEntry.mjs and not .js, and its config interface does not accept "filename" property where we could change it.
Workaround - use native webpack (and rspack) module federation plugins, and not the ones from @nx.
3. @nx ":remote" app generators work only within the same framework, see: https://github.com/nrwl/nx/issues/19222#issuecomment-1756862778
4. Removed `implicitDependencies` from "host" project.json because of the issues above


NX MFE plugin problems caused a big delay - tested different integrations:
- angular host + angular remote (worked out of the box)
- react host + react remote (worked out of th box)
- rspack instead of webpack - same issues whn using NX MFE plugin
- vite instead of webpack - it should work, but its MFE plugin is quite young - will test it in the future
- "loadRemoteModule" from '@angular-architects/module-federation'; - it works, but defeats the purpose of NX figuring out remote urls

### Technical Decisions Summary
Given limited time, main focus was on nx monorepo and MFE functionality.

Other features would include:
- separate storybook with @company styleguide (now only css vars)
- separate e2e tests for each app
- customized linter
- API & Schemas generator
- customized CI/CD pipeline (github actions workflows)
- husky rules
