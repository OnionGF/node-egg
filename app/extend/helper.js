const crypto = require('crypto')
const _ = require('lodash')

exports.md5 = str => {
  return crypto.createHash('md5').update(str).digest('hex')
}

exports._ = _

exports.Base64 = {
  //加密
  encode(str) {
      if (str===undefined || str === "" || str === null) {
          return str;
      }
      return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
          function toSolidBytes(match, p1) {
              return String.fromCharCode('0x' + p1);
          }));
  },
  //解密
  decode(str) {
      if (str===undefined || str === "" || str === null) {
          return str;
      }
      // Going backwards: from bytestream, to percent-encoding, to original string.
      return decodeURIComponent(atob(str).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  }
}