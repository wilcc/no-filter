/******************
 * YOUR CODE HERE *
 ******************/

function onlyOdds(number){
  const result = []
  for(let i = 0; i < number.length; i++)
  if(number[i] % 2 !== 0){
    result.push(number[i])
  }
  return result
}

function onlyEvens(number){
  const result = []
  for(let i = 0; i < number.length; i++)
  if(number[i] % 2 === 0){
    result.push(number[i])
  }
  return result
}
function shortNamesOnly(name){
  const result = []
  for(let i = 0; i < name.length; i++)
  if(name[i].length < 7){
  result.push(name[i])
  }return result
}

function dNames(name2){
  const result = []
  for(let i = 0; i < name2.length;i++)
  if(name2[i].startsWith('D')){
    result.push(name2[i])
  }return result
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
