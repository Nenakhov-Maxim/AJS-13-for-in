export default function orderByProps(object, keys) {
  const newArr = [];
  if (keys) {
    keys.forEach(((key) => {
      if (Object.hasOwnProperty.call(object, key)) {
        newArr.push(`key: ${key}, value: ${object[key]}`);
      }
    }
    ));
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key) && newArr.indexOf(`key: ${key}, value: ${object[key]}`) === -1) {
        newArr.push(`key: ${key}, value: ${object[key]}`);
      }
    }
    return newArr;
  }
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      newArr.push(`key: ${key}, value: ${object[key]}`);
    }
  }
  return newArr;
}
