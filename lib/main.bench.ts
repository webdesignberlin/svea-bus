import { vi, describe, beforeEach, afterEach, bench } from 'vitest';
import { sveaBus } from './main';

describe('benchmarking events', () => {
  let bus: ReturnType<typeof sveaBus>;
  const items = [...Array(10000).keys()];
  const handler = () => {};
  const setup = () => {
    bus = sveaBus();
    bus.clear();
    items.forEach((item) => {
      bus.on(`event-${item}`, handler)
    });
  }

  bench('test splice', () => {
    items.forEach((item) => {
      bus.off1(`event-${item}`, handler)
    });
  }, { setup });

  bench('test filter', () => {
    items.forEach((item) => {
      bus.off2(`event-${item}`, handler)
    });
  }, { setup });
});

describe('benchmarking handlers', () => {
  let bus: ReturnType<typeof sveaBus>;
  const items = [...Array(1000).keys()];
  const handler = (index: number) => {
    console.log(index);
  };
  const setup = () => {
    bus = sveaBus();
    bus.clear();
    items.forEach((item) => {
      bus.on(`event`, () => handler(item))
    });
    // console.log(bus.eventHandlers.get('event').length);
  }

  bench('test splice', () => {
    items.forEach((item) => {
      bus.off1(`event-${item}`, handler)
    });
  }, { setup });

  bench('test filter', () => {
    items.forEach((item) => {
      bus.off2(`event-${item}`, handler)
    });
  }, { setup });
});
