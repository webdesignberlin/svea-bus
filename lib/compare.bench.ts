import { describe, bench } from 'vitest';
import mitt from 'mitt';
import { sveaBus } from './main';
/*
describe('benchmarking events', () => {
  let mittBus;
  let bus: ReturnType<typeof sveaBus>;
  const items = [...Array(10000).keys()];
  const handler = () => {};
  const setup = () => {
    bus = sveaBus();
    bus.clear();
    mittBus = mitt();
    mittBus.all.clear();
  }

  bench('on test', () => {
    items.forEach((item) => {
      bus.on(`event-${item}`, handler);
    });
  }, { setup });

  bench('on test mitt', () => {
    items.forEach((item) => {
      mittBus.on(`event-${item}`, handler);
    });
  }, { setup });
}); */
describe('benchmarking events.', () => {
  const items = [...Array(10000).keys()];
  const handler = () => {};
  const dynamicHandler = (index: number) => {
    console.log(index);
  };

  bench('mitt-bus', () => {
    const mittBus = mitt();
    items.forEach((item) => {
      mittBus.on(`event-${item}`, handler);
    });
    items.forEach((item) => {
      mittBus.off(`event-${item}`, handler);
    });

    items.forEach((item) => {
      mittBus.on('dynamic-handler-event', () => dynamicHandler(item));
    });
  });

  bench('svea-bus', () => {
    const bus = sveaBus();
    items.forEach((item) => {
      bus.on(`event-${item}`, handler);
    });
    items.forEach((item) => {
      bus.off(`event-${item}`, handler);
    });

    items.forEach((item) => {
      bus.on('dynamic-handler-event', () => dynamicHandler(item));
    });
  });
});
