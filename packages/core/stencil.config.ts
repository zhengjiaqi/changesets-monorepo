import { Config } from '@stencil/core';
import { JsonDocs } from '@stencil/core/internal';
import { reactOutputTarget as react } from '@stencil/react-output-target';

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
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      footer: '',
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