export function useContext<T extends unknown[] = unknown[], R = unknown>(
  key: string,
  contentFn: (...args: T) => R,
) {
  const symbolKey = Symbol(key) as InjectionKey<string>;
  function useProvide(...args: T) {
    const content = contentFn(...args);
    provide<R>(symbolKey, content);
    return content;
  }

  function useInject() {
    const context = inject<ReturnType<typeof useProvide>>(symbolKey);
    if (!context) {
      throw new Error('useInject must be used after useProvide');
    }
    return context;
  }

  return { useInject, useProvide, symbolKey };
}
