'use strict';
function findScrollParentOf(element) {
    var el = document.querySelector(element);
    var parent = el.parentElement;
    while (parent !== document.body) {
        var iteration = parent;
        if (iteration.scrollHeight > iteration.offsetHeight)
            return iteration;
        parent = iteration.parentElement;
    }
    return document.body;
}
//# sourceMappingURL=scrollparent.js.map