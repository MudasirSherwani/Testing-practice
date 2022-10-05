
function strLength (str) {
  if (str.length > 0)
  return str.length;
  else 
  throw new Error('Invalid String!');
}
module.exports =  strLength;