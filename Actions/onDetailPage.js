export const SET_ON_DETAIL_PAGE = 'set_on_detail_page';

export function setOnDetailPage(id) {
  return {
    payload: id,
    type: SET_ON_DETAIL_PAGE,
  };
};
