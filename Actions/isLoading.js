export const IS_LOADING = 'is_loading';

export function setLoading(boolean) {
  return {
    type: IS_LOADING,
    payload: boolean,
  };
};
