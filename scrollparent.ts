'use strict';

function findScrollParentOf(element:string) {
  let el = document.querySelector(element);
  let parent = el.parentElement;
  while (parent !== document.body) {
    let iteration = parent;
    if (iteration.scrollHeight > iteration.offsetHeight) return iteration;
    parent = iteration.parentElement;
  }
  return document.body;
}
// comment