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
});
