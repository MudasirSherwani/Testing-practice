function strReverse (str) {
  if (str.length > 0) {
   let revString = str.split('').reverse().join('');
 
  return revString;
  }
  else 
  throw new Error('Invalid String!');
}
module.exports =  strReverse;