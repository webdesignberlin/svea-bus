type EventHandler = (...args: any[]) => void;
export declare const sveaBus: () => {
    on: (event: string, handler: EventHandler) => void;
    off: (event: string, handler: EventHandler) => void;
    off1: (event: string, handler: EventHandler) => void;
    off2: (event: string, handler: EventHandler) => void;
    emit: (event: string, ...args: any[]) => void;
    clear: () => void;
    eventHandlers: ReadonlyMap<string, readonly EventHandler[]>;
};
export {};
