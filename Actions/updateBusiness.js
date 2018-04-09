export const UPDATE_BUSINESS = 'update_business';

export function updateBusiness(id, hours) {
  return {
    type: UPDATE_BUSINESS,
    id,
    hours,
  };
}
