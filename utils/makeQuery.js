export function makeQuery(obj) {
  let result = '?';
  for (let key in obj) {
    if (!typeof obj[key] === 'string') {
      result += `${key}=${obj[key]}&`;
    } else {
      let str = obj[key].replace(' ', '+');
      result += `${key}=${str}&`;
    }
  }

  return result;
}
