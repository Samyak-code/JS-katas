function XO(str) {
  let x = '';
  let o = '';
  for (let m=0; m<str.length; m++) {
    if (str[m].toLowerCase() === 'x') {
      x += str[m];
      } else if (str[m].toLowerCase() === 'o') {
      o += str[m];
      }
    }
    return x.length === o.length ;
}
