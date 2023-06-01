type EventHandler = (...args: any[]) => void;

export const sveaBus = () => {
  const eventHandlers: Map<string, EventHandler[]> = new Map();

  const on = (event: string, handler: EventHandler) => {
    if (!eventHandlers.has(event)) {
      eventHandlers.set(event, []);
    }
    eventHandlers.get(event)?.push(handler);
  };

  const emit = (event: string, ...args: any[]) => {
    const handlers = eventHandlers.get(event);
    if (handlers) {
      handlers.forEach((handler) => handler(...args));
    }
  };

  // Clean up event handlers on component unmount
  const clear = (): void => {
    eventHandlers.clear();
  };

  return {
    on,
    emit,
    clear,
    eventHandlers: Object.freeze(eventHandlers) as ReadonlyMap<
      string,
      readonly EventHandler[]
    >,
  };
};
