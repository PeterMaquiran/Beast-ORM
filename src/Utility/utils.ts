// generate unique string
export function uniqueGenerator() {
  return (Math.random() +'uuid'+ new Date().getTime()).slice(2)
}



export function hashCode(str:string)  {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash;
  }
  return hash;
}


export function getDeep(obj: any, path: string) {
  if (!obj || !path) return undefined;

  let current = obj;
  let key = "";
  
  for (let i = 0; i <= path.length; i++) {
    const char = path[i];

    if (char === "." || i === path.length) {
      if (current == null) return undefined;
      current = current[key];
      key = "";
    } else {
      key += char;
    }
  }

  return current;
}



/** First Character uppercase */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** First Character lowercase */
export function uncapitalize(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}



export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
