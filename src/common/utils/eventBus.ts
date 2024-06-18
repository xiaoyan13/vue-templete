type EventIdentifier = string | symbol

// e.j. { 'change': number }
interface Events extends Record<EventIdentifier, unknown> { }

type Handler<T = unknown> = (event: T) => void;
type EventHandlerMap<T extends Events> =
    Map<
        keyof T,
        Handler<T[keyof T]>[]
    >

export interface EventBus<T extends Events> {
    all: EventHandlerMap<T>;

    on<Key extends keyof T>(type: Key, handler: Handler<T[Key]>): void;
    off<Key extends keyof T>(
        type: Key,
        handler?: Handler<T[Key]>
    ): void;
    emit<Key extends keyof T>(
        type: Key,
        event: T[Key]
    ): void
}

export default function useEventBus<T extends Events>(
    all?: EventHandlerMap<T>
): EventBus<T> {
    all = all || new Map()
    const eventBus: EventBus<T> = {
        all,
        on<Key extends keyof T>(type: Key, handler: Handler<T[Key]>) {
            // type 被推断为了 keyof T 类型，产生了类型丢失...
            const handlers: Handler<T[Key]>[] | undefined = all.get(type);
            if (handlers) {
                handlers.push(handler);
            } else {
                // type 被推断为了 keyof T 类型，产生了类型丢失...所以触发了逆变
                all.set(type, [handler] as Handler<T[keyof T]>[]);
            }
        },
        off<Key extends keyof T>(type: Key, handler?: Handler<T[Key]>) {
            const handlers: Handler<T[Key]>[] | undefined = all.get(type);
            if (handlers) {
                if (handler) {
                    handlers.splice(handlers.indexOf(handler) >>> 0, 1);
                } else {
                    all.set(type, []);
                }
            }
        },
        emit<Key extends keyof T>(type: Key, event: T[Key]) {
            let handlers: Handler<T[Key]>[] | undefined = all.get(type);
            if (handlers) {
                [...handlers].map(handler => handler(event));
            }
        }
    }
    return eventBus
}