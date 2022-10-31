function isValidWalk(walk) {
  return walk.length === 10 && isReturnWalk(walk[0], walk)
}

function opposite(direction) {
  if (direction === 's') {
    return 'n';
  }
  if (direction === 'n') {
    return 's';
  }
  if (direction === 'w') {
    return 'e';
  }
  if (direction === 'e') {
    return 'w';
  }
}

function isReturnWalk(element, walk) {
  if (!walk || walk.length == 0) {
    return true;
  }

  index = walk.indexOf(opposite(element));
  if (index > -1) {
    walk.splice(index, 1);
  } else {
    return false;
  }

  walk.splice(walk.indexOf(element), 1);


  return isReturnWalk(walk[0], walk)
}