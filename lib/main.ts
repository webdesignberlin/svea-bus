// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type EventHandler = (...args: any[]) => void;

export const sveaBus = () => {
  const eventHandlers: Map<string, EventHandler[]> = new Map();

  const on = (event: string, handler: EventHandler) => {
    if (!eventHandlers.has(event)) {
      eventHandlers.set(event, []);
    }
    eventHandlers.get(event)?.push(handler);
  };

  const off = (event: string, handler: EventHandler) => {
    const handlers = eventHandlers.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  };
  // @typescript-eslint/no-explicit-any
  const emit = (event: string, ...args: any[]) => {
    const handlers = eventHandlers.get(event);
    if (handlers) {
      handlers.forEach((handler) => handler(...args));
    }
  };

  // Clean up event handlers on component unmount
  const clear = () => {
    eventHandlers.clear();
  };

  return {
    on,
    off,
    emit,
    clear,
    eventHandlers: Object.freeze(eventHandlers) as ReadonlyMap<
      string,
      readonly EventHandler[]
    >,
  };
};
