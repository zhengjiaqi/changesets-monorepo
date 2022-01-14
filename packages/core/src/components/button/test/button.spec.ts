import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../button';

describe('nami-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<nami-button></nami-button>',
    });
    expect(root).toEqualHtml(`
      <nami-button>
        <mock:shadow-root>
          <button part="native">
            Hello, World! I'm
          </button>
        </mock:shadow-root>
      </nami-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<nami-button first="Stencil" last="'Don't call me a framework' JS"></nami-button>`,
    });
    expect(root).toEqualHtml(`
      <nami-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <button part="native">
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </button>
        </mock:shadow-root>
      </nami-button>
    `);
  });
});
