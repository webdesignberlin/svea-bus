import { vi, describe, expect, it, beforeEach, afterEach } from 'vitest';
import { sveaBus } from './main';

describe('svea-bus', () => {
  let bus: ReturnType<typeof sveaBus>;

  beforeEach(() => {
    bus = sveaBus();
  });

  afterEach(() => {
    bus.clear();
  });

  it('should remove event handlers when cleared', () => {
    const handler = vi.fn();

    bus.on('my-event-1', handler);

    expect(bus.clear).not.toThrow();

    bus.emit('my-event-1', 'Hello, world!');

    expect(handler).not.toHaveBeenCalled();
  });

  it('should register and trigger event handlers', () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    bus.on('event-2', handler1);
    bus.on('event-2', handler2);

    bus.emit('event-2', 'whats up?');

    expect(handler1).toHaveBeenCalledWith('whats up?');
    expect(handler2).toHaveBeenCalledWith('whats up?');
  });

  it('should remove event handlers with off', () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    bus.on('event-3', handler1);
    bus.on('event-3', handler2);

    bus.emit('event-3', 'yo yo');

    // expect(handler1).toHaveBeenCalledWith('yo yo');
    // expect(handler2).toHaveBeenCalledWith('yo yo');
    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);

    bus.off('event-3', handler1);
    bus.emit('event-3', 'dont run again');

    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(2);
  });
});
