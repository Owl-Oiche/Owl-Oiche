export function makeQuery(obj) {
  let result = '?';
  for (let key in obj) {
    let str = obj[key].replace(' ', '+');
    result += `${key}=${str}&`;
  }

  return result;
}
