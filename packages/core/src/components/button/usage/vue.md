
```html
<template>
  <!-- Default -->
  <nami-button>Default</nami-button>

  <!-- Anchor -->
  <nami-button href="#">Anchor</nami-button>

  <!-- Colors -->
  <nami-button color="primary">Primary</nami-button>
  <nami-button color="secondary">Secondary</nami-button>
  <nami-button color="tertiary">Tertiary</nami-button>
  <nami-button color="suc  cess">Success</nami-button>
  <nami-button color="warning">Warning</nami-button>
  <nami-button color="danger">Danger</nami-button>
  <nami-button color="light">Light</nami-button>
  <nami-button color="medium">Medium</nami-button>
  <nami-button color="dark">Dark</nami-button>

  <!-- Expand -->
  <nami-button expand="full">Full Button</nami-button>
  <nami-button expand="block">Block Button</nami-button>

  <!-- Round -->
  <nami-button shape="round">Round Button</nami-button>

  <!-- Fill -->
  <nami-button expand="full" fill="outline">Outline + Full</nami-button>
  <nami-button expand="block" fill="outline">Outline + Block</nami-button>
  <nami-button shape="round" fill="outline">Outline + Round</nami-button>

  <!-- Icons -->
  <nami-button>
    <ion-icon slot="start" name="star"></ion-icon>
    Left Icon
  </nami-button>

  <nami-button>
    Right Icon
    <ion-icon slot="end" name="star"></ion-icon>
  </nami-button>

  <nami-button>
    <ion-icon slot="icon-only" name="star"></ion-icon>
  </nami-button>

  <!-- Sizes -->
  <nami-button size="large">Large</nami-button>
  <nami-button>Default</nami-button>
  <nami-button size="small">Small</nami-button>
</template>

<script>
import { NamiButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { NamiButton }
});
</script>
```
