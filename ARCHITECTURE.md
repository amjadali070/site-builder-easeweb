# Polly build architecture

There are 2 separate modules:

- `@polly/components`: source at `src/_polly/components`.
- `@polly/bundler`: source at `src/_polly/bundler`.

## @polly/components

### Structure

- `component.map.tsx`: map from block `type` to component, use for render in website designer.
- `component.path.ts`: map from block `type` to filename of the component (without file `.tsx` extension), used by `@polly/bundler`.
- `assets/` folder: store all the assets (.svg icon) used by components.
- `css/` folder: custom styles used by components.

### Considerations

- All the packages imported by components MUST be listed in `package.json` file. For example: `import DOMPurify from 'dompurify'`.
- All the components MUST not import files from outside the `src/` directory.
- All the assets MUST be stored inside `assets/` folder.
- All the styles MUST be included inside `css/` folder.
- New type of components added should also update `component.map.tsx` and `component.path.ts`.

## @polly/bundler

- Bundle a static website with `esbuild`.
- Target `es6`, not support older browsers like IE11.
- 2 parts:
  - Codegen: Generate source codes written in React from pages and blocks.
  - Bundling: Bundle to static website (HTML, CSS, JS).

### Automated Testing

- Go to folder `src/_polly`. Run `bash docker-build.sh`.
- Run the built image `docker run -p 5000:5000 --name polly-test polly-test`. It will serve the website (port 5000) when success.
- New test cases should be placed inside `__test__/mock` folder.

## Deployments

### Structure

- Build/update websites as CloudFront distributions.

  - When user build a website, a new `BuildRequest` is created, triggering `pollybundler` lambda function.
  - The `pollybundler` lambda function then build static website -> create/update CloudFront distribution.
  - Each time the CloudFront distribution updates, users need to wait the website to be fully updated.

- `@polly/components` and `@polly/bundler` are used as libraries by `pollybundler` lambda function.

  - They are copied to `pollywebapppollybundlerlib` lambda layer. Then will be mounted inside `/opt/nodejs/node_modules/` when the lambda function triggered.
  - The source code of `pollybundler` then can import `@polly/bundler` and `@polly/components` modules.

### How-to

- Each time the changes of `@polly/bundler` and `@polly/components` need to be updated server-side:
  - The automated testing of `@polly/bundler` should be passed.
  - Run `npm run amplify:updatebundlerlib` at the project root folder.
  - Push the changes of the lambda layer by Amplify: `amplify function push pollywebapppollybundlerlib`.
  - Re-configure lambda layer: `amplify function update pollybundler`.
