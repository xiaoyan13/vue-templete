import type { Ref } from 'vue';
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router';

/**
 * 建立组件内 ref 到顶部导航栏 url 的 query 参数的 key 的映射。
 * 如果要 url 要关联多个组件的 ref，请设置不同的 key 以避免冲突。
 * @param queryParams 组件内 ref。
 * @param key 要映射到的 route.query.key
 * @param route 当前的路由，对于 vue2 非 setup 是 this.$route，否则是 useRoute()。
 * @param router 全局 router。如果组件使用的是 vue2 非 setup，则需要传入 this.$router；否则不需要该参数。
 */
export function useQueryBinding(
  queryParams: Ref<unknown>,
  key: string,
  route: RouteLocationNormalizedLoaded,
  router?: Router,
) {
  let encodeString = '';

  const _router = useRouter();
  router ??= _router;

  if (!router) {
    throw new Error('router undefined, pass in it explicitly');
  }

  watch(
    queryParams,
    () => {
      const newQuery = { ...route.query };
      if (
        queryParams.value === '' ||
        queryParams.value === undefined ||
        queryParams.value === null ||
        (!Array.isArray(queryParams.value) &&
          Object.getOwnPropertyNames(queryParams.value).length === 0)
      ) {
        newQuery[key] = encodeString = '';
        return;
      } else {
        newQuery[key] = encodeString = btoa(JSON.stringify(queryParams.value));
      }

      router.replace({ query: newQuery });
    },
    {
      deep: true,
    },
  );

  function getEncodedParams() {
    return encodeString;
  }

  function getDecodedParams() {
    return queryParams;
  }

  function setValue(newParams: unknown) {
    queryParams.value = newParams;
  }

  /**
   * 根据传入的 route.query 自动解构出 key 键对应的原值。
   * 1. 传入的 route.query 包含编码后的 url
   * 2. 对应的 key 会自动解构出，不需要传入
   * @param _queryParams route.query
   * @returns {unknown} route.query.key
   */
  function getValueByQueryParams(_queryParams: any): any {
    const target = _queryParams?.[key];
    if (!target) return undefined;
    return JSON.parse(atob(target));
  }

  /**
   * 根据传入的 route.query 更新对应的值。如果使用原始对象来更新 url，应该使用 setValue 不是此函数
   * 1. 传入的 route.query 包含编码后的 url
   * 2. 对应的 key 会自动解构出，不需要传入
   * @param _queryParams route.query
   * @returns {unknown} route.query.key
   */
  function setValueByQueryParams(_queryParams: any): any {
    const target = _queryParams?.[key];
    if (target) queryParams.value = JSON.parse(atob(target));

    return queryParams.value;
  }

  return {
    getEncodedParams,
    getDecodedParams,
    setValue,
    getValueByQueryParams,
    setValueByQueryParams,
  };
}

export type QueryBinding = ReturnType<typeof useQueryBinding>;
