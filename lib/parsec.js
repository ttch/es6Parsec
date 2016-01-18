(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("parsec", [], factory);
	else if(typeof exports === 'object')
		exports["parsec"] = factory();
	else
		root["parsec"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _atom2 = __webpack_require__(1);
	
	var _atom3 = _interopRequireDefault(_atom2);
	
	var _combinator2 = __webpack_require__(4);
	
	var _combinator = _interopRequireWildcard(_combinator2);
	
	var _state = __webpack_require__(5);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _parsec2 = __webpack_require__(2);
	
	var _parsec3 = _interopRequireDefault(_parsec2);
	
	var _model = __webpack_require__(3);
	
	var model = _interopRequireWildcard(_model);
	
	var _text = __webpack_require__(6);
	
	var text = _interopRequireWildcard(_text);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var jsparsec = function () {
		function jsparsec() {
			_classCallCheck(this, jsparsec);
	
			this._name = 'jsparsec';
			this._model = model;
			this._text = text;
		}
	
		_createClass(jsparsec, [{
			key: 'parsec',
			value: function parsec(p) {
				return new _parsec3.default(p);
			}
		}, {
			key: 'model',
			value: function model() {
				return this._model;
			}
		}, {
			key: 'text',
			value: function text() {
				return this._text;
			}
		}, {
			key: 'state',
			value: function state(str) {
				return new _state2.default(str);
			}
		}, {
			key: 'combinator',
			value: function combinator() {
				return _combinator;
			}
		}, {
			key: 'atom',
			value: function atom() {
				return new _atom3.default();
			}
		}, {
			key: 'name',
			get: function get() {
				return this._name;
			}
		}]);
	
		return jsparsec;
	}();
	
	exports.default = jsparsec;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _parsec = __webpack_require__(2);
	
	var _parsec2 = _interopRequireDefault(_parsec);
	
	var _model = __webpack_require__(3);
	
	var model = _interopRequireWildcard(_model);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var atom = function () {
	    function atom() {
	        _classCallCheck(this, atom);
	    }
	
	    _createClass(atom, [{
	        key: 'eq',
	        value: function eq(x) {
	            var fun = function fun(state) {
	                if (state.next() === x) {
	                    return x;
	                } else {
	                    var err = Error("expecting a value equal " + x);
	                    err.pos = state.pos() - 1;
	                    throw err;
	                }
	            };
	            new _parsec2.default(fun);
	            return fun;
	        }
	    }, {
	        key: 'ne',
	        value: function ne(x) {
	            var fun = function fun(state) {
	                var data = state.next();
	                if (data === x) {
	                    var err = Error('expecting a value not equal ' + x);
	                    err.pos = state.pos() - 1;
	                    throw err;
	                } else {
	                    return data;
	                }
	            };
	            new _parsec2.default(fun);
	            return fun;
	        }
	    }, {
	        key: 'one',
	        value: function one() {
	            var fun = function fun(state) {
	                var result = state.next();
	                if (result instanceof Error) {
	                    throw null;
	                } else {
	                    //console.log(model);
	                    return result;
	                }
	            };
	            new _parsec2.default(fun);
	            return fun;
	        }
	    }, {
	        key: 'oneOf',
	        value: function oneOf() {
	            for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
	                states[_key] = arguments[_key];
	            }
	
	            var fun = function fun(state) {
	                var data = state.next();
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = states[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var val = _step.value;
	
	                        if (val === data) {
	                            return data;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                var err = Error('expect one of' + states);
	                err.pos = state.pos();
	                throw err;
	            };
	            new _parsec2.default(fun);
	            return fun;
	        }
	    }, {
	        key: 'noneOf',
	        value: function noneOf() {
	            for (var _len2 = arguments.length, states = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                states[_key2] = arguments[_key2];
	            }
	
	            var fun = function fun(state) {
	                var data = state.next();
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;
	
	                try {
	                    for (var _iterator2 = states[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var val = _step2.value;
	
	                        if (val === data) {
	                            var err = Error('expect none of ' + states);
	                            err.pos = state.pos;
	                            throw err;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }
	
	                return data;
	            };
	            new _parsec2.default(fun);
	            return fun;
	        }
	    }, {
	        key: 'pack',
	        value: function pack(element) {
	            var fun = function fun() {
	                return element;
	            };
	            new _parsec2.default(fun);
	            return fun;
	        }
	    }, {
	        key: 'fail',
	        value: function fail(description) {
	            var fun = function fun(state) {
	                var err = Error(description);
	                err.pos = state.pos() - 1;
	                throw err;
	            };
	            new _parsec2.default(fun);
	            return fun;
	        }
	    }]);
	
	    return atom;
	}();
	
	exports.default = atom;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var parsec = function parsec(parser) {
	    _classCallCheck(this, parsec);
	
	    var parser = {
	        bind: function bind(handle) {
	            var item = function item(state) {
	                var val = parser(state);
	                var re = handle(val, state);
	                return re;
	            };
	            new parsec(item);
	            return item;
	        },
	        then: function then(handle) {
	            var item = function item(state) {
	                parser(state);
	                return handle(state);
	            };
	            new parsec(item);
	            return item;
	        },
	        over: function over(tail) {
	            var item = function item(state) {
	                var val = parser(state);
	                tail(state);
	                return val;
	            };
	            new parsec(item);
	            return item;
	        }
	    };
	    return parser;
	};
	
	exports.default = parsec;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Result = exports.Result = function Result(result) {};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arguments = arguments;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sep1 = exports.sep = exports.choice = exports.skip = exports.skip1 = exports.many1 = exports.many = exports.manyTill = exports.otherwise = exports.either = exports.between = exports.attempt = undefined;
	
	var _parsec = __webpack_require__(2);
	
	var _parsec2 = _interopRequireDefault(_parsec);
	
	var _atom = __webpack_require__(1);
	
	var _atom2 = _interopRequireDefault(_atom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var attempt = exports.attempt = function attempt(p) {
	    var fun = function fun(state) {
	        var result;
	        var index = state.pos();
	        var tran = state.begin();
	        try {
	            result = p(state);
	        } catch (err) {
	            state.rollBack(tran);
	            throw err;
	        }
	        state.commit(tran);
	        return result;
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	
	var between = exports.between = function between(open, close, p) {
	    var fun = function fun(state) {
	        open(state);
	        var result = p(state);
	        close(state);
	        return result;
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	
	var either = exports.either = function either(x, y) {
	    var fun = function fun(state) {
	        // this.or = xxxxx 这样写外面就拿不到 or 这个属性?
	        var result1;
	        try {
	            result1 = x(state);
	        } catch (err) {
	            var result2 = y(state);
	            return result2;
	        }
	        return result1;
	    };
	    fun.or = function (z) {
	        return either(either(x, y), z);
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	var otherwise = exports.otherwise = function otherwise(p, description) {
	    var fun = function fun(state) {
	        var ei = either(p, new _atom2.default().fail(description));
	        return ei(state);
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	var manyTill = exports.manyTill = function manyTill(parser, end) {
	    var fun = function fun(state) {
	        var re = new Array();
	        while (true) {
	            try {
	                end(state);
	                return re;
	            } catch (err) {
	                re.push(parser(state));
	            };
	        }
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	
	var many = exports.many = function many(p) {
	
	    var fun = function fun(state) {
	        var arr = new Array();
	
	        try {
	            while (true) {
	                arr.push(p(state));
	            }
	        } catch (err) {
	            return arr;
	        }
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	
	var many1 = exports.many1 = function many1(p) {
	
	    var fun = function fun(state) {
	        var arr = new Array();
	        arr.push(p(state));
	        try {
	            while (true) {
	                arr.push(p(state));
	            }
	        } catch (err) {
	            return arr;
	        }
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	
	var skip1 = exports.skip1 = function skip1(p) {
	    var fun = function fun(state) {
	        p(state);
	
	        while (true) {
	            try {
	                var att = attempt(p);
	                var val = att(state);
	            } catch (err) {
	                return val;
	            }
	        }
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	
	var skip = exports.skip = function skip(p) {
	    var fun = function fun(state) {
	        while (true) {
	            try {
	                var att = attempt(p);
	                var val = att(state);
	            } catch (err) {
	                return val;
	            }
	        }
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	
	var choice = exports.choice = function choice() {
	    for (var _len = arguments.length, ps = Array(_len), _key = 0; _key < _len; _key++) {
	        ps[_key] = arguments[_key];
	    }
	
	    var parsers = _arguments;
	    var fun = function fun(state) {
	        var result = null;
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = ps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var p = _step.value;
	
	                try {
	                    result = p(state);
	                    break;
	                } catch (err) {
	                    continue;
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        if (result == null) {
	            var err = Error('');
	            err.pos = state.pos();
	            throw err;
	        }
	        return result;
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	
	var sep = exports.sep = function sep(p, s) {
	    var fun = function fun(state) {
	        var re = new Array();
	        try {
	            re.push(p(state));
	            while (true) {
	                s(state);
	                re.push(p(state));
	            }
	        } catch (err) {
	            return re;
	        }
	
	        return re;
	    };
	    new _parsec2.default(fun);
	    return fun;
	};
	
	var sep1 = exports.sep1 = function sep1(p, s) {
	    var fun = function fun(state) {
	        var re = new Array();
	
	        re.push(p(state));
	        while (true) {
	            try {
	                s(state);
	                re.push(p(state));
	            } catch (err) {
	                return re;
	            }
	        }
	
	        return re;
	    };
	    new _parsec2.default(fun);
	    return fun;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var states = function () {
	    function states(st) {
	        _classCallCheck(this, states);
	
	        this.st = st;
	        this._position = 0;
	        this._tran = -1;
	    }
	
	    _createClass(states, [{
	        key: "next",
	        value: function next() {
	            var item;
	            if (this._position >= 0 && this._position < this.st.length) {
	                item = this.st[this._position];
	                this._position++;
	            } else {
	                item = null;
	            }
	
	            return item;
	        }
	    }, {
	        key: "pos",
	        value: function pos() {
	            return this._position;
	        }
	    }, {
	        key: "nextBy",
	        value: function nextBy(pred) {
	            if (this._position >= 0 && this._position < this.st.length) {
	                var item = this.st[this._position];
	                if (pred(item)) {
	                    return item;
	                } else {
	                    throw new Error("predicate failed");
	                }
	            } else {
	                return -1;
	            }
	        }
	    }, {
	        key: "seekTo",
	        value: function seekTo(to) {
	            if (to >= 0 && to < this.st.length) {
	                this._position = to;
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "begin",
	        value: function begin() {
	            var theindex = this._position;
	            if (this._tran == -1) {
	                this._tran = this._position;
	            }
	            return theindex;
	        }
	    }, {
	        key: "commit",
	        value: function commit(tranNumber) {
	            if (this._tran == tranNumber) {
	                this._tran = -1;
	            }
	        }
	    }, {
	        key: "rollBack",
	        value: function rollBack(tranNumber) {
	            this._position = tranNumber;
	            if (this._tran == tranNumber) {
	                this._tran = -1;
	            }
	        }
	    }]);
	
	    return states;
	}();
	
	exports.default = states;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var atom = __webpack_require__(1);
	var combinator = __webpack_require__(4);
	var atom = __webpack_require__(1);
	var parsec = __webpack_require__(2);
	
	var eq = atom.eq;
	var either = combinator.either;
	var attempt = combinator.attempt;
	var ne = atom.ne;
	
	var charIn = function charIn(string) {
	    var fun = function fun(state) {
	        var val = state.next();
	        for (var index in string) {
	            if (string[index] === val) {
	                return val;
	            }
	        };
	        var err = Error('not a char of ' + string);
	        err.pos = state.pos() - 1;
	        throw err;
	    };
	    parsec(fun);
	    return fun;
	};
	
	var charNone = function charNone(string) {
	    var fun = function fun(state) {
	        var val = state.next();
	        for (var c in string) {
	            if (c === val) {
	                var err = Error('is a char of ' + string);
	                err.pos = state.pos();
	                throw err;
	            }
	        }
	        return val;
	    };
	    parsec(fun);
	};
	
	var digit = function digit() {
	    var fun = charIn('0123456789');
	    return fun;
	};
	
	var letter = function letter() {
	    var fun = charIn('abcdefghijklmnopqrstuvwxyz');
	    return fun;
	};
	
	var alphaNumber = function alphaNumber() {
	    var fun = either(attempt(digit()), letter());
	    return fun;
	};
	
	var string = function string(str) {
	    var fun = function fun(state) {
	        var arr = new Array();
	        for (var index in str) {
	            var val = state.next();
	            arr.push(val);
	            if (val != str[index] && index == 0) {
	                var fail = atom.fail('not match');
	                fail(state);
	            };
	        }
	        return arr.join('');
	    };
	    parsec(fun);
	    return fun;
	};
	
	var uInt = function uInt() {
	    var fun = function fun(state) {
	        var ma = combinator.many1(digit()).bind(function (arr, state) {
	            var at = combinator.attempt(atom.ne('.'));
	            at(state);
	            return arr;
	        });
	        var re;
	        try {
	            re = ma(state);
	        } catch (err) {
	            var err = Error('not a uInt');
	            err.pos = state.pos() - 1;
	            throw err;
	        }
	        return re.join('');
	    };
	    parsec(fun);
	    return fun;
	};
	
	function negtive(state) {
	    var neg = combinator.attempt(eq('-'));
	    var val;
	    try {
	        val = neg(state);
	    } catch (err) {
	        return '';
	    }
	    return val;
	}
	
	var Int = function Int() {
	    var fun = function fun(state) {
	        var arr = new Array();
	        arr.push(negtive(state));
	        var ui = uInt();
	        var re = arr.concat(ui(state));
	        return re.join('');
	    };
	    parsec(fun);
	    return fun;
	};
	
	var uFloat = function uFloat() {
	    var fun = function fun(state) {
	        var integer = combinator.many(digit());
	        var pot = eq('.');
	        var deci = uInt();
	        var arr = new Array();
	        arr = arr.concat(integer(state));
	        if (arr.length == 0) arr.push('0');
	        arr.push(pot(state));
	        arr = arr.concat(deci(state));
	        return arr.join('');
	    };
	    parsec(fun);
	    return fun;
	};
	
	var Float = function Float() {
	    var fun = function fun(state) {
	        var arr = new Array();
	        arr.push(negtive(state));
	        var uf = uFloat();
	        var re = arr.concat(uf(state));
	        return re.join('');
	    };
	    parsec(fun);
	    return fun;
	};
	
	var newLine = function newLine() {
	    var fun = function fun(state) {
	        var ei = either(attempt(eq('\n')), string('\r\n'));
	        return ei(state);
	    };
	    parsec(fun);
	    return fun;
	};
	
	var whiteSpace = function whiteSpace() {
	    var eq = charIn(' \t');
	    return eq;
	};
	
	var space = function space() {
	    var ei = eq(' ');
	    return ei;
	};
	
	exports.charIn = charIn;
	exports.charNone = charNone;
	exports.digit = digit;
	exports.letter = letter;
	exports.alphaNumber = alphaNumber;
	exports.string = string;
	exports.uInt = uInt;
	exports.Int = Int;
	exports.uFloat = uFloat;
	exports.Float = Float;
	exports.newLine = newLine;
	exports.whiteSpace = whiteSpace;
	exports.space = space;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=parsec.js.map