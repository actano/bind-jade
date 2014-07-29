var jade = require('jade');

var extend = function(target, source) {
    var prop, val;
    if (!(target instanceof Object)) {
        throw new Error("" + target + " is not an object");
    }
    for (prop in source) {
        val = source[prop];
        target[prop] = val;
    }
    return target;
};

module.exports = function(compiledJade, globals) {
    var template;
    template = compiledJade(jade);
    if (globals != null) {
        return function(locals) {
            extend(globals, locals);
            return template(globals);
        };
    } else {
        return function(locals) {
            return template(locals || {});
        };
    }
};
