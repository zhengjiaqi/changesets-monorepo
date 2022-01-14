import { Config } from '@stencil/core';
import { JsonDocs } from '@stencil/core/internal';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { vueOutputTarget as vue } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'nami-ui',
  globalStyle: 'src/global/variables.css',
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
    initializeNextTick: true,
    scriptDataOpts: true
  },
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
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/ionic-team/ionic/tree/main/core/',
    },
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
      // serviceWorker: null, // disable service workers
      baseUrl: 'https://nami-ui.com/',
      prerenderConfig: './prerender.config.ts',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png}'
        ]
      }
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
          // Custom logic goes here
          console.log('---docs---:', docs)
      }
    }
  ],
  plugins: [
    sass()
  ]
};