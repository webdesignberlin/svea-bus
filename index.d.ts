declare module "main" {
    type EventHandler = (...args: any[]) => void;
    export const sveaBus: () => {
        on: (event: string, handler: EventHandler) => void;
        off: (event: string, handler: EventHandler) => void;
        emit: (event: string, ...args: any[]) => void;
        clear: () => void;
        eventHandlers: ReadonlyMap<string, readonly EventHandler[]>;
    };
}
declare module "compare.bench" { }
declare module "main.bench" { }
declare module "main.test" { }
