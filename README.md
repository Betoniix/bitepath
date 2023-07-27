# Bitepath

A simple dev tool to solve aliasing for Vite when using TypeScript absolute paths. Plug it in and forget about write again. ~~Almost~~

# Getting Start

### npm

```bash
npm install --save-dev @betoniix/bitepath
```

# Usage

First, define your `baseUrl` and `paths` in `tsconfig.json`.

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@folder1/*": ["path/to/folder/1/*"],
      "@folder2/*": ["path/to/folder/2/*"],
    },
}
```

Then, import `bitethepaths` function in `vite.config.ts`, and set it.

```typescript
import { bitethepaths } from "@betoniix/bitepath";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: bitethepaths(),
  },
});
```

and that's it, now you can use your alias freely

# API

### bitethepaths(name)

#### name

`type`: string

`default`: tsconfig.json

It accepts only the name of the configuration file.

# To Do

- Add test for alias feature

- Add test for main function
