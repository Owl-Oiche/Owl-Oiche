export const SET_ON_DETAIL_PAGE = 'set_on_detail_page';

export function setOnDetailPage(condition) {
  return {
    payload: condition,
    type: SET_ON_DETAIL_PAGE,
  };
};
