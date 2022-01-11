import { Config } from '@stencil/core';
import { JsonDocs } from '@stencil/core/internal';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { vueOutputTarget as vue } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'nami-ui',
  // namespace: 'nami',
  globalStyle: 'src/global/variables.css',
  outputTargets: [
    react({
      componentCorePackage: '@mtfe/nami-ui',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
    }),
    vue({
      componentCorePackage: '@mtfe/nami-ui',
      proxiesFile: '../vue/src/components/stencil-generated/index.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [{
        src: '../scripts/custom-elements',
        dest: 'components',
        warn: true
      }],
      includeGlobalScripts: false
    },
    {
      type: 'docs-readme',
      footer: '',
    },
    {
      type: 'docs-json',
      file: './docs/core.json'
    },
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
          // Custom logic goes here
          console.log('---docs---:', docs)
      }
    }
  ],
};