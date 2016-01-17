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
	
	var _atom = __webpack_require__(1);
	
	var atom = _interopRequireWildcard(_atom);
	
	var _combinator = __webpack_require__(4);
	
	var combinator = _interopRequireWildcard(_combinator);
	
	var _state = __webpack_require__(5);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _parsec = __webpack_require__(2);
	
	var parsec = _interopRequireWildcard(_parsec);
	
	var _model = __webpack_require__(3);
	
	var model = _interopRequireWildcard(_model);
	
	var _text = __webpack_require__(6);
	
	var text = _interopRequireWildcard(_text);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var jsparsec = function () {
		function jsparsec() {
			_classCallCheck(this, jsparsec);
	
			this._name = 'jsparsec';
			this._parsec = parsec;
			this._model = model;
			this._text = text;
			this._combinator = combinator;
			this._atom = atom;
		}
	
		_createClass(jsparsec, [{
			key: 'parsec',
			value: function parsec() {
				return this._parsec;
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
				return this._combinator;
			}
		}, {
			key: 'atom',
			value: function atom() {
				return this._atom;
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
	
	var parsec = __webpack_require__(2);
	var Result = __webpack_require__(3).Result;
	var one = function one() {
	    var fun = function fun(state) {
	        var result = state.next();
	        if (result instanceof Error) throw null;else {
	            return new Result(result);
	        }
	    };
	    parsec(fun);
	    return fun;
	};
	
	var eq = function eq(x) {
	    var fun = function fun(state) {
	        if (state.next() === x) {
	            return x;
	        } else {
	            var err = Error("expecting a value equal" + x);
	            err.pos = state.pos() - 1;
	            throw err;
	        }
	    };
	    parsec(fun);
	    return fun;
	};
	
	var ne = function ne(x) {
	    var fun = function fun(state) {
	        var data = state.next();
	        if (data === x) {
	            var err = Error('expecting a value not equal' + x);
	            err.pos = state.pos() - 1;
	            throw err;
	        } else {
	            return data;
	        }
	    };
	    parsec(fun);
	    return fun;
	};
	
	var oneOf = function oneOf() {
	    var states = arguments;
	    var fun = function fun(state) {
	        var data = state.next();
	        for (var index in states) {
	            if (states[index] === data) {
	                return data;
	            }
	        }
	        var err = Error('expect one of' + states);
	        err.pos = state.pos();
	        throw err;
	    };
	    parsec(fun);
	    return fun;
	};
	
	var noneOf = function noneOf() {
	    var states = arguments;
	    var fun = function fun(state) {
	        var data = state.next();
	        for (var index in states) {
	            if (states[index] === data) {
	                var err = Error('expect none of ' + states);
	                err.pos = state.pos;
	                throw err;
	            }
	        }
	        return data;
	    };
	    parsec(fun);
	    return fun;
	};
	
	var pack = function pack(element) {
	    var fun = function fun() {
	        return element;
	    };
	    parsec(fun);
	    return fun;
	};
	
	var fail = function fail(description) {
	    var fun = function fun(state) {
	        var err = Error(description);
	        err.pos = state.pos() - 1;
	        throw err;
	    };
	    parsec(fun);
	    return fun;
	};
	
	// space : \t  || '  ' || \n
	
	// \r \ n
	
	// 上面应该直接返回字符串
	
	exports.one = one;
	exports.oneOf = oneOf;
	exports.eq = eq;
	exports.ne = ne;
	exports.noneOf = noneOf;
	exports.pack = pack;
	exports.Result = Result;
	exports.fail = fail;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.parsec = parsec;
	function parsec(parser) {
	    if (parser == null) {
	        parser = new Object();
	    };
	    parser.bind = function (handle) {
	        var item = function item(state) {
	            var val = parser(state);
	            var re = handle(val, state);
	            return re;
	        };
	        parsec(item);
	        return item;
	    };
	    parser.then = function (handle) {
	        var item = function item(state) {
	            parser(state);
	            return handle(state);
	        };
	        parsec(item);
	        return item;
	    };
	    parser.over = function (tail) {
	        var item = function item(state) {
	            var val = parser(state);
	            tail(state);
	            return val;
	        };
	        parsec(item);
	        return item;
	    };
	    return parser;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	exports.Result = function (result) {};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _atom = __webpack_require__(1);
	
	var _parsec = __webpack_require__(2);
	
	var attempt = function attempt(p) {
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
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	var between = function between(parseren, close, p) {
	    var fun = function fun(state) {
	        parseren(state);
	        var result = p(state);
	        close(state);
	        return result;
	    };
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	//either.or();
	var either = function either(p1, p2) {
	    var fun = function fun(state) {
	        // this.or = xxxxx 这样写外面就拿不到 or 这个属性?
	        var result1;
	        try {
	            result1 = p1(state);
	        } catch (err) {
	            var result2 = p2(state);
	            return result2;
	        }
	        return result1;
	    };
	    fun.or = function (p3) {
	        return either(either(p1, p2), p3);
	    };
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	var otherwise = function otherwise(p, description) {
	    var fun = function fun(state) {
	        var ei = either(p, _atom.atom.fail(description));
	        return ei(state);
	    };
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	var choice = function choice() {
	    var parsers = arguments;
	    var fun = function fun(state) {
	        var result = null;
	        for (var index in parsers) {
	            try {
	                result = parsers[index](state);
	                break;
	            } catch (err) {
	                continue;
	            }
	        }
	        if (result == null) {
	            var err = Error('');
	            err.pos = state.pos();
	            throw err;
	        }
	        return result;
	    };
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	var many = function many(p) {
	    var fun = function fun(state) {
	        var ma = either(many1(attempt(p)), _atom.atom.pack(Array(0)));
	        var re = ma(state);
	        return re;
	    };
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	var many1 = function many1(p) {
	    //这里P执行出错了 就直接抛出去
	    var fun = p.bind(function (x, state) {
	        var arr = new Array();
	        arr.push(x);
	        while (true) {
	            var at = attempt(p);
	            try {
	                var val = at(state);
	                arr.push(val);
	            } catch (err) {
	                return arr;
	            }
	        }
	        return arr;
	    });
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	var manyTill = function manyTill(parser, end) {
	    var fun = function fun(state) {
	        var re = new Array();
	        var e = attempt(end);
	        while (true) {
	            try {
	                e(state);
	                return re;
	            } catch (err) {
	                re.push(parser(state));
	            };
	        }
	    };
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	var skip1 = function skip1(p) {
	    var fun = p.bind(function (x, state) {
	        var arr = new Array();
	        while (true) {
	            try {
	                var val = p(state);
	            } catch (err) {
	                return;
	            }
	        }
	    });
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	var skip = function skip(p) {
	    var fun = function fun(state) {
	        var sk = either(skip1(attempt(p)), _atom.atom.pack(Array(0)));
	        var re = sk(state);
	        return re;
	    };
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	var sep = function sep(p, s) {
	    var fun = function fun(state) {
	        var parser = either(sep1(p, s), _atom.atom.pack(new Array(0)));
	        var re = parser(state);
	        return re;
	    };
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	var sep1 = function sep1(p, s) {
	    var fun = function fun(state) {
	        var parser = p.bind(function (x, state) {
	            var temp = new Array();
	            temp.push(x);
	            var re = temp.concat(many(s.then(p))(state));
	            return re;
	        });
	        var result = parser(state);
	        return result;
	    };
	    (0, _parsec.parsec)(fun);
	    return fun;
	};
	
	exports.attempt = attempt;
	exports.otherwise = otherwise;
	exports.choice = choice;
	exports.either = either;
	exports.between = between;
	exports.many = many;
	exports.many1 = many1;
	exports.manyTill = manyTill;
	exports.skip = skip;
	exports.skip1 = skip1;
	exports.sep = sep;
	exports.sep1 = sep1;

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