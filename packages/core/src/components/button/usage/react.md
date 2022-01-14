
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
