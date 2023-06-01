type EventHandler = (...args: any[]) => void;

export const sveaBus = () => {
  const eventHandlers: { [event: string]: EventHandler[] } = {};

  const on = (event: string, handler: EventHandler) => {
    if (!eventHandlers[event]) {
      eventHandlers[event] = [];
    }
    eventHandlers[event].push(handler);
  };

  const emit = (event: string, ...args: any[]) => {
    const handlers = eventHandlers[event];
    if (handlers) {
      handlers.forEach((handler) => handler(...args));
    }
  };

  // Clean up event handlers on component unmount
  const clear = () => {
    for (const event in eventHandlers) {
      delete eventHandlers[event];
    }
  };

  return {
    on,
    emit,
    clear,
  };
};
