# SveaBus
SveaBus is a lightweight event bus library for handling events.

![coverage](https://img.shields.io/badge/coverage-100%25-green)

## Installation
You can install SveaBus via npm or yarn:

```bash
npm install sveabus
```
or
```bash
yarn add sveabus
```

## Usage
Import the sveaBus function and create a new event bus instance:

```ts
import { sveaBus } from 'sveabus';

const bus = sveaBus();
```

or

```ts
import { sveaBus } from 'sveabus';

const {
  on,
  off,
  emit,
  clear,
  eventHandlers,
} = sveaBus();
```

### Event Registration
To register an event handler, use the on method:
```ts
bus.on('fire', (data) => {
  console.log('Event received:', data);
});
```

### Event Emission
To emit an event, use the emit method:
```ts
bus.emit('fire', 'whats uo?');
```

### Event Handler Removal
To remove an event handler, use the off method:
```ts
const handler = (data) => {
  // ...
};

bus.on('fire', handler);

// Later, when you want to remove the event handler
bus.off('fire', handler);
```

### Clearing Event Handlers
To clear all event handlers, use the clear method:
```ts
bus.clear();
```
