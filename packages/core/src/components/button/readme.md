# nami-button

按钮组件


<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<!-- Default -->
<nami-button>Default</nami-button>

<!-- Anchor -->
<nami-button href="#">Anchor</nami-button>

<!-- Colors -->
<nami-button color="primary">Primary</nami-button>
<nami-button color="secondary">Secondary</nami-button>
<nami-button color="tertiary">Tertiary</nami-button>
<nami-button color="success">Success</nami-button>
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
  <nami-icon slot="start" name="star"></nami-icon>
  Left Icon
</nami-button>

<nami-button>
  Right Icon
  <nami-icon slot="end" name="star"></nami-icon>
</nami-button>

<nami-button>
  <nami-icon slot="icon-only" name="star"></nami-icon>
</nami-button>

<!-- Sizes -->
<nami-button size="large">Large</nami-button>
<nami-button>Default</nami-button>
<nami-button size="small">Small</nami-button>
```


### React

```tsx
import React from 'react';

import { NamiButton, NamiIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

export const ButtonExample: React.FC = () => (
  <div>
    {/*-- Default --*/}
    <NamiButton>Default</NamiButton>

    {/*-- Anchor --*/}
    <NamiButton href="#">Anchor</NamiButton>

    {/*-- Colors --*/}
    <NamiButton color="primary">Primary</NamiButton>
    <NamiButton color="secondary">Secondary</NamiButton>
    <NamiButton color="tertiary">Tertiary</NamiButton>
    <NamiButton color="success">Success</NamiButton>
    <NamiButton color="warning">Warning</NamiButton>
    <NamiButton color="danger">Danger</NamiButton>
    <NamiButton color="light">Light</NamiButton>
    <NamiButton color="medium">Medium</NamiButton>
    <NamiButton color="dark">Dark</NamiButton>

    {/*-- Expand --*/}
    <NamiButton expand="full">Full Button</NamiButton>
    <NamiButton expand="block">Block Button</NamiButton>

    {/*-- Round --*/}
    <NamiButton shape="round">Round Button</NamiButton>

    {/*-- Fill --*/}
    <NamiButton expand="full" fill="outline">Outline + Full</NamiButton>
    <NamiButton expand="block" fill="outline">Outline + Block</NamiButton>
    <NamiButton shape="round" fill="outline">Outline + Round</NamiButton>

    {/*-- Icons --*/}
    <NamiButton>
      <NamiIcon slot="start" icon={star} />
      Left Icon
    </NamiButton>

    <NamiButton>
      Right Icon
      <NamiIcon slot="end" icon={star} />
    </NamiButton>

    <NamiButton>
      <NamiIcon slot="icon-only" icon={star} />
    </NamiButton>

    {/*-- Sizes --*/}
    <NamiButton size="large">Large</NamiButton>
    <NamiButton>Default</NamiButton>
    <NamiButton size="small">Small</NamiButton>
  </div>
);

```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'button-example',
  styleUrl: 'button-example.css'
})
export class ButtonExample {
  render() {
    return [
      // Default
      <nami-button>Default</nami-button>,

      // Anchor
      <nami-button href="#">Anchor</nami-button>,

      // Colors
      <nami-button color="primary">Primary</nami-button>,
      <nami-button color="secondary">Secondary</nami-button>,
      <nami-button color="tertiary">Tertiary</nami-button>,
      <nami-button color="success">Success</nami-button>,
      <nami-button color="warning">Warning</nami-button>,
      <nami-button color="danger">Danger</nami-button>,
      <nami-button color="light">Light</nami-button>,
      <nami-button color="medium">Medium</nami-button>,
      <nami-button color="dark">Dark</nami-button>,

      // Expand
      <nami-button expand="full">Full Button</nami-button>,
      <nami-button expand="block">Block Button</nami-button>,

      // Round
      <nami-button shape="round">Round Button</nami-button>,

      // Fill
      <nami-button expand="full" fill="outline">Outline + Full</nami-button>,
      <nami-button expand="block" fill="outline">Outline + Block</nami-button>,
      <nami-button shape="round" fill="outline">Outline + Round</nami-button>,

      // Icons
      <nami-button>
        <ion-icon slot="start" name="star"></ion-icon>
        Left Icon
      </nami-button>,

      <nami-button>
        Right Icon
        <ion-icon slot="end" name="star"></ion-icon>
      </nami-button>,

      <nami-button>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </nami-button>,

      // Sizes
      <nami-button size="large">Large</nami-button>,
      <nami-button>Default</nami-button>,
      <nami-button size="small">Small</nami-button>
    ];
  }
}
```


### Vue

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



## Properties

| Property | Attribute | Description     | Type                              | Default     |
| -------- | --------- | --------------- | --------------------------------- | ----------- |
| `first`  | `first`   | The first name  | `string`                          | `undefined` |
| `last`   | `last`    | The last name   | `string`                          | `undefined` |
| `middle` | `middle`  | The middle name | `string`                          | `undefined` |
| `size`   | `size`    | 按钮尺寸.           | `"default" \| "large" \| "small"` | `undefined` |


## Slots

| Slot      | Description        |
| --------- | ------------------ |
|           | 默认插槽，按钮内容放在具名插槽之间。 |
| `"end"`   | 按钮内容右边的插槽.         |
| `"icon"`  | 放置按钮图标的插槽。         |
| `"start"` | 按钮内容左边的插槽。         |


## Shadow Parts

| Part       | Description                     |
| ---------- | ------------------------------- |
| `"native"` | 包裹所有子元素的原生 HTML 元素，为 button 标签。 |


## CSS Custom Properties

| Name                             | Description                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `--background`                   | Background of the button                                                                                  |
| `--background-activated`         | Background of the button when pressed. Note: setting this will interfere with the Material Design ripple. |
| `--background-activated-opacity` | Opacity of the button when pressed                                                                        |
| `--background-focused`           | Background of the button when focused with the tab key                                                    |
| `--background-focused-opacity`   | Opacity of the button when focused with the tab key                                                       |
| `--background-hover`             | Background of the button on hover                                                                         |
| `--background-hover-opacity`     | Opacity of the background on hover                                                                        |
| `--border-color`                 | Border color of the button                                                                                |
| `--border-radius`                | Border radius of the button                                                                               |
| `--border-style`                 | Border style of the button                                                                                |
| `--border-width`                 | Border width of the button                                                                                |
| `--box-shadow`                   | Box shadow of the button                                                                                  |
| `--color`                        | Text color of the button                                                                                  |
| `--color-activated`              | Text color of the button when pressed                                                                     |
| `--color-focused`                | Text color of the button when focused with the tab key                                                    |
| `--color-hover`                  | Text color of the button when hover                                                                       |
| `--opacity`                      | Opacity of the button                                                                                     |
| `--padding-bottom`               | Bottom padding of the button                                                                              |
| `--padding-end`                  | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button |
| `--padding-start`                | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button |
| `--padding-top`                  | Top padding of the button                                                                                 |
| `--ripple-color`                 | Color of the button ripple effect                                                                         |
| `--transition`                   | Transition of the button                                                                                  |


----------------------------------------------


