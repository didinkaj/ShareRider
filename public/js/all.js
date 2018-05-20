/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
module.exports = __webpack_require__(28);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  var babelHelpers = global.babelHelpers = {};babelHelpers.typeof = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
  };babelHelpers.jsx = function () {
    var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;return function createRawReactElement(type, props, key, children) {
      var defaultProps = type && type.defaultProps;var childrenLength = arguments.length - 3;if (!props && childrenLength !== 0) {
        props = {};
      }
      if (props && defaultProps) {
        for (var propName in defaultProps) {
          if (props[propName] === void 0) {
            props[propName] = defaultProps[propName];
          }
        }
      } else if (!props) {
        props = defaultProps || {};
      }
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 3];
        }
        props.children = childArray;
      }
      return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null };
    };
  }();babelHelpers.asyncIterator = function (iterable) {
    if (typeof Symbol === "function") {
      if (Symbol.asyncIterator) {
        var method = iterable[Symbol.asyncIterator];if (method != null) return method.call(iterable);
      }
      if (Symbol.iterator) {
        return iterable[Symbol.iterator]();
      }
    }
    throw new TypeError("Object is not async iterable");
  };babelHelpers.asyncGenerator = function () {
    function AwaitValue(value) {
      this.value = value;
    }
    function AsyncGenerator(gen) {
      var front, back;function send(key, arg) {
        return new Promise(function (resolve, reject) {
          var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null };if (back) {
            back = back.next = request;
          } else {
            front = back = request;resume(key, arg);
          }
        });
      }
      function resume(key, arg) {
        try {
          var result = gen[key](arg);var value = result.value;if (value instanceof AwaitValue) {
            Promise.resolve(value.value).then(function (arg) {
              resume("next", arg);
            }, function (arg) {
              resume("throw", arg);
            });
          } else {
            settle(result.done ? "return" : "normal", result.value);
          }
        } catch (err) {
          settle("throw", err);
        }
      }
      function settle(type, value) {
        switch (type) {case "return":
            front.resolve({ value: value, done: true });break;case "throw":
            front.reject(value);break;default:
            front.resolve({ value: value, done: false });break;}
        front = front.next;if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }
      this._invoke = send;if (typeof gen.return !== "function") {
        this.return = undefined;
      }
    }
    if (typeof Symbol === "function" && Symbol.asyncIterator) {
      AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
        return this;
      };
    }
    AsyncGenerator.prototype.next = function (arg) {
      return this._invoke("next", arg);
    };AsyncGenerator.prototype.throw = function (arg) {
      return this._invoke("throw", arg);
    };AsyncGenerator.prototype.return = function (arg) {
      return this._invoke("return", arg);
    };return { wrap: function wrap(fn) {
        return function () {
          return new AsyncGenerator(fn.apply(this, arguments));
        };
      }, await: function _await(value) {
        return new AwaitValue(value);
      } };
  }();babelHelpers.asyncGeneratorDelegate = function (inner, awaitWrap) {
    var iter = {},
        waiting = false;function pump(key, value) {
      waiting = true;value = new Promise(function (resolve) {
        resolve(inner[key](value));
      });return { done: false, value: awaitWrap(value) };
    };if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () {
        return this;
      };
    }
    iter.next = function (value) {
      if (waiting) {
        waiting = false;return value;
      }
      return pump("next", value);
    };if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;throw value;
        }
        return pump("throw", value);
      };
    }
    if (typeof inner.return === "function") {
      iter.return = function (value) {
        return pump("return", value);
      };
    }
    return iter;
  };babelHelpers.asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);var value = info.value;
          } catch (error) {
            reject(error);return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  };babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();babelHelpers.defineEnumerableProperties = function (obj, descs) {
    for (var key in descs) {
      var desc = descs[key];desc.configurable = desc.enumerable = true;if ("value" in desc) desc.writable = true;Object.defineProperty(obj, key, desc);
    }
    return obj;
  };babelHelpers.defaults = function (obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
      var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  };babelHelpers.defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  };babelHelpers.extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };babelHelpers.get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }
      return getter.call(receiver);
    }
  };babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };babelHelpers.instanceof = function (left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  };babelHelpers.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };babelHelpers.interopRequireWildcard = function (obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }
      newObj.default = obj;return newObj;
    }
  };babelHelpers.newArrowCheck = function (innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  };babelHelpers.objectDestructuringEmpty = function (obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  };babelHelpers.objectWithoutProperties = function (obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }
    return target;
  };babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  };babelHelpers.selfGlobal = typeof global === "undefined" ? self : global;babelHelpers.set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent !== null) {
        set(parent, property, value, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      desc.value = value;
    } else {
      var setter = desc.set;if (setter !== undefined) {
        setter.call(receiver, value);
      }
    }
    return value;
  };babelHelpers.slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();babelHelpers.slicedToArrayLoose = function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      var _arr = [];for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        _arr.push(_step.value);if (i && _arr.length === i) break;
      }
      return _arr;
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };babelHelpers.taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
  };babelHelpers.taggedTemplateLiteralLoose = function (strings, raw) {
    strings.raw = raw;return strings;
  };babelHelpers.temporalRef = function (val, name, undef) {
    if (val === undef) {
      throw new ReferenceError(name + " is not defined - temporal dead zone");
    } else {
      return val;
    }
  };babelHelpers.temporalUndefined = {};babelHelpers.toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };babelHelpers.toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return Array.from(arr);
    }
  };
})(typeof global === "undefined" ? self : global);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.2.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext;function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(E(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(E(this, a || [], !0));
    }, is: function is(a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var F,
      G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || F, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,
      J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return K(a, "nextSibling");
    }, prev: function prev(a) {
      return K(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
    };
  });var L = /[^\x20\t\r\n\f]+/g;function M(a) {
    var b = {};return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = e || a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function N(a) {
    return a;
  }function O(a) {
    throw a;
  }function P(a, b, c, d) {
    var e;try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        P(e[c], h(c), g.reject);
      }return g.promise();
    } });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var R = r.Deferred();r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
    } }), r.ready.then = R.then;function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));var T = function T(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        T(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      U = function U(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function V() {
    this.expando = r.expando + V.uid++;
  }V.uid = 1, V.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var W = new V(),
      X = new V(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
  }function _(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = $(c);
      } catch (e) {}X.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return X.hasData(a) || W.hasData(a);
    }, data: function data(a, b, c) {
      return X.access(a, b, c);
    }, removeData: function removeData(a, b) {
      X.remove(a, b);
    }, _data: function _data(a, b, c) {
      return W.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      W.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          }W.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        X.set(this, a);
      }) : T(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;
        } else this.each(function () {
          X.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        X.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function da(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      ea = function ea(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function fa(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var ga = {};function ha(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
  }function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ia(this, !0);
    }, hide: function hide() {
      return ia(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide();
      });
    } });var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
  }function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
  }var pa = /<|&#?\w+;/;function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
        k = 0;while (f = g[k++]) {
          la.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;function va() {
    return !0;
  }function wa() {
    return !1;
  }function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ya(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ya(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(L) || [""], j = b.length;while (j--) {
          h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;while (j--) {
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return B(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return ya(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ya(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
  }function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Ga(a) {
    var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ha(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
    }
  }function Ia(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ja(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
    });if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
        j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
      }
    }return a;
  }function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(za, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
        Ia(f[d], g[d]);
      }if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      } else Ha(a, h);return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[W.expando] = void 0;
          }c[X.expando] && (c[X.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ka(this, a, !0);
    }, remove: function remove(a) {
      return Ka(this, a);
    }, text: function text(a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return T(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ja(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function Na(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Oa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Pa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = { position: "absolute", visibility: "hidden", display: "block" },
      Ta = { letterSpacing: "0", fontWeight: "400" },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;function Wa(a) {
    if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ua.length;while (c--) {
      if (a = Ua[c] + b, a in Va) return a;
    }
  }function Xa(a) {
    var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }function Ya(a, b, c) {
    var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Za(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    }return g;
  }function $a(a, b, c) {
    var d,
        e = Na(a),
        f = Oa(a, b, e),
        g = "border-box" === r.css(a, "boxSizing", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Oa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = Ra.test(b),
            j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Na(a),
            g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, La.test(a) || (r.cssHooks[a + b].set = Ya);
  }), r.fn.extend({ css: function css(a, b) {
      return T(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }r.Tween = _a, _a.prototype = { constructor: _a, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = _a.propHooks[this.prop];return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = _a.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
    } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};var ab,
      bb,
      cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }function fb() {
    return a.setTimeout(function () {
      ab = void 0;
    }), ab = r.now();
  }function gb(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ca[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && da(a),
        q = W.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], cb.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
          p || ia([a]), W.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function jb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = kb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jb(k, j.opts.specialEasing); f < g; f++) {
      if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j;
  }r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return fa(c.elem, a, ba.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
      }
    }, prefilters: [ib], prefilter: function prefilter(a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
    }, d;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = kb(this, r.extend({}, a), f);(e || W.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = W.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && db.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = W.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (ab = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), ab = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), r.fx.start();
  }, r.fx.interval = 13, r.fx.start = function () {
    bb || (bb = !0, eb());
  }, r.fx.stop = function () {
    bb = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var lb,
      mb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), lb = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;mb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
    };
  });var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function pb(a) {
    var b = a.match(L) || [];return b.join(" ");
  }function qb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var rb = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : pb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var sb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
      } };
  });var tb = a.location,
      ub = r.now(),
      vb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
    var e;if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(xb, "\r\n") };
        }) : { name: b.name, value: c.replace(xb, "\r\n") };
      }).get();
    } });var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");Lb.href = tb.href;function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(L) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Nb(a, b, c, d) {
    var e = {},
        f = a === Jb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Ob(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Pb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Qb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Eb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Rb = { 0: 200, 1223: 204 },
      Sb = r.ajaxSettings.xhr();o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Sb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Tb.pop() || r.expando + "_" + ub++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  }, r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || ra;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return T(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0);
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == "function" && __webpack_require__(6) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return r;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Vb = a.jQuery,
      Wb = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) {
  'object' == ( false ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.Popper = t();
})(this, function () {
  'use strict';
  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }function t(e, t) {
    if (1 !== e.nodeType) return [];var o = getComputedStyle(e, null);return t ? o[t] : o;
  }function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }function n(e) {
    if (!e) return document.body;switch (e.nodeName) {case 'HTML':case 'BODY':
        return e.ownerDocument.body;case '#document':
        return e.body;}var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;return (/(auto|scroll)/.test(r + s + p) ? e : n(o(e))
    );
  }function r(e) {
    var o = e && e.offsetParent,
        i = o && o.nodeName;return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : document.documentElement;
  }function p(e) {
    var t = e.nodeName;return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e);
  }function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = o ? e : t,
        n = o ? t : e,
        a = document.createRange();a.setStart(i, 0), a.setEnd(n, 0);var l = a.commonAncestorContainer;if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);var f = s(e);return f.host ? d(f.host, t) : d(e, s(t).host);
  }function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        i = e.nodeName;if ('BODY' === i || 'HTML' === i) {
      var n = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || n;return r[o];
    }return e[o];
  }function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = a(t, 'top'),
        n = a(t, 'left'),
        r = o ? -1 : 1;return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
  }function f(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        i = 'Left' == o ? 'Right' : 'Bottom';return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10);
  }function m(e, t, o, i) {
    return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
  }function h() {
    var e = document.body,
        t = document.documentElement,
        o = ie() && getComputedStyle(t);return { height: m('Height', e, t, o), width: m('Width', e, t, o) };
  }function c(e) {
    return se({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function g(e) {
    var o = {};if (ie()) try {
      o = e.getBoundingClientRect();var i = a(e, 'top'),
          n = a(e, 'left');o.top += i, o.left += n, o.bottom += i, o.right += n;
    } catch (e) {} else o = e.getBoundingClientRect();var r = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
        p = 'HTML' === e.nodeName ? h() : {},
        s = p.width || e.clientWidth || r.right - r.left,
        d = p.height || e.clientHeight || r.bottom - r.top,
        l = e.offsetWidth - s,
        m = e.offsetHeight - d;if (l || m) {
      var g = t(e);l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m;
    }return c(r);
  }function u(e, o) {
    var i = ie(),
        r = 'HTML' === o.nodeName,
        p = g(e),
        s = g(o),
        d = n(e),
        a = t(o),
        f = parseFloat(a.borderTopWidth, 10),
        m = parseFloat(a.borderLeftWidth, 10),
        h = c({ top: p.top - s.top - f, left: p.left - s.left - m, width: p.width, height: p.height });if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
      var u = parseFloat(a.marginTop, 10),
          b = parseFloat(a.marginLeft, 10);h.top -= f - u, h.bottom -= f - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b;
    }return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = l(h, o)), h;
  }function b(e) {
    var t = e.ownerDocument.documentElement,
        o = u(e, t),
        i = J(t.clientWidth, window.innerWidth || 0),
        n = J(t.clientHeight, window.innerHeight || 0),
        r = a(t),
        p = a(t, 'left'),
        s = { top: r - o.top + o.marginTop, left: p - o.left + o.marginLeft, width: i, height: n };return c(s);
  }function w(e) {
    var i = e.nodeName;return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || w(o(e));
  }function y(e, t, i, r) {
    var p = { top: 0, left: 0 },
        s = d(e, t);if ('viewport' === r) p = b(s);else {
      var a;'scrollParent' === r ? (a = n(o(t)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r;var l = u(a, s);if ('HTML' === a.nodeName && !w(s)) {
        var f = h(),
            m = f.height,
            c = f.width;p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = c + l.left;
      } else p = l;
    }return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p;
  }function E(e) {
    var t = e.width,
        o = e.height;return t * o;
  }function v(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf('auto')) return e;var p = y(o, i, r, n),
        s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
        d = Object.keys(s).map(function (e) {
      return se({ key: e }, s[e], { area: E(s[e]) });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          i = e.height;return t >= o.clientWidth && i >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];return l + (f ? '-' + f : '');
  }function O(e, t, o) {
    var i = d(t, o);return u(o, i);
  }function L(e) {
    var t = getComputedStyle(e),
        o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
        n = { width: e.offsetWidth + i, height: e.offsetHeight + o };return n;
  }function x(e) {
    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function S(e, t, o) {
    o = o.split('-')[0];var i = L(e),
        n = { width: i.width, height: i.height },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[x(s)], n;
  }function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function D(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });var i = T(e, function (e) {
      return e[t] === o;
    });return e.indexOf(i);
  }function C(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, D(t, 'name', i));return n.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i = t['function'] || t.fn;t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t));
    }), o;
  }function N() {
    if (!this.state.isDestroyed) {
      var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = O(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }function k(e, t) {
    return e.some(function (e) {
      var o = e.name,
          i = e.enabled;return i && o === t;
    });
  }function W(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;if ('undefined' != typeof document.body.style[r]) return r;
    }return null;
  }function P() {
    return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }function B(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function H(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;p.addEventListener(t, o, { passive: !0 }), r || H(n(p.parentNode), t, o, i), i.push(p);
  }function A(e, t, o, i) {
    o.updateBound = i, B(e).addEventListener('resize', o.updateBound, { passive: !0 });var r = n(e);return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }function I() {
    this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate));
  }function M(e, t) {
    return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }function R() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
  }function U(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = '';-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i;
    });
  }function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];!1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }function F(e, t, o) {
    var i = T(e, function (e) {
      var o = e.name;return o === t;
    }),
        n = !!i && e.some(function (e) {
      return e.name === o && e.enabled && e.order < i.order;
    });if (!n) {
      var r = '`' + t + '`';console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }return n;
  }function K(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }function q(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = ae.indexOf(e),
        i = ae.slice(o + 1).concat(ae.slice(0, o));return t ? i.reverse() : i;
  }function V(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +n[1],
        p = n[2];if (!r) return e;if (0 === p.indexOf('%')) {
      var s;switch (p) {case '%p':
          s = o;break;case '%':case '%r':default:
          s = i;}var d = c(s);return d[t] / 100 * r;
    }if ('vh' === p || 'vw' === p) {
      var a;return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }return r;
  }function z(e, t, o, i) {
    var n = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(i),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(T(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];return a = a.map(function (e, i) {
      var n = (1 === i ? !r : r) ? 'height' : 'width',
          p = !1;return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return V(e, n, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, i) {
        U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1));
      });
    }), n;
  }function G(e, t) {
    var o,
        i = t.offset,
        n = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = n.split('-')[0];return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1) {
    if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
      $ = 1;break;
    }
  }var i,
      te = Q && window.Promise,
      oe = te ? function (e) {
    var t = !1;return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, $));
    };
  },
      ie = function ie() {
    return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i;
  },
      ne = function ne(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      re = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, o, i) {
      return o && e(t.prototype, o), i && e(t, i), t;
    };
  }(),
      pe = function pe(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
  },
      se = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var i in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
    }return e;
  },
      de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      ae = de.slice(3),
      le = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
      fe = function () {
    function t(o, i) {
      var n = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};ne(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return se({ name: e }, n.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }), this.update();var p = this.options.eventsEnabled;p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }return re(t, [{ key: 'update', value: function value() {
        return N.call(this);
      } }, { key: 'destroy', value: function value() {
        return P.call(this);
      } }, { key: 'enableEventListeners', value: function value() {
        return I.call(this);
      } }, { key: 'disableEventListeners', value: function value() {
        return R.call(this);
      } }]), t;
  }();return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = { placement: 'bottom', eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              i = t.split('-')[1];if (i) {
            var n = e.offsets,
                r = n.reference,
                p = n.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = { start: pe({}, d, r[d]), end: pe({}, d, r[d] + r[a] - p[a]) };e.offsets.popper = se({}, p, l[i]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: G, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var o = t.boundariesElement || r(e.instance.popper);e.instance.reference === o && (o = r(o));var i = y(e.instance.popper, e.instance.reference, t.padding, o);t.boundaries = i;var n = t.priority,
              p = e.offsets.popper,
              s = { primary: function primary(e) {
              var o = p[e];return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o);
            }, secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = p[o];return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n);
            } };return n.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';p = se({}, p, s[t](e));
          }), e.offsets.popper = p, e;
        }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              i = t.reference,
              n = e.placement.split('-')[0],
              r = X,
              p = -1 !== ['top', 'bottom'].indexOf(n),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, o) {
          var i;if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;var n = o.element;if ('string' == typeof n) {
            if (n = e.instance.popper.querySelector(n), !n) return e;
          } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              g = a ? 'bottom' : 'right',
              u = L(n)[l];d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w['margin' + f], 10),
              E = parseFloat(w['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - y - E;return v = J(_(s[l] - u, v), 0), e.arrowElement = n, e.offsets.arrow = (i = {}, pe(i, m, Math.round(v)), pe(i, h, ''), i), e;
        }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (k(e.instance.modifiers, 'inner')) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
              i = e.placement.split('-')[0],
              n = x(i),
              r = e.placement.split('-')[1] || '',
              p = [];switch (t.behavior) {case le.FLIP:
              p = [i, n];break;case le.CLOCKWISE:
              p = q(i);break;case le.COUNTERCLOCKWISE:
              p = q(i, !0);break;default:
              p = t.behavior;}return p.forEach(function (s, d) {
            if (i !== s || p.length === d + 1) return e;i = e.placement.split('-')[0], n = x(i);var a = e.offsets.popper,
                l = e.offsets.reference,
                f = X,
                m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
                w = -1 !== ['top', 'bottom'].indexOf(i),
                y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);(m || b || y) && (e.flipped = !0, (m || b) && (i = p[d + 1]), y && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, 'flip'));
          }), e;
        }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              i = e.offsets,
              n = i.popper,
              r = i.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = x(t), e.offsets.popper = c(n), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;var t = e.offsets.reference,
              o = T(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var o = t.x,
              i = t.y,
              n = e.offsets.popper,
              p = T(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,
              d,
              a = void 0 === p ? t.gpuAcceleration : p,
              l = r(e.instance.popper),
              f = g(l),
              m = { position: n.position },
              h = { left: X(n.left), top: X(n.top), bottom: X(n.bottom), right: X(n.right) },
              c = 'bottom' === o ? 'top' : 'bottom',
              u = 'right' === i ? 'left' : 'right',
              b = W('transform');if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';else {
            var w = 'bottom' == c ? -1 : 1,
                y = 'right' == u ? -1 : 1;m[c] = d * w, m[u] = s * y, m.willChange = c + ', ' + u;
          }var E = { "x-placement": e.placement };return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, o, i, n) {
          var r = O(n, t, e),
              p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);return t.setAttribute('x-placement', p), Y(t, { position: 'absolute' }), o;
        }, gpuAcceleration: void 0 } } }, fe;
});
//# sourceMappingURL=popper.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var bootstrap = function (t, e, n) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;var s = function () {
    function t(t) {
      return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }function n() {
      return { bindType: r.end, delegateType: r.end, handle: function handle(t) {
          if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
        } };
    }function i() {
      if (window.QUnit) return !1;var t = document.createElement("bootstrap");for (var e in o) {
        if ("undefined" != typeof t.style[e]) return { end: o[e] };
      }return !1;
    }function s(t) {
      var n = this,
          i = !1;return e(this).one(a.TRANSITION_END, function () {
        i = !0;
      }), setTimeout(function () {
        i || a.triggerTransitionEnd(n);
      }, t), this;
    }var r = !1,
        o = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
        a = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));return t;
      }, getSelectorFromElement: function getSelectorFromElement(t) {
        var n = t.getAttribute("data-target");n && "#" !== n || (n = t.getAttribute("href") || "");try {
          return e(document).find(n).length > 0 ? n : null;
        } catch (t) {
          return null;
        }
      }, reflow: function reflow(t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(t) {
        e(t).trigger(r.end);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(r);
      }, isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      }, typeCheckConfig: function typeCheckConfig(e, n, i) {
        for (var s in i) {
          if (Object.prototype.hasOwnProperty.call(i, s)) {
            var r = i[s],
                o = n[s],
                l = o && a.isElement(o) ? "element" : t(o);if (!new RegExp(r).test(l)) throw new Error(e.toUpperCase() + ': Option "' + s + '" provided type "' + l + '" but expected type "' + r + '".');
          }
        }
      } };return r = i(), e.fn.emulateTransitionEnd = s, a.supportsTransitionEnd() && (e.event.special[a.TRANSITION_END] = n()), a;
  }(),
      r = function r(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  },
      o = function o(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
  },
      a = function () {
    var t = "alert",
        n = e.fn[t],
        i = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
        o = { ALERT: "alert", FADE: "fade", SHOW: "show" },
        a = function () {
      function t(t) {
        this._element = t;
      }var n = t.prototype;return n.close = function (t) {
        t = t || this._element;var e = this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
      }, n.dispose = function () {
        e.removeData(this._element, "bs.alert"), this._element = null;
      }, n._getRootElement = function (t) {
        var n = s.getSelectorFromElement(t),
            i = !1;return n && (i = e(n)[0]), i || (i = e(t).closest("." + o.ALERT)[0]), i;
      }, n._triggerCloseEvent = function (t) {
        var n = e.Event(i.CLOSE);return e(t).trigger(n), n;
      }, n._removeElement = function (t) {
        var n = this;e(t).removeClass(o.SHOW), s.supportsTransitionEnd() && e(t).hasClass(o.FADE) ? e(t).one(s.TRANSITION_END, function (e) {
          return n._destroyElement(t, e);
        }).emulateTransitionEnd(150) : this._destroyElement(t);
      }, n._destroyElement = function (t) {
        e(t).detach().trigger(i.CLOSED).remove();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              s = i.data("bs.alert");s || (s = new t(this), i.data("bs.alert", s)), "close" === n && s[n](this);
        });
      }, t._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta.2";
        } }]), t;
    }();return e(document).on(i.CLICK_DATA_API, { DISMISS: '[data-dismiss="alert"]' }.DISMISS, a._handleDismiss(new a())), e.fn[t] = a._jQueryInterface, e.fn[t].Constructor = a, e.fn[t].noConflict = function () {
      return e.fn[t] = n, a._jQueryInterface;
    }, a;
  }(),
      l = function () {
    var t = "button",
        n = e.fn[t],
        i = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
        s = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn" },
        o = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
        a = function () {
      function t(t) {
        this._element = t;
      }var n = t.prototype;return n.toggle = function () {
        var t = !0,
            n = !0,
            r = e(this._element).closest(s.DATA_TOGGLE)[0];if (r) {
          var o = e(this._element).find(s.INPUT)[0];if (o) {
            if ("radio" === o.type) if (o.checked && e(this._element).hasClass(i.ACTIVE)) t = !1;else {
              var a = e(r).find(s.ACTIVE)[0];a && e(a).removeClass(i.ACTIVE);
            }if (t) {
              if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled")) return;o.checked = !e(this._element).hasClass(i.ACTIVE), e(o).trigger("change");
            }o.focus(), n = !1;
          }
        }n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i.ACTIVE)), t && e(this._element).toggleClass(i.ACTIVE);
      }, n.dispose = function () {
        e.removeData(this._element, "bs.button"), this._element = null;
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this).data("bs.button");i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta.2";
        } }]), t;
    }();return e(document).on(o.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
      t.preventDefault();var n = t.target;e(n).hasClass(i.BUTTON) || (n = e(n).closest(s.BUTTON)), a._jQueryInterface.call(e(n), "toggle");
    }).on(o.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
      var n = e(t.target).closest(s.BUTTON)[0];e(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(t.type));
    }), e.fn[t] = a._jQueryInterface, e.fn[t].Constructor = a, e.fn[t].noConflict = function () {
      return e.fn[t] = n, a._jQueryInterface;
    }, a;
  }(),
      h = function () {
    var t = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = e.fn[t],
        a = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
        l = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
        h = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
        c = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
        u = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "carousel-item-right", LEFT: "carousel-item-left", NEXT: "carousel-item-next", PREV: "carousel-item-prev", ITEM: "carousel-item" },
        d = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        f = function () {
      function o(t, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(d.INDICATORS)[0], this._addEventListeners();
      }var f = o.prototype;return f.next = function () {
        this._isSliding || this._slide(h.NEXT);
      }, f.nextWhenVisible = function () {
        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
      }, f.prev = function () {
        this._isSliding || this._slide(h.PREV);
      }, f.pause = function (t) {
        t || (this._isPaused = !0), e(this._element).find(d.NEXT_PREV)[0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, f.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, f.to = function (t) {
        var n = this;this._activeElement = e(this._element).find(d.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(c.SLID, function () {
          return n.to(t);
        });else {
          if (i === t) return this.pause(), void this.cycle();var s = t > i ? h.NEXT : h.PREV;this._slide(s, this._items[t]);
        }
      }, f.dispose = function () {
        e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, f._getConfig = function (n) {
        return n = e.extend({}, a, n), s.typeCheckConfig(t, n, l), n;
      }, f._addEventListeners = function () {
        var t = this;this._config.keyboard && e(this._element).on(c.KEYDOWN, function (e) {
          return t._keydown(e);
        }), "hover" === this._config.pause && (e(this._element).on(c.MOUSEENTER, function (e) {
          return t.pause(e);
        }).on(c.MOUSELEAVE, function (e) {
          return t.cycle(e);
        }), "ontouchstart" in document.documentElement && e(this._element).on(c.TOUCHEND, function () {
          t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e);
          }, 500 + t._config.interval);
        }));
      }, f._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
            t.preventDefault(), this.prev();break;case 39:
            t.preventDefault(), this.next();break;default:
            return;}
      }, f._getItemIndex = function (t) {
        return this._items = e.makeArray(e(t).parent().find(d.ITEM)), this._items.indexOf(t);
      }, f._getItemByDirection = function (t, e) {
        var n = t === h.NEXT,
            i = t === h.PREV,
            s = this._getItemIndex(e),
            r = this._items.length - 1;if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;var o = (s + (t === h.PREV ? -1 : 1)) % this._items.length;return -1 === o ? this._items[this._items.length - 1] : this._items[o];
      }, f._triggerSlideEvent = function (t, n) {
        var i = this._getItemIndex(t),
            s = this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM)[0]),
            r = e.Event(c.SLIDE, { relatedTarget: t, direction: n, from: s, to: i });return e(this._element).trigger(r), r;
      }, f._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          e(this._indicatorsElement).find(d.ACTIVE).removeClass(u.ACTIVE);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && e(n).addClass(u.ACTIVE);
        }
      }, f._slide = function (t, n) {
        var i,
            r,
            o,
            a = this,
            l = e(this._element).find(d.ACTIVE_ITEM)[0],
            f = this._getItemIndex(l),
            _ = n || l && this._getItemByDirection(t, l),
            g = this._getItemIndex(_),
            m = Boolean(this._interval);if (t === h.NEXT ? (i = u.LEFT, r = u.NEXT, o = h.LEFT) : (i = u.RIGHT, r = u.PREV, o = h.RIGHT), _ && e(_).hasClass(u.ACTIVE)) this._isSliding = !1;else if (!this._triggerSlideEvent(_, o).isDefaultPrevented() && l && _) {
          this._isSliding = !0, m && this.pause(), this._setActiveIndicatorElement(_);var p = e.Event(c.SLID, { relatedTarget: _, direction: o, from: f, to: g });s.supportsTransitionEnd() && e(this._element).hasClass(u.SLIDE) ? (e(_).addClass(r), s.reflow(_), e(l).addClass(i), e(_).addClass(i), e(l).one(s.TRANSITION_END, function () {
            e(_).removeClass(i + " " + r).addClass(u.ACTIVE), e(l).removeClass(u.ACTIVE + " " + r + " " + i), a._isSliding = !1, setTimeout(function () {
              return e(a._element).trigger(p);
            }, 0);
          }).emulateTransitionEnd(600)) : (e(l).removeClass(u.ACTIVE), e(_).addClass(u.ACTIVE), this._isSliding = !1, e(this._element).trigger(p)), m && this.cycle();
        }
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data(n),
              s = e.extend({}, a, e(this).data());"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && e.extend(s, t);var r = "string" == typeof t ? t : s.slide;if (i || (i = new o(this, s), e(this).data(n, i)), "number" == typeof t) i.to(t);else if ("string" == typeof r) {
            if ("undefined" == typeof i[r]) throw new Error('No method named "' + r + '"');i[r]();
          } else s.interval && (i.pause(), i.cycle());
        });
      }, o._dataApiClickHandler = function (t) {
        var i = s.getSelectorFromElement(this);if (i) {
          var r = e(i)[0];if (r && e(r).hasClass(u.CAROUSEL)) {
            var a = e.extend({}, e(r).data(), e(this).data()),
                l = this.getAttribute("data-slide-to");l && (a.interval = !1), o._jQueryInterface.call(e(r), a), l && e(r).data(n).to(l), t.preventDefault();
          }
        }
      }, r(o, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta.2";
        } }, { key: "Default", get: function get() {
          return a;
        } }]), o;
    }();return e(document).on(c.CLICK_DATA_API, d.DATA_SLIDE, f._dataApiClickHandler), e(window).on(c.LOAD_DATA_API, function () {
      e(d.DATA_RIDE).each(function () {
        var t = e(this);f._jQueryInterface.call(t, t.data());
      });
    }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
      return e.fn[t] = o, f._jQueryInterface;
    }, f;
  }(),
      c = function () {
    var t = "collapse",
        n = "bs.collapse",
        i = e.fn[t],
        o = { toggle: !0, parent: "" },
        a = { toggle: "boolean", parent: "(string|element)" },
        l = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
        h = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
        c = { WIDTH: "width", HEIGHT: "height" },
        u = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
        d = function () {
      function i(t, n) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var i = e(u.DATA_TOGGLE), r = 0; r < i.length; r++) {
          var o = i[r],
              a = s.getSelectorFromElement(o);null !== a && e(a).filter(t).length > 0 && this._triggerArray.push(o);
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var d = i.prototype;return d.toggle = function () {
        e(this._element).hasClass(h.SHOW) ? this.hide() : this.show();
      }, d.show = function () {
        var t = this;if (!this._isTransitioning && !e(this._element).hasClass(h.SHOW)) {
          var r, o;if (this._parent && ((r = e.makeArray(e(this._parent).children().children(u.ACTIVES))).length || (r = null)), !(r && (o = e(r).data(n)) && o._isTransitioning)) {
            var a = e.Event(l.SHOW);if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
              r && (i._jQueryInterface.call(e(r), "hide"), o || e(r).data(n, null));var c = this._getDimension();e(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING), this._element.style[c] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);var d = function d() {
                e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW), t._element.style[c] = "", t.setTransitioning(!1), e(t._element).trigger(l.SHOWN);
              };if (s.supportsTransitionEnd()) {
                var f = "scroll" + (c[0].toUpperCase() + c.slice(1));e(this._element).one(s.TRANSITION_END, d).emulateTransitionEnd(600), this._element.style[c] = this._element[f] + "px";
              } else d();
            }
          }
        }
      }, d.hide = function () {
        var t = this;if (!this._isTransitioning && e(this._element).hasClass(h.SHOW)) {
          var n = e.Event(l.HIDE);if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), e(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW), this._triggerArray.length) for (var r = 0; r < this._triggerArray.length; r++) {
              var o = this._triggerArray[r],
                  a = s.getSelectorFromElement(o);null !== a && (e(a).hasClass(h.SHOW) || e(o).addClass(h.COLLAPSED).attr("aria-expanded", !1));
            }this.setTransitioning(!0);var c = function c() {
              t.setTransitioning(!1), e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(l.HIDDEN);
            };this._element.style[i] = "", s.supportsTransitionEnd() ? e(this._element).one(s.TRANSITION_END, c).emulateTransitionEnd(600) : c();
          }
        }
      }, d.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, d.dispose = function () {
        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, d._getConfig = function (n) {
        return n = e.extend({}, o, n), n.toggle = Boolean(n.toggle), s.typeCheckConfig(t, n, a), n;
      }, d._getDimension = function () {
        return e(this._element).hasClass(c.WIDTH) ? c.WIDTH : c.HEIGHT;
      }, d._getParent = function () {
        var t = this,
            n = null;s.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return e(n).find(r).each(function (e, n) {
          t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, d._addAriaAndCollapsedClass = function (t, n) {
        if (t) {
          var i = e(t).hasClass(h.SHOW);n.length && e(n).toggleClass(h.COLLAPSED, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (t) {
        var n = s.getSelectorFromElement(t);return n ? e(n)[0] : null;
      }, i._jQueryInterface = function (t) {
        return this.each(function () {
          var s = e(this),
              r = s.data(n),
              a = e.extend({}, o, s.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (!r && a.toggle && /show|hide/.test(t) && (a.toggle = !1), r || (r = new i(this, a), s.data(n, r)), "string" == typeof t) {
            if ("undefined" == typeof r[t]) throw new Error('No method named "' + t + '"');r[t]();
          }
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta.2";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), i;
    }();return e(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();var i = e(this),
          r = s.getSelectorFromElement(this);e(r).each(function () {
        var t = e(this),
            s = t.data(n) ? "toggle" : i.data();d._jQueryInterface.call(t, s);
      });
    }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
      return e.fn[t] = i, d._jQueryInterface;
    }, d;
  }(),
      u = function () {
    if ("undefined" == typeof n) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var t = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        a = e.fn[t],
        l = new RegExp("38|40|27"),
        h = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
        c = { DISABLED: "disabled", SHOW: "show", DROPUP: "dropup", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left" },
        u = { DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", MENU: ".dropdown-menu", NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)" },
        d = { TOP: "top-start", TOPEND: "top-end", BOTTOM: "bottom-start", BOTTOMEND: "bottom-end" },
        f = { offset: 0, flip: !0 },
        _ = { offset: "(number|string|function)", flip: "boolean" },
        g = function () {
      function a(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }var g = a.prototype;return g.toggle = function () {
        if (!this._element.disabled && !e(this._element).hasClass(c.DISABLED)) {
          var t = a._getParentFromElement(this._element),
              i = e(this._menu).hasClass(c.SHOW);if (a._clearMenus(), !i) {
            var s = { relatedTarget: this._element },
                r = e.Event(h.SHOW, s);if (e(t).trigger(r), !r.isDefaultPrevented()) {
              var o = this._element;e(t).hasClass(c.DROPUP) && (e(this._menu).hasClass(c.MENULEFT) || e(this._menu).hasClass(c.MENURIGHT)) && (o = t), this._popper = new n(o, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !e(t).closest(u.NAVBAR_NAV).length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(c.SHOW), e(t).toggleClass(c.SHOW).trigger(e.Event(h.SHOWN, s));
            }
          }
        }
      }, g.dispose = function () {
        e.removeData(this._element, i), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null;
      }, g.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, g._addEventListeners = function () {
        var t = this;e(this._element).on(h.CLICK, function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      }, g._getConfig = function (n) {
        return n = e.extend({}, this.constructor.Default, e(this._element).data(), n), s.typeCheckConfig(t, n, this.constructor.DefaultType), n;
      }, g._getMenuElement = function () {
        if (!this._menu) {
          var t = a._getParentFromElement(this._element);this._menu = e(t).find(u.MENU)[0];
        }return this._menu;
      }, g._getPlacement = function () {
        var t = e(this._element).parent(),
            n = d.BOTTOM;return t.hasClass(c.DROPUP) ? (n = d.TOP, e(this._menu).hasClass(c.MENURIGHT) && (n = d.TOPEND)) : e(this._menu).hasClass(c.MENURIGHT) && (n = d.BOTTOMEND), n;
      }, g._detectNavbar = function () {
        return e(this._element).closest(".navbar").length > 0;
      }, g._getPopperConfig = function () {
        var t = this,
            n = {};"function" == typeof this._config.offset ? n.fn = function (n) {
          return n.offsets = e.extend({}, n.offsets, t._config.offset(n.offsets) || {}), n;
        } : n.offset = this._config.offset;var i = { placement: this._getPlacement(), modifiers: { offset: n, flip: { enabled: this._config.flip } } };return this._inNavbar && (i.modifiers.applyStyle = { enabled: !this._inNavbar }), i;
      }, a._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data(i),
              s = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null;if (n || (n = new a(this, s), e(this).data(i, n)), "string" == typeof t) {
            if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');n[t]();
          }
        });
      }, a._clearMenus = function (t) {
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = e.makeArray(e(u.DATA_TOGGLE)), s = 0; s < n.length; s++) {
          var r = a._getParentFromElement(n[s]),
              o = e(n[s]).data(i),
              l = { relatedTarget: n[s] };if (o) {
            var d = o._menu;if (e(r).hasClass(c.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(r, t.target))) {
              var f = e.Event(h.HIDE, l);e(r).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[s].setAttribute("aria-expanded", "false"), e(d).removeClass(c.SHOW), e(r).removeClass(c.SHOW).trigger(e.Event(h.HIDDEN, l)));
            }
          }
        }
      }, a._getParentFromElement = function (t) {
        var n,
            i = s.getSelectorFromElement(t);return i && (n = e(i)[0]), n || t.parentNode;
      }, a._dataApiKeydownHandler = function (t) {
        if (!(!l.test(t.which) || /button/i.test(t.target.tagName) && 32 === t.which || /input|textarea/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation(), this.disabled || e(this).hasClass(c.DISABLED)))) {
          var n = a._getParentFromElement(this),
              i = e(n).hasClass(c.SHOW);if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
            var s = e(n).find(u.VISIBLE_ITEMS).get();if (s.length) {
              var r = s.indexOf(t.target);38 === t.which && r > 0 && r--, 40 === t.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus();
            }
          } else {
            if (27 === t.which) {
              var o = e(n).find(u.DATA_TOGGLE)[0];e(o).trigger("focus");
            }e(this).trigger("click");
          }
        }
      }, r(a, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta.2";
        } }, { key: "Default", get: function get() {
          return f;
        } }, { key: "DefaultType", get: function get() {
          return _;
        } }]), a;
    }();return e(document).on(h.KEYDOWN_DATA_API, u.DATA_TOGGLE, g._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, u.MENU, g._dataApiKeydownHandler).on(h.CLICK_DATA_API + " " + h.KEYUP_DATA_API, g._clearMenus).on(h.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
      t.preventDefault(), t.stopPropagation(), g._jQueryInterface.call(e(this), "toggle");
    }).on(h.CLICK_DATA_API, u.FORM_CHILD, function (t) {
      t.stopPropagation();
    }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
      return e.fn[t] = a, g._jQueryInterface;
    }, g;
  }(),
      d = function () {
    var t = "modal",
        n = ".bs.modal",
        i = e.fn[t],
        o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        a = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        l = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
        h = { SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show" },
        c = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
        u = function () {
      function i(t, n) {
        this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(c.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
      }var u = i.prototype;return u.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, u.show = function (t) {
        var n = this;if (!this._isTransitioning && !this._isShown) {
          s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE) && (this._isTransitioning = !0);var i = e.Event(l.SHOW, { relatedTarget: t });e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(h.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(l.CLICK_DISMISS, c.DATA_DISMISS, function (t) {
            return n.hide(t);
          }), e(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
            e(n._element).one(l.MOUSEUP_DISMISS, function (t) {
              e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(t);
          }));
        }
      }, u.hide = function (t) {
        var n = this;if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = e.Event(l.HIDE);if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;var r = s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE);r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(l.FOCUSIN), e(this._element).removeClass(h.SHOW), e(this._element).off(l.CLICK_DISMISS), e(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? e(this._element).one(s.TRANSITION_END, function (t) {
              return n._hideModal(t);
            }).emulateTransitionEnd(300) : this._hideModal();
          }
        }
      }, u.dispose = function () {
        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, u.handleUpdate = function () {
        this._adjustDialog();
      }, u._getConfig = function (n) {
        return n = e.extend({}, o, n), s.typeCheckConfig(t, n, a), n;
      }, u._showElement = function (t) {
        var n = this,
            i = s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && s.reflow(this._element), e(this._element).addClass(h.SHOW), this._config.focus && this._enforceFocus();var r = e.Event(l.SHOWN, { relatedTarget: t }),
            o = function o() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r);
        };i ? e(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(300) : o();
      }, u._enforceFocus = function () {
        var t = this;e(document).off(l.FOCUSIN).on(l.FOCUSIN, function (n) {
          document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus();
        });
      }, u._setEscapeEvent = function () {
        var t = this;this._isShown && this._config.keyboard ? e(this._element).on(l.KEYDOWN_DISMISS, function (e) {
          27 === e.which && (e.preventDefault(), t.hide());
        }) : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS);
      }, u._setResizeEvent = function () {
        var t = this;this._isShown ? e(window).on(l.RESIZE, function (e) {
          return t.handleUpdate(e);
        }) : e(window).off(l.RESIZE);
      }, u._hideModal = function () {
        var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          e(document.body).removeClass(h.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(l.HIDDEN);
        });
      }, u._removeBackdrop = function () {
        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
      }, u._showBackdrop = function (t) {
        var n = this,
            i = e(this._element).hasClass(h.FADE) ? h.FADE : "";if (this._isShown && this._config.backdrop) {
          var r = s.supportsTransitionEnd() && i;if (this._backdrop = document.createElement("div"), this._backdrop.className = h.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(l.CLICK_DISMISS, function (t) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), r && s.reflow(this._backdrop), e(this._backdrop).addClass(h.SHOW), !t) return;if (!r) return void t();e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(150);
        } else if (!this._isShown && this._backdrop) {
          e(this._backdrop).removeClass(h.SHOW);var o = function o() {
            n._removeBackdrop(), t && t();
          };s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE) ? e(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o();
        } else t && t();
      }, u._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, u._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, u._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, u._setScrollbar = function () {
        var t = this;if (this._isBodyOverflowing) {
          e(c.FIXED_CONTENT).each(function (n, i) {
            var s = e(i)[0].style.paddingRight,
                r = e(i).css("padding-right");e(i).data("padding-right", s).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
          }), e(c.STICKY_CONTENT).each(function (n, i) {
            var s = e(i)[0].style.marginRight,
                r = e(i).css("margin-right");e(i).data("margin-right", s).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
          }), e(c.NAVBAR_TOGGLER).each(function (n, i) {
            var s = e(i)[0].style.marginRight,
                r = e(i).css("margin-right");e(i).data("margin-right", s).css("margin-right", parseFloat(r) + t._scrollbarWidth + "px");
          });var n = document.body.style.paddingRight,
              i = e("body").css("padding-right");e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, u._resetScrollbar = function () {
        e(c.FIXED_CONTENT).each(function (t, n) {
          var i = e(n).data("padding-right");"undefined" != typeof i && e(n).css("padding-right", i).removeData("padding-right");
        }), e(c.STICKY_CONTENT + ", " + c.NAVBAR_TOGGLER).each(function (t, n) {
          var i = e(n).data("margin-right");"undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right");
        });var t = e("body").data("padding-right");"undefined" != typeof t && e("body").css("padding-right", t).removeData("padding-right");
      }, u._getScrollbarWidth = function () {
        var t = document.createElement("div");t.className = h.SCROLLBAR_MEASURER, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
      }, i._jQueryInterface = function (t, n) {
        return this.each(function () {
          var s = e(this).data("bs.modal"),
              r = e.extend({}, i.Default, e(this).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (s || (s = new i(this, r), e(this).data("bs.modal", s)), "string" == typeof t) {
            if ("undefined" == typeof s[t]) throw new Error('No method named "' + t + '"');s[t](n);
          } else r.show && s.show(n);
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta.2";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), i;
    }();return e(document).on(l.CLICK_DATA_API, c.DATA_TOGGLE, function (t) {
      var n,
          i = this,
          r = s.getSelectorFromElement(this);r && (n = e(r)[0]);var o = e(n).data("bs.modal") ? "toggle" : e.extend({}, e(n).data(), e(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var a = e(n).one(l.SHOW, function (t) {
        t.isDefaultPrevented() || a.one(l.HIDDEN, function () {
          e(i).is(":visible") && i.focus();
        });
      });u._jQueryInterface.call(e(n), o, this);
    }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function () {
      return e.fn[t] = i, u._jQueryInterface;
    }, u;
  }(),
      f = function () {
    if ("undefined" == typeof n) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var t = "tooltip",
        i = ".bs.tooltip",
        o = e.fn[t],
        a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        l = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)" },
        h = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        c = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip" },
        u = { SHOW: "show", OUT: "out" },
        d = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
        f = { FADE: "fade", SHOW: "show" },
        _ = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow" },
        g = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
        m = function () {
      function o(t, e) {
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }var m = o.prototype;return m.enable = function () {
        this._isEnabled = !0;
      }, m.disable = function () {
        this._isEnabled = !1;
      }, m.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, m.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var n = this.constructor.DATA_KEY,
              i = e(t.currentTarget).data(n);i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (e(this.getTipElement()).hasClass(f.SHOW)) return void this._leave(null, this);this._enter(null, this);
        }
      }, m.dispose = function () {
        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, m.show = function () {
        var t = this;if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");var i = e.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          e(this.element).trigger(i);var r = e.contains(this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !r) return;var a = this.getTipElement(),
              l = s.getUID(this.constructor.NAME);a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(a).addClass(f.FADE);var h = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
              c = this._getAttachment(h);this.addAttachmentClass(c);var d = !1 === this.config.container ? document.body : e(this.config.container);e(a).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(d), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, { placement: c, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: _.ARROW } }, onCreate: function onCreate(e) {
              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
            }, onUpdate: function onUpdate(e) {
              t._handlePopperPlacementChange(e);
            } }), e(a).addClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);var g = function g() {
            t.config.animation && t._fixTransition();var n = t._hoverState;t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === u.OUT && t._leave(null, t);
          };s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(this.tip).one(s.TRANSITION_END, g).emulateTransitionEnd(o._TRANSITION_DURATION) : g();
        }
      }, m.hide = function (t) {
        var n = this,
            i = this.getTipElement(),
            r = e.Event(this.constructor.Event.HIDE),
            o = function o() {
          n._hoverState !== u.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
        };e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(i).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "");
      }, m.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, m.isWithContent = function () {
        return Boolean(this.getTitle());
      }, m.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-tooltip-" + t);
      }, m.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, m.setContent = function () {
        var t = e(this.getTipElement());this.setElementContent(t.find(_.TOOLTIP_INNER), this.getTitle()), t.removeClass(f.FADE + " " + f.SHOW);
      }, m.setElementContent = function (t, n) {
        var i = this.config.html;"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n);
      }, m.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, m._getAttachment = function (t) {
        return h[t.toUpperCase()];
      }, m._setListeners = function () {
        var t = this;this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e);
          });else if (n !== g.MANUAL) {
            var i = n === g.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                s = n === g.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;e(t.element).on(i, t.config.selector, function (e) {
              return t._enter(e);
            }).on(s, t.config.selector, function (e) {
              return t._leave(e);
            });
          }e(t.element).closest(".modal").on("hide.bs.modal", function () {
            return t.hide();
          });
        }), this.config.selector ? this.config = e.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, m._fixTitle = function () {
        var t = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, m._enter = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? g.FOCUS : g.HOVER] = !0), e(n.getTipElement()).hasClass(f.SHOW) || n._hoverState === u.SHOW ? n._hoverState = u.SHOW : (clearTimeout(n._timeout), n._hoverState = u.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === u.SHOW && n.show();
        }, n.config.delay.show) : n.show());
      }, m._leave = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? g.FOCUS : g.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = u.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === u.OUT && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, m._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }return !1;
      }, m._getConfig = function (n) {
        return "number" == typeof (n = e.extend({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(t, n, this.constructor.DefaultType), n;
      }, m._getDelegateConfig = function () {
        var t = {};if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }return t;
      }, m._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            n = t.attr("class").match(a);null !== n && n.length > 0 && t.removeClass(n.join(""));
      }, m._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, m._fixTransition = function () {
        var t = this.getTipElement(),
            n = this.config.animation;null === t.getAttribute("x-placement") && (e(t).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.tooltip"),
              i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
            if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');n[t]();
          }
        });
      }, r(o, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta.2";
        } }, { key: "Default", get: function get() {
          return c;
        } }, { key: "NAME", get: function get() {
          return t;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.tooltip";
        } }, { key: "Event", get: function get() {
          return d;
        } }, { key: "EVENT_KEY", get: function get() {
          return i;
        } }, { key: "DefaultType", get: function get() {
          return l;
        } }]), o;
    }();return e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
      return e.fn[t] = o, m._jQueryInterface;
    }, m;
  }(),
      _ = function () {
    var t = "popover",
        n = ".bs.popover",
        i = e.fn[t],
        s = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        a = e.extend({}, f.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        l = e.extend({}, f.DefaultType, { content: "(string|element|function)" }),
        h = { FADE: "fade", SHOW: "show" },
        c = { TITLE: ".popover-header", CONTENT: ".popover-body" },
        u = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
        d = function (i) {
      function d() {
        return i.apply(this, arguments) || this;
      }o(d, i);var f = d.prototype;return f.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, f.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-popover-" + t);
      }, f.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, f.setContent = function () {
        var t = e(this.getTipElement());this.setElementContent(t.find(c.TITLE), this.getTitle()), this.setElementContent(t.find(c.CONTENT), this._getContent()), t.removeClass(h.FADE + " " + h.SHOW);
      }, f._getContent = function () {
        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
      }, f._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            n = t.attr("class").match(s);null !== n && n.length > 0 && t.removeClass(n.join(""));
      }, d._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.popover"),
              i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null;if ((n || !/destroy|hide/.test(t)) && (n || (n = new d(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
            if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');n[t]();
          }
        });
      }, r(d, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta.2";
        } }, { key: "Default", get: function get() {
          return a;
        } }, { key: "NAME", get: function get() {
          return t;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.popover";
        } }, { key: "Event", get: function get() {
          return u;
        } }, { key: "EVENT_KEY", get: function get() {
          return n;
        } }, { key: "DefaultType", get: function get() {
          return l;
        } }]), d;
    }(f);return e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
      return e.fn[t] = i, d._jQueryInterface;
    }, d;
  }(),
      g = function () {
    var t = "scrollspy",
        n = e.fn[t],
        i = { offset: 10, method: "auto", target: "" },
        o = { offset: "number", method: "string", target: "(string|element)" },
        a = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
        l = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active" },
        h = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
        c = { OFFSET: "offset", POSITION: "position" },
        u = function () {
      function n(t, n) {
        var i = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + h.NAV_LINKS + "," + this._config.target + " " + h.LIST_ITEMS + "," + this._config.target + " " + h.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(a.SCROLL, function (t) {
          return i._process(t);
        }), this.refresh(), this._process();
      }var u = n.prototype;return u.refresh = function () {
        var t = this,
            n = this._scrollElement !== this._scrollElement.window ? c.POSITION : c.OFFSET,
            i = "auto" === this._config.method ? n : this._config.method,
            r = i === c.POSITION ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
          var n,
              o = s.getSelectorFromElement(t);if (o && (n = e(o)[0]), n) {
            var a = n.getBoundingClientRect();if (a.width || a.height) return [e(n)[i]().top + r, o];
          }return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1]);
        });
      }, u.dispose = function () {
        e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, u._getConfig = function (n) {
        if ("string" != typeof (n = e.extend({}, i, n)).target) {
          var r = e(n.target).attr("id");r || (r = s.getUID(t), e(n.target).attr("id", r)), n.target = "#" + r;
        }return s.typeCheckConfig(t, n, o), n;
      }, u._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, u._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, u._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, u._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var s = this._offsets.length; s--;) {
            this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]);
          }
        }
      }, u._activate = function (t) {
        this._activeTarget = t, this._clear();var n = this._selector.split(",");n = n.map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
        });var i = e(n.join(","));i.hasClass(l.DROPDOWN_ITEM) ? (i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(l.ACTIVE), i.addClass(l.ACTIVE)) : (i.addClass(l.ACTIVE), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_LINKS + ", " + h.LIST_ITEMS).addClass(l.ACTIVE), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_ITEMS).children(h.NAV_LINKS).addClass(l.ACTIVE)), e(this._scrollElement).trigger(a.ACTIVATE, { relatedTarget: t });
      }, u._clear = function () {
        e(this._selector).filter(h.ACTIVE).removeClass(l.ACTIVE);
      }, n._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data("bs.scrollspy"),
              s = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if (i || (i = new n(this, s), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
            if ("undefined" == typeof i[t]) throw new Error('No method named "' + t + '"');i[t]();
          }
        });
      }, r(n, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta.2";
        } }, { key: "Default", get: function get() {
          return i;
        } }]), n;
    }();return e(window).on(a.LOAD_DATA_API, function () {
      for (var t = e.makeArray(e(h.DATA_SPY)), n = t.length; n--;) {
        var i = e(t[n]);u._jQueryInterface.call(i, i.data());
      }
    }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function () {
      return e.fn[t] = n, u._jQueryInterface;
    }, u;
  }(),
      m = function () {
    var t = e.fn.tab,
        n = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
        i = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show" },
        o = { DROPDOWN: ".dropdown", NAV_LIST_GROUP: ".nav, .list-group", ACTIVE: ".active", ACTIVE_UL: "> li > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active" },
        a = function () {
      function t(t) {
        this._element = t;
      }var a = t.prototype;return a.show = function () {
        var t = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(i.ACTIVE) || e(this._element).hasClass(i.DISABLED))) {
          var r,
              a,
              l = e(this._element).closest(o.NAV_LIST_GROUP)[0],
              h = s.getSelectorFromElement(this._element);if (l) {
            var c = "UL" === l.nodeName ? o.ACTIVE_UL : o.ACTIVE;a = e.makeArray(e(l).find(c)), a = a[a.length - 1];
          }var u = e.Event(n.HIDE, { relatedTarget: this._element }),
              d = e.Event(n.SHOW, { relatedTarget: a });if (a && e(a).trigger(u), e(this._element).trigger(d), !d.isDefaultPrevented() && !u.isDefaultPrevented()) {
            h && (r = e(h)[0]), this._activate(this._element, l);var f = function f() {
              var i = e.Event(n.HIDDEN, { relatedTarget: t._element }),
                  s = e.Event(n.SHOWN, { relatedTarget: a });e(a).trigger(i), e(t._element).trigger(s);
            };r ? this._activate(r, r.parentNode, f) : f();
          }
        }
      }, a.dispose = function () {
        e.removeData(this._element, "bs.tab"), this._element = null;
      }, a._activate = function (t, n, r) {
        var a,
            l = this,
            h = (a = "UL" === n.nodeName ? e(n).find(o.ACTIVE_UL) : e(n).children(o.ACTIVE))[0],
            c = r && s.supportsTransitionEnd() && h && e(h).hasClass(i.FADE),
            u = function u() {
          return l._transitionComplete(t, h, c, r);
        };h && c ? e(h).one(s.TRANSITION_END, u).emulateTransitionEnd(150) : u(), h && e(h).removeClass(i.SHOW);
      }, a._transitionComplete = function (t, n, r, a) {
        if (n) {
          e(n).removeClass(i.ACTIVE);var l = e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];l && e(l).removeClass(i.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }if (e(t).addClass(i.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), r ? (s.reflow(t), e(t).addClass(i.SHOW)) : e(t).removeClass(i.FADE), t.parentNode && e(t.parentNode).hasClass(i.DROPDOWN_MENU)) {
          var h = e(t).closest(o.DROPDOWN)[0];h && e(h).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE), t.setAttribute("aria-expanded", !0);
        }a && a();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              s = i.data("bs.tab");if (s || (s = new t(this), i.data("bs.tab", s)), "string" == typeof n) {
            if ("undefined" == typeof s[n]) throw new Error('No method named "' + n + '"');s[n]();
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta.2";
        } }]), t;
    }();return e(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function (t) {
      t.preventDefault(), a._jQueryInterface.call(e(this), "show");
    }), e.fn.tab = a._jQueryInterface, e.fn.tab.Constructor = a, e.fn.tab.noConflict = function () {
      return e.fn.tab = t, a._jQueryInterface;
    }, a;
  }();return function () {
    if ("undefined" == typeof e) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = e.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = s, t.Alert = a, t.Button = l, t.Carousel = h, t.Collapse = c, t.Dropdown = u, t.Modal = d, t.Popover = _, t.Scrollspy = g, t.Tab = m, t.Tooltip = f, t;
}({}, $, Popper);
//# sourceMappingURL=bootstrap.min.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * animsition v4.0.2
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
!function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t(require("jquery")) : t(jQuery);
}(function (t) {
  "use strict";
  var n = "animsition",
      i = !1;t(window).on("load", function () {
    i = !0;
  });var a = { init: function init(o) {
      o = t.extend({ inClass: "fade-in", outClass: "fade-out", inDuration: 1500, outDuration: 800, linkElement: ".animsition-link", loading: !0, loadingParentElement: "body", loadingClass: "animsition-loading", loadingInner: "", timeout: !1, timeoutCountdown: 5e3, onLoadEvent: !0, browser: ["animation-duration", "-webkit-animation-duration"], overlay: !1, overlayClass: "animsition-overlay-slide", overlayParentElement: "body", transition: function transition(t) {
          window.location.href = t;
        } }, o), a.settings = { timer: !1, data: { inClass: "animsition-in-class", inDuration: "animsition-in-duration", outClass: "animsition-out-class", outDuration: "animsition-out-duration", overlay: "animsition-overlay" }, events: { inStart: "animsition.inStart", inEnd: "animsition.inEnd", outStart: "animsition.outStart", outEnd: "animsition.outEnd" } };var e = a.supportCheck.call(this, o);if (!e && o.browser.length > 0 && (!e || !this.length)) return "console" in window || (window.console = {}, window.console.log = function (t) {
        return t;
      }), this.length || console.log("Animsition: Element does not exist on page."), e || console.log("Animsition: Does not support this browser."), a.destroy.call(this);var s = a.optionCheck.call(this, o);return s && t("." + o.overlayClass).length <= 0 && a.addOverlay.call(this, o), o.loading && t("." + o.loadingClass).length <= 0 && a.addLoading.call(this, o), this.each(function () {
        var e = this,
            s = t(this),
            r = t(window),
            l = t(document),
            d = s.data(n);d || (o = t.extend({}, o), s.data(n, { options: o }), o.timeout && a.addTimer.call(e), o.onLoadEvent && (i ? (a.settings.timer && clearTimeout(a.settings.timer), a["in"].call(e)) : r.on("load", function (t) {
          a.settings.timer && clearTimeout(a.settings.timer), a["in"].call(e);
        })), r.on("pageshow." + n, function (t) {
          t.originalEvent.persisted && a["in"].call(e);
        }), r.on("unload." + n, function () {}), l.on("click." + n, o.linkElement, function (n) {
          n.preventDefault();var i = t(this),
              o = i.attr("href");2 === n.which || n.metaKey || n.shiftKey || navigator.platform.toUpperCase().indexOf("WIN") !== -1 && n.ctrlKey ? window.open(o, "_blank") : a.out.call(e, i, o);
        }));
      });
    }, addOverlay: function addOverlay(n) {
      t(n.overlayParentElement).prepend('<div class="' + n.overlayClass + '"></div>');
    }, addLoading: function addLoading(n) {
      t(n.loadingParentElement).append('<div class="' + n.loadingClass + '">' + n.loadingInner + "</div>");
    }, removeLoading: function removeLoading() {
      var i = t(this),
          a = i.data(n).options,
          o = t(a.loadingParentElement).children("." + a.loadingClass);o.fadeOut().remove();
    }, addTimer: function addTimer() {
      var i = this,
          o = t(this),
          e = o.data(n).options;a.settings.timer = setTimeout(function () {
        a["in"].call(i), t(window).off("load." + n);
      }, e.timeoutCountdown);
    }, supportCheck: function supportCheck(n) {
      var i = t(this),
          a = n.browser,
          o = a.length,
          e = !1;0 === o && (e = !0);for (var s = 0; s < o; s++) {
        if ("string" == typeof i.css(a[s])) {
          e = !0;break;
        }
      }return e;
    }, optionCheck: function optionCheck(n) {
      var i,
          o = t(this);return i = !(!n.overlay && !o.data(a.settings.data.overlay));
    }, animationCheck: function animationCheck(i, a, o) {
      var e = t(this),
          s = e.data(n).options,
          r = typeof i === "undefined" ? "undefined" : _typeof(i),
          l = !a && "number" === r,
          d = a && "string" === r && i.length > 0;return l || d ? i = i : a && o ? i = s.inClass : !a && o ? i = s.inDuration : a && !o ? i = s.outClass : a || o || (i = s.outDuration), i;
    }, "in": function _in() {
      var i = this,
          o = t(this),
          e = o.data(n).options,
          s = o.data(a.settings.data.inDuration),
          r = o.data(a.settings.data.inClass),
          l = a.animationCheck.call(i, s, !1, !0),
          d = a.animationCheck.call(i, r, !0, !0),
          u = a.optionCheck.call(i, e),
          c = o.data(n).outClass;e.loading && a.removeLoading.call(i), c && o.removeClass(c), u ? a.inOverlay.call(i, d, l) : a.inDefault.call(i, d, l);
    }, inDefault: function inDefault(n, i) {
      var o = t(this);o.css({ "animation-duration": i + "ms" }).addClass(n).trigger(a.settings.events.inStart).animateCallback(function () {
        o.removeClass(n).css({ opacity: 1 }).trigger(a.settings.events.inEnd);
      });
    }, inOverlay: function inOverlay(i, o) {
      var e = t(this),
          s = e.data(n).options;e.css({ opacity: 1 }).trigger(a.settings.events.inStart), t(s.overlayParentElement).children("." + s.overlayClass).css({ "animation-duration": o + "ms" }).addClass(i).animateCallback(function () {
        e.trigger(a.settings.events.inEnd);
      });
    }, out: function out(i, o) {
      var e = this,
          s = t(this),
          r = s.data(n).options,
          l = i.data(a.settings.data.outClass),
          d = s.data(a.settings.data.outClass),
          u = i.data(a.settings.data.outDuration),
          c = s.data(a.settings.data.outDuration),
          m = l ? l : d,
          g = u ? u : c,
          f = a.animationCheck.call(e, m, !0, !1),
          v = a.animationCheck.call(e, g, !1, !1),
          h = a.optionCheck.call(e, r);s.data(n).outClass = f, h ? a.outOverlay.call(e, f, v, o) : a.outDefault.call(e, f, v, o);
    }, outDefault: function outDefault(i, o, e) {
      var s = t(this),
          r = s.data(n).options;s.css({ "animation-duration": o + 1 + "ms" }).addClass(i).trigger(a.settings.events.outStart).animateCallback(function () {
        s.trigger(a.settings.events.outEnd), r.transition(e);
      });
    }, outOverlay: function outOverlay(i, o, e) {
      var s = this,
          r = t(this),
          l = r.data(n).options,
          d = r.data(a.settings.data.inClass),
          u = a.animationCheck.call(s, d, !0, !0);t(l.overlayParentElement).children("." + l.overlayClass).css({ "animation-duration": o + 1 + "ms" }).removeClass(u).addClass(i).trigger(a.settings.events.outStart).animateCallback(function () {
        r.trigger(a.settings.events.outEnd), l.transition(e);
      });
    }, destroy: function destroy() {
      return this.each(function () {
        var i = t(this);t(window).off("." + n), i.css({ opacity: 1 }).removeData(n);
      });
    } };t.fn.animateCallback = function (n) {
    var i = "animationend webkitAnimationEnd";return this.each(function () {
      var a = t(this);a.on(i, function () {
        return a.off(i), n.call(this);
      });
    });
  }, t.fn.animsition = function (i) {
    return a[i] ? a[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? void t.error("Method " + i + " does not exist on jQuery." + n) : a.init.apply(this, arguments);
  };
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a : a(jQuery);
}(function (a) {
  function b(b) {
    var g = b || window.event,
        h = i.call(arguments, 1),
        j = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");j *= q, m *= q, l *= q;
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");j *= r, m *= r, l *= r;
      }if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();o = b.clientX - s.left, p = b.clientY - s.top;
      }return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
    }
  }function c() {
    f = null;
  }function d(a, b) {
    return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
  }var e,
      f,
      g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      i = Array.prototype.slice;if (a.event.fixHooks) for (var j = g.length; j;) {
    a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  }var k = a.event.special.mousewheel = { version: "3.1.12", setup: function setup() {
      if (this.addEventListener) for (var c = h.length; c;) {
        this.addEventListener(h[--c], b, !1);
      } else this.onmousewheel = b;a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
    }, teardown: function teardown() {
      if (this.removeEventListener) for (var c = h.length; c;) {
        this.removeEventListener(h[--c], b, !1);
      } else this.onmousewheel = null;a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
    }, getLineHeight: function getLineHeight(b) {
      var c = a(b),
          d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
    }, getPageHeight: function getPageHeight(b) {
      return a(b).height();
    }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };a.fn.extend({ mousewheel: function mousewheel(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    }, unmousewheel: function unmousewheel(a) {
      return this.unbind("mousewheel", a);
    } });
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
* jQuery asScrollbar v0.5.7
* https://github.com/amazingSurge/jquery-asScrollbar
*
* Copyright (c) amazingSurge
* Released under the LGPL-3.0 license
*/
!function (t, e) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) e(require("jquery"));else {
    var n = { exports: {} };e(t.jQuery), t.jqueryAsScrollbarEs = n.exports;
  }
}(this, function (t) {
  "use strict";
  function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }function n(t) {
    return "string" == typeof t && -1 !== t.indexOf("%");
  }function i(t) {
    return parseFloat(t.slice(0, -1) / 100, 10);
  }function s(t) {
    return !(!t || "matrix" !== t.substr(0, 6)) && t.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/);
  }function a() {
    return void 0 !== window.performance && window.performance.now ? window.performance.now() : Date.now();
  }var o = function (t) {
    return t && t.__esModule ? t : { default: t };
  }(t),
      r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      h = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(),
      l = { namespace: "asScrollbar", skin: null, handleSelector: null, handleTemplate: '<div class="{{handle}}"></div>', barClass: null, handleClass: null, disabledClass: "is-disabled", draggingClass: "is-dragging", hoveringClass: "is-hovering", direction: "vertical", barLength: null, handleLength: null, minHandleLength: 30, maxHandleLength: null, mouseDrag: !0, touchDrag: !0, pointerDrag: !0, clickMove: !0, clickMoveStep: .3, mousewheel: !0, mousewheelSpeed: 50, keyboard: !0, useCssTransforms3d: !0, useCssTransforms: !0, useCssTransitions: !0, duration: "500", easing: "ease" },
      u = function u(t, e, n, i) {
    var s = function s(t, e) {
      return 1 - 3 * e + 3 * t;
    },
        a = function a(t, e) {
      return 3 * e - 6 * t;
    },
        o = function o(t) {
      return 3 * t;
    },
        r = function r(t, e, n) {
      return ((s(e, n) * t + a(e, n)) * t + o(e)) * t;
    },
        h = function h(t, e, n) {
      return 3 * s(e, n) * t * t + 2 * a(e, n) * t + o(e);
    },
        l = function l(e) {
      for (var i = e, s = 0; s < 4; ++s) {
        var a = h(i, t, n);if (0 === a) return i;i -= (r(i, t, n) - e) / a;
      }return i;
    };return t === e && n === i ? { css: "linear", fn: function fn(t) {
        return t;
      } } : { css: "cubic-bezier(" + t + "," + e + "," + n + "," + i + ")", fn: function fn(t) {
        return r(l(t), e, i);
      } };
  },
      d = { ease: u(.25, .1, .25, 1), linear: u(0, 0, 1, 1), "ease-in": u(.42, 0, 1, 1), "ease-out": u(0, 0, .58, 1), "ease-in-out": u(.42, 0, .58, 1) };Date.now || (Date.now = function () {
    return new Date().getTime();
  });for (var c = ["webkit", "moz"], f = 0; f < c.length && !window.requestAnimationFrame; ++f) {
    var g = c[f];window.requestAnimationFrame = window[g + "RequestAnimationFrame"], window.cancelAnimationFrame = window[g + "CancelAnimationFrame"] || window[g + "CancelRequestAnimationFrame"];
  }if (/iP(ad|hone|od).*OS (6|7|8)/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var v = 0;window.requestAnimationFrame = function (t) {
      var e = a(),
          n = Math.max(v + 16, e);return setTimeout(function () {
        t(v = n);
      }, n - e);
    }, window.cancelAnimationFrame = clearTimeout;
  }var m = {};!function (t) {
    var e = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        n = ["webkit", "Moz", "O", "ms"],
        i = (0, o.default)("<support>").get(0).style,
        s = { csstransforms: function csstransforms() {
        return Boolean(a("transform"));
      }, csstransforms3d: function csstransforms3d() {
        return Boolean(a("perspective"));
      }, csstransitions: function csstransitions() {
        return Boolean(a("transition"));
      }, cssanimations: function cssanimations() {
        return Boolean(a("animation"));
      } },
        a = function a(t, e) {
      var s = !1,
          a = t.charAt(0).toUpperCase() + t.slice(1);return void 0 !== i[t] && (s = t), s || o.default.each(n, function (t, e) {
        return void 0 === i[e + a] || (s = "-" + e.toLowerCase() + "-" + a, !1);
      }), e ? s : !!s;
    },
        r = function r(t) {
      return a(t, !0);
    };s.csstransitions() && (t.transition = new String(r("transition")), t.transition.end = e.transition.end[t.transition]), s.cssanimations() && (t.animation = new String(r("animation")), t.animation.end = e.animation.end[t.animation]), s.csstransforms() && (t.transform = new String(r("transform")), t.transform3d = s.csstransforms3d()), "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch ? t.touch = !0 : t.touch = !1, window.PointerEvent || window.MSPointerEvent ? t.pointer = !0 : t.pointer = !1, t.prefixPointerEvent = function (t) {
      return window.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t;
    };
  }(m);var p = function () {
    function t(n) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};e(this, t), this.$bar = (0, o.default)(n), i = this.options = o.default.extend({}, l, i, this.$bar.data("options") || {}), n.direction = this.options.direction, this.classes = { directionClass: i.namespace + "-" + i.direction, barClass: i.barClass ? i.barClass : i.namespace, handleClass: i.handleClass ? i.handleClass : i.namespace + "-handle" }, "vertical" === this.options.direction ? this.attributes = { axis: "Y", position: "top", length: "height", clientLength: "clientHeight" } : "horizontal" === this.options.direction && (this.attributes = { axis: "X", position: "left", length: "width", clientLength: "clientWidth" }), this._states = {}, this._drag = { time: null, pointer: null }, this._frameId = null, this.handlePosition = 0, this.easing = d[this.options.easing] || d.ease, this.init();
    }return h(t, [{ key: "init", value: function value() {
        var t = this.options;this.$handle = this.$bar.find(this.options.handleSelector), 0 === this.$handle.length ? this.$handle = (0, o.default)(t.handleTemplate.replace(/\{\{handle\}\}/g, this.classes.handleClass)).appendTo(this.$bar) : this.$handle.addClass(this.classes.handleClass), this.$bar.addClass(this.classes.barClass).addClass(this.classes.directionClass).attr("draggable", !1), t.skin && this.$bar.addClass(t.skin), null !== t.barLength && this.setBarLength(t.barLength), null !== t.handleLength && this.setHandleLength(t.handleLength), this.updateLength(), this.bindEvents(), this.trigger("ready");
      } }, { key: "trigger", value: function value(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) {
          n[i - 1] = arguments[i];
        }var s = [this].concat(n);this.$bar.trigger("asScrollbar::" + t, s);var a = "on" + (t = t.replace(/\b\w+\b/g, function (t) {
          return t.substring(0, 1).toUpperCase() + t.substring(1);
        }));"function" == typeof this.options[a] && this.options[a].apply(this, n);
      } }, { key: "is", value: function value(t) {
        return this._states[t] && this._states[t] > 0;
      } }, { key: "enter", value: function value(t) {
        void 0 === this._states[t] && (this._states[t] = 0), this._states[t]++;
      } }, { key: "leave", value: function value(t) {
        this._states[t]--;
      } }, { key: "eventName", value: function value(t) {
        if ("string" != typeof t || "" === t) return "." + this.options.namespace;for (var e = (t = t.split(" ")).length, n = 0; n < e; n++) {
          t[n] = t[n] + "." + this.options.namespace;
        }return t.join(" ");
      } }, { key: "bindEvents", value: function value() {
        var t = this;this.options.mouseDrag && (this.$handle.on(this.eventName("mousedown"), o.default.proxy(this.onDragStart, this)), this.$handle.on(this.eventName("dragstart selectstart"), function () {
          return !1;
        })), this.options.touchDrag && m.touch && (this.$handle.on(this.eventName("touchstart"), o.default.proxy(this.onDragStart, this)), this.$handle.on(this.eventName("touchcancel"), o.default.proxy(this.onDragEnd, this))), this.options.pointerDrag && m.pointer && (this.$handle.on(this.eventName(m.prefixPointerEvent("pointerdown")), o.default.proxy(this.onDragStart, this)), this.$handle.on(this.eventName(m.prefixPointerEvent("pointercancel")), o.default.proxy(this.onDragEnd, this))), this.options.clickMove && this.$bar.on(this.eventName("mousedown"), o.default.proxy(this.onClick, this)), this.options.mousewheel && this.$bar.on("mousewheel", function (e) {
          var n = void 0;"vertical" === t.options.direction ? n = e.deltaFactor * e.deltaY : "horizontal" === t.options.direction && (n = -1 * e.deltaFactor * e.deltaX);var i = t.getHandlePosition();return i <= 0 && n > 0 || i >= t.barLength && n < 0 || (i -= t.options.mousewheelSpeed * n, t.move(i, !0), !1);
        }), this.$bar.on(this.eventName("mouseenter"), function () {
          t.$bar.addClass(t.options.hoveringClass), t.enter("hovering"), t.trigger("hover");
        }), this.$bar.on(this.eventName("mouseleave"), function () {
          t.$bar.removeClass(t.options.hoveringClass), t.is("hovering") && (t.leave("hovering"), t.trigger("hovered"));
        }), this.options.keyboard && (0, o.default)(document).on(this.eventName("keydown"), function (e) {
          if ((!e.isDefaultPrevented || !e.isDefaultPrevented()) && t.is("hovering")) {
            for (var n = document.activeElement; n.shadowRoot;) {
              n = n.shadowRoot.activeElement;
            }if (!(0, o.default)(n).is(":input,select,option,[contenteditable]")) {
              var i = 0,
                  s = null;switch (e.which) {case 37:case 63232:
                  i = -30;break;case 38:case 63233:
                  i = -30;break;case 39:case 63234:
                  i = 30;break;case 40:case 63235:
                  i = 30;break;case 33:case 63276:
                  i = -90;break;case 32:case 34:case 63277:
                  i = -90;break;case 35:case 63275:
                  s = "100%";break;case 36:case 63273:
                  s = 0;break;default:
                  return;}(i || null !== s) && (i ? t.moveBy(i, !0) : null !== s && t.moveTo(s, !0), e.preventDefault());
            }
          }
        });
      } }, { key: "onClick", value: function value(t) {
        if (3 !== t.which && t.target !== this.$handle[0]) {
          this._drag.time = new Date().getTime(), this._drag.pointer = this.pointer(t);var e = this.$handle.offset(),
              n = this.distance({ x: e.left, y: e.top }, this._drag.pointer),
              i = 1;n > 0 ? n -= this.handleLength : (n = Math.abs(n), i = -1), n > this.barLength * this.options.clickMoveStep && (n = this.barLength * this.options.clickMoveStep), this.moveBy(i * n, !0);
        }
      } }, { key: "onDragStart", value: function value(t) {
        var e = this;if (3 !== t.which) {
          this.$bar.addClass(this.options.draggingClass), this._drag.time = new Date().getTime(), this._drag.pointer = this.pointer(t);var n = function n() {
            e.enter("dragging"), e.trigger("drag");
          };this.options.mouseDrag && ((0, o.default)(document).on(this.eventName("mouseup"), o.default.proxy(this.onDragEnd, this)), (0, o.default)(document).one(this.eventName("mousemove"), o.default.proxy(function () {
            (0, o.default)(document).on(e.eventName("mousemove"), o.default.proxy(e.onDragMove, e)), n();
          }, this))), this.options.touchDrag && m.touch && ((0, o.default)(document).on(this.eventName("touchend"), o.default.proxy(this.onDragEnd, this)), (0, o.default)(document).one(this.eventName("touchmove"), o.default.proxy(function () {
            (0, o.default)(document).on(e.eventName("touchmove"), o.default.proxy(e.onDragMove, e)), n();
          }, this))), this.options.pointerDrag && m.pointer && ((0, o.default)(document).on(this.eventName(m.prefixPointerEvent("pointerup")), o.default.proxy(this.onDragEnd, this)), (0, o.default)(document).one(this.eventName(m.prefixPointerEvent("pointermove")), o.default.proxy(function () {
            (0, o.default)(document).on(e.eventName(m.prefixPointerEvent("pointermove")), o.default.proxy(e.onDragMove, e)), n();
          }, this))), (0, o.default)(document).on(this.eventName("blur"), o.default.proxy(this.onDragEnd, this));
        }
      } }, { key: "onDragMove", value: function value(t) {
        var e = this.distance(this._drag.pointer, this.pointer(t));this.is("dragging") && (t.preventDefault(), this.moveBy(e, !0));
      } }, { key: "onDragEnd", value: function value() {
        (0, o.default)(document).off(this.eventName("mousemove mouseup touchmove touchend pointermove pointerup MSPointerMove MSPointerUp blur")), this.$bar.removeClass(this.options.draggingClass), this.handlePosition = this.getHandlePosition(), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
      } }, { key: "pointer", value: function value(t) {
        var e = { x: null, y: null };return t = t.originalEvent || t || window.event, (t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e;
      } }, { key: "distance", value: function value(t, e) {
        return "vertical" === this.options.direction ? e.y - t.y : e.x - t.x;
      } }, { key: "setBarLength", value: function value(t, e) {
        void 0 !== t && this.$bar.css(this.attributes.length, t), !1 !== e && this.updateLength();
      } }, { key: "setHandleLength", value: function value(t, e) {
        void 0 !== t && (t < this.options.minHandleLength ? t = this.options.minHandleLength : this.options.maxHandleLength && t > this.options.maxHandleLength && (t = this.options.maxHandleLength), this.$handle.css(this.attributes.length, t), !1 !== e && this.updateLength(t));
      } }, { key: "updateLength", value: function value(t, e) {
        this.handleLength = void 0 !== t ? t : this.getHandleLenght(), this.barLength = void 0 !== e ? e : this.getBarLength();
      } }, { key: "getBarLength", value: function value() {
        return this.$bar[0][this.attributes.clientLength];
      } }, { key: "getHandleLenght", value: function value() {
        return this.$handle[0][this.attributes.clientLength];
      } }, { key: "getHandlePosition", value: function value() {
        var t = void 0;if (this.options.useCssTransforms && m.transform) {
          if (!(t = s(this.$handle.css(m.transform)))) return 0;t = "X" === this.attributes.axis ? t[12] || t[4] : t[13] || t[5];
        } else t = this.$handle.css(this.attributes.position);return parseFloat(t.replace("px", ""));
      } }, { key: "makeHandlePositionStyle", value: function value(t) {
        var e = void 0,
            n = "0",
            i = "0";this.options.useCssTransforms && m.transform ? ("X" === this.attributes.axis ? n = t + "px" : i = t + "px", e = m.transform.toString(), t = this.options.useCssTransforms3d && m.transform3d ? "translate3d(" + n + "," + i + ",0)" : "translate(" + n + "," + i + ")") : e = this.attributes.position;var s = {};return s[e] = t, s;
      } }, { key: "setHandlePosition", value: function value(t) {
        var e = this.makeHandlePositionStyle(t);this.$handle.css(e), this.is("dragging") || (this.handlePosition = parseFloat(t));
      } }, { key: "moveTo", value: function value(t, e, s) {
        var a = void 0 === t ? "undefined" : r(t);"string" === a && (n(t) && (t = i(t) * (this.barLength - this.handleLength)), t = parseFloat(t), a = "number"), "number" === a && this.move(t, e, s);
      } }, { key: "moveBy", value: function value(t, e, s) {
        var a = void 0 === t ? "undefined" : r(t);"string" === a && (n(t) && (t = i(t) * (this.barLength - this.handleLength)), t = parseFloat(t), a = "number"), "number" === a && this.move(this.handlePosition + t, e, s);
      } }, { key: "move", value: function value(t, e, n) {
        "number" != typeof t || this.is("disabled") || (t < 0 ? t = 0 : t + this.handleLength > this.barLength && (t = this.barLength - this.handleLength), this.is("dragging") || !0 === n ? (this.setHandlePosition(t), e && this.trigger("change", t / (this.barLength - this.handleLength))) : this.doMove(t, this.options.duration, this.options.easing, e));
      } }, { key: "doMove", value: function value(t, e, n, i) {
        var s = this,
            o = void 0;this.enter("moving"), e = e || this.options.duration, n = n || this.options.easing;var r = this.makeHandlePositionStyle(t);for (o in r) {
          if ({}.hasOwnProperty.call(r, o)) break;
        }if (this.options.useCssTransitions && m.transition) this.enter("transition"), this.prepareTransition(o, e, n), this.$handle.one(m.transition.end, function () {
          s.$handle.css(m.transition, ""), i && s.trigger("change", t / (s.barLength - s.handleLength)), s.leave("transition"), s.leave("moving");
        }), this.setHandlePosition(t);else {
          this.enter("animating");var h = a(),
              l = this.getHandlePosition(),
              u = t;this._frameId = window.requestAnimationFrame(function t(e) {
            var n = (e - h) / s.options.duration;n > 1 && (n = 1), n = s.easing.fn(n);var a = parseFloat(l + n * (u - l), 10);s.setHandlePosition(a), i && s.trigger("change", a / (s.barLength - s.handleLength)), 1 === n ? (window.cancelAnimationFrame(s._frameId), s._frameId = null, s.leave("animating"), s.leave("moving")) : s._frameId = window.requestAnimationFrame(t);
          });
        }
      } }, { key: "prepareTransition", value: function value(t, e, n, i) {
        var s = [];t && s.push(t), e && (o.default.isNumeric(e) && (e += "ms"), s.push(e)), n ? s.push(n) : s.push(this.easing.css), i && s.push(i), this.$handle.css(m.transition, s.join(" "));
      } }, { key: "enable", value: function value() {
        this._states.disabled = 0, this.$bar.removeClass(this.options.disabledClass), this.trigger("enable");
      } }, { key: "disable", value: function value() {
        this._states.disabled = 1, this.$bar.addClass(this.options.disabledClass), this.trigger("disable");
      } }, { key: "destroy", value: function value() {
        this.$handle.removeClass(this.classes.handleClass), this.$bar.removeClass(this.classes.barClass).removeClass(this.classes.directionClass).attr("draggable", null), this.options.skin && this.$bar.removeClass(this.options.skin), this.$bar.off(this.eventName()), this.$handle.off(this.eventName()), this.trigger("destroy");
      } }], [{ key: "registerEasing", value: function value(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) {
          n[i - 1] = arguments[i];
        }d[t] = u.apply(void 0, n);
      } }, { key: "getEasing", value: function value(t) {
        return d[t];
      } }, { key: "setDefaults", value: function value(t) {
        o.default.extend(l, o.default.isPlainObject(t) && t);
      } }]), t;
  }(),
      b = { version: "0.5.7" },
      y = o.default.fn.asScrollbar,
      w = function w(t) {
    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) {
      n[i - 1] = arguments[i];
    }if ("string" == typeof t) {
      var s = t;if (/^_/.test(s)) return !1;if (!/^(get)/.test(s)) return this.each(function () {
        var t = o.default.data(this, "asScrollbar");t && "function" == typeof t[s] && t[s].apply(t, n);
      });var a = this.first().data("asScrollbar");if (a && "function" == typeof a[s]) return a[s].apply(a, n);
    }return this.each(function () {
      (0, o.default)(this).data("asScrollbar") || (0, o.default)(this).data("asScrollbar", new p(this, t));
    });
  };o.default.fn.asScrollbar = w, o.default.asScrollbar = o.default.extend({ setDefaults: p.setDefaults, registerEasing: p.registerEasing, getEasing: p.getEasing, noConflict: function noConflict() {
      return o.default.fn.asScrollbar = y, w;
    } }, b);
});
//# sourceMappingURL=jquery-asScrollbar.min.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
* jQuery asScrollable v0.4.10
* https://github.com/amazingSurge/jquery-asScrollable
*
* Copyright (c) amazingSurge
* Released under the LGPL-3.0 license
*/
!function (t, e) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) e(require("jquery"));else {
    var i = { exports: {} };e(t.jQuery), t.jqueryAsScrollableEs = i.exports;
  }
}(this, function (t) {
  "use strict";
  function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }function i() {
    return void 0 !== window.performance && window.performance.now ? window.performance.now() : Date.now();
  }function s(t) {
    return "string" == typeof t && -1 !== t.indexOf("%");
  }function n(t) {
    return t < 0 ? t = 0 : t > 1 && (t = 1), 100 * parseFloat(t).toFixed(4) + "%";
  }function a(t) {
    return parseFloat(t.slice(0, -1) / 100, 10);
  }var o = function (t) {
    return t && t.__esModule ? t : { default: t };
  }(t),
      r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      l = function () {
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var s = e[i];s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
      }
    }return function (e, i, s) {
      return i && t(e.prototype, i), s && t(e, s), e;
    };
  }(),
      h = { namespace: "asScrollable", skin: null, contentSelector: null, containerSelector: null, enabledClass: "is-enabled", disabledClass: "is-disabled", draggingClass: "is-dragging", hoveringClass: "is-hovering", scrollingClass: "is-scrolling", direction: "vertical", showOnHover: !0, showOnBarHover: !1, duration: 500, easing: "ease-in", responsive: !0, throttle: 20, scrollbar: {} },
      c = function () {
    var t = void 0,
        e = void 0,
        i = void 0;return e = window.navigator.userAgent, !!(t = /(?=.+Mac OS X)(?=.+Firefox)/.test(e)) && ((i = /Firefox\/\d{2}\./.exec(e)) && (i = i[0].replace(/\D+/g, "")), t && +i > 23);
  }(),
      f = 0,
      u = function () {
    function t(i, s) {
      e(this, t), this.$element = (0, o.default)(i), s = this.options = o.default.extend({}, h, s || {}, this.$element.data("options") || {}), this.classes = { wrap: s.namespace, content: s.namespace + "-content", container: s.namespace + "-container", bar: s.namespace + "-bar", barHide: s.namespace + "-bar-hide", skin: s.skin }, this.attributes = { vertical: { axis: "Y", overflow: "overflow-y", scroll: "scrollTop", scrollLength: "scrollHeight", pageOffset: "pageYOffset", ffPadding: "padding-right", length: "height", clientLength: "clientHeight", offset: "offsetHeight", crossLength: "width", crossClientLength: "clientWidth", crossOffset: "offsetWidth" }, horizontal: { axis: "X", overflow: "overflow-x", scroll: "scrollLeft", scrollLength: "scrollWidth", pageOffset: "pageXOffset", ffPadding: "padding-bottom", length: "width", clientLength: "clientWidth", offset: "offsetWidth", crossLength: "height", crossClientLength: "clientHeight", crossOffset: "offsetHeight" } }, this._states = {}, this.horizontal = null, this.vertical = null, this.$bar = null, this._frameId = null, this._timeoutId = null, this.instanceId = ++f, this.easing = o.default.asScrollbar.getEasing(this.options.easing) || o.default.asScrollbar.getEasing("ease"), this.init();
    }return l(t, [{ key: "init", value: function value() {
        var t = this.$element.css("position");switch (this.options.containerSelector ? (this.$container = this.$element.find(this.options.containerSelector), this.$wrap = this.$element, "static" === t && this.$wrap.css("position", "relative")) : (this.$container = this.$element.wrap("<div>"), this.$wrap = this.$container.parent(), this.$wrap.height(this.$element.height()), "static" !== t ? this.$wrap.css("position", t) : this.$wrap.css("position", "relative")), this.options.contentSelector ? this.$content = this.$container.find(this.options.contentSelector) : (this.$content = this.$container.wrap("<div>"), this.$container = this.$content.parent()), this.options.direction) {case "vertical":
            this.vertical = !0;break;case "horizontal":
            this.horizontal = !0;break;case "both":
            this.horizontal = !0, this.vertical = !0;break;case "auto":
            var e = this.$element.css("overflow-x"),
                i = this.$element.css("overflow-y");"scroll" !== e && "auto" !== e || (this.horizontal = !0), "scroll" !== i && "auto" !== i || (this.vertical = !0);}(this.vertical || this.horizontal) && (this.$wrap.addClass(this.classes.wrap), this.$container.addClass(this.classes.container), this.$content.addClass(this.classes.content), this.options.skin && this.$wrap.addClass(this.classes.skin), this.$wrap.addClass(this.options.enabledClass), this.vertical && (this.$wrap.addClass(this.classes.wrap + "-vertical"), this.initLayout("vertical"), this.createBar("vertical")), this.horizontal && (this.$wrap.addClass(this.classes.wrap + "-horizontal"), this.initLayout("horizontal"), this.createBar("horizontal")), this.bindEvents(), this.trigger("ready"));
      } }, { key: "bindEvents", value: function value() {
        var t = this;if (this.options.responsive && ((0, o.default)(window).on(this.eventNameWithId("orientationchange"), function () {
          t.update();
        }), (0, o.default)(window).on(this.eventNameWithId("resize"), this.throttle(function () {
          t.update();
        }, this.options.throttle))), this.horizontal || this.vertical) {
          var e = this;this.$wrap.on(this.eventName("mouseenter"), function () {
            e.$wrap.addClass(t.options.hoveringClass), e.enter("hovering"), e.trigger("hover");
          }), this.$wrap.on(this.eventName("mouseleave"), function () {
            e.$wrap.removeClass(t.options.hoveringClass), e.is("hovering") && (e.leave("hovering"), e.trigger("hovered"));
          }), this.options.showOnHover && (this.options.showOnBarHover ? this.$bar.on("asScrollbar::hover", function () {
            e.horizontal && e.showBar("horizontal"), e.vertical && e.showBar("vertical");
          }).on("asScrollbar::hovered", function () {
            e.horizontal && e.hideBar("horizontal"), e.vertical && e.hideBar("vertical");
          }) : (this.$element.on("asScrollable::hover", o.default.proxy(this.showBar, this)), this.$element.on("asScrollable::hovered", o.default.proxy(this.hideBar, this)))), this.$container.on(this.eventName("scroll"), function () {
            if (e.horizontal) {
              var t = e.offsetLeft;e.offsetLeft = e.getOffset("horizontal"), t !== e.offsetLeft && (e.trigger("scroll", e.getPercentOffset("horizontal"), "horizontal"), 0 === e.offsetLeft && e.trigger("scrolltop", "horizontal"), e.offsetLeft === e.getScrollLength("horizontal") && e.trigger("scrollend", "horizontal"));
            }if (e.vertical) {
              var i = e.offsetTop;e.offsetTop = e.getOffset("vertical"), i !== e.offsetTop && (e.trigger("scroll", e.getPercentOffset("vertical"), "vertical"), 0 === e.offsetTop && e.trigger("scrolltop", "vertical"), e.offsetTop === e.getScrollLength("vertical") && e.trigger("scrollend", "vertical"));
            }
          }), this.$element.on("asScrollable::scroll", function (t, i, s, a) {
            e.is("scrolling") || (e.enter("scrolling"), e.$wrap.addClass(e.options.scrollingClass)), i.getBarApi(a).moveTo(n(s), !1, !0), clearTimeout(e._timeoutId), e._timeoutId = setTimeout(function () {
              e.$wrap.removeClass(e.options.scrollingClass), e.leave("scrolling");
            }, 200);
          }), this.$bar.on("asScrollbar::change", function (t, i, s) {
            "string" == typeof t.target.direction && e.scrollTo(t.target.direction, n(s), !1, !0);
          }), this.$bar.on("asScrollbar::drag", function () {
            e.$wrap.addClass(e.options.draggingClass);
          }).on("asScrollbar::dragged", function () {
            e.$wrap.removeClass(e.options.draggingClass);
          });
        }
      } }, { key: "unbindEvents", value: function value() {
        this.$wrap.off(this.eventName()), this.$element.off("asScrollable::scroll").off("asScrollable::hover").off("asScrollable::hovered"), this.$container.off(this.eventName()), (0, o.default)(window).off(this.eventNameWithId());
      } }, { key: "initLayout", value: function value(t) {
        "vertical" === t && this.$container.css("height", this.$wrap.height());var e = this.attributes[t],
            i = this.$container[0].parentNode[e.crossClientLength],
            s = this.getBrowserScrollbarWidth(t);this.$content.css(e.crossLength, i + "px"), this.$container.css(e.crossLength, s + i + "px"), 0 === s && c && this.$container.css(e.ffPadding, 16);
      } }, { key: "createBar", value: function value(t) {
        var e = o.default.extend(this.options.scrollbar, { namespace: this.classes.bar, direction: t, useCssTransitions: !1, keyboard: !1 }),
            i = (0, o.default)("<div>");i.asScrollbar(e), this.options.showOnHover && i.addClass(this.classes.barHide), i.appendTo(this.$wrap), this["$" + t] = i, null === this.$bar ? this.$bar = i : this.$bar = this.$bar.add(i), this.updateBarHandle(t);
      } }, { key: "trigger", value: function value(t) {
        for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) {
          i[s - 1] = arguments[s];
        }var n = [this].concat(i);this.$element.trigger("asScrollable::" + t, n);var a = "on" + (t = t.replace(/\b\w+\b/g, function (t) {
          return t.substring(0, 1).toUpperCase() + t.substring(1);
        }));"function" == typeof this.options[a] && this.options[a].apply(this, i);
      } }, { key: "is", value: function value(t) {
        return this._states[t] && this._states[t] > 0;
      } }, { key: "enter", value: function value(t) {
        void 0 === this._states[t] && (this._states[t] = 0), this._states[t] = 1;
      } }, { key: "leave", value: function value(t) {
        this._states[t] = -1;
      } }, { key: "eventName", value: function value(t) {
        if ("string" != typeof t || "" === t) return "." + this.options.namespace;for (var e = (t = t.split(" ")).length, i = 0; i < e; i++) {
          t[i] = t[i] + "." + this.options.namespace;
        }return t.join(" ");
      } }, { key: "eventNameWithId", value: function value(t) {
        if ("string" != typeof t || "" === t) return "." + this.options.namespace + "-" + this.instanceId;for (var e = (t = t.split(" ")).length, i = 0; i < e; i++) {
          t[i] = t[i] + "." + this.options.namespace + "-" + this.instanceId;
        }return t.join(" ");
      } }, { key: "throttle", value: function value(t, e) {
        var i = this,
            s = Date.now || function () {
          return new Date().getTime();
        },
            n = void 0,
            a = void 0,
            o = void 0,
            r = void 0,
            l = 0,
            h = function h() {
          l = s(), n = null, r = t.apply(a, o), n || (a = o = null);
        };return function () {
          for (var c = arguments.length, f = Array(c), u = 0; u < c; u++) {
            f[u] = arguments[u];
          }var d = s(),
              v = e - (d - l);return a = i, o = f, v <= 0 || v > e ? (n && (clearTimeout(n), n = null), l = d, r = t.apply(a, o), n || (a = o = null)) : n || (n = setTimeout(h, v)), r;
        };
      } }, { key: "getBrowserScrollbarWidth", value: function value(t) {
        var e = this.attributes[t],
            i = void 0,
            s = void 0;return e.scrollbarWidth ? e.scrollbarWidth : (i = document.createElement("div"), s = i.style, s.position = "absolute", s.width = "100px", s.height = "100px", s.overflow = "scroll", s.top = "-9999px", document.body.appendChild(i), e.scrollbarWidth = i[e.offset] - i[e.clientLength], document.body.removeChild(i), e.scrollbarWidth);
      } }, { key: "getOffset", value: function value(t) {
        var e = this.attributes[t],
            i = this.$container[0];return i[e.pageOffset] || i[e.scroll];
      } }, { key: "getPercentOffset", value: function value(t) {
        return this.getOffset(t) / this.getScrollLength(t);
      } }, { key: "getContainerLength", value: function value(t) {
        return this.$container[0][this.attributes[t].clientLength];
      } }, { key: "getScrollLength", value: function value(t) {
        return this.$content[0][this.attributes[t].scrollLength] - this.getContainerLength(t);
      } }, { key: "scrollTo", value: function value(t, e, i, n) {
        var o = void 0 === e ? "undefined" : r(e);"string" === o && (s(e) && (e = a(e) * this.getScrollLength(t)), e = parseFloat(e), o = "number"), "number" === o && this.move(t, e, i, n);
      } }, { key: "scrollBy", value: function value(t, e, i, n) {
        var o = void 0 === e ? "undefined" : r(e);"string" === o && (s(e) && (e = a(e) * this.getScrollLength(t)), e = parseFloat(e), o = "number"), "number" === o && this.move(t, this.getOffset(t) + e, i, n);
      } }, { key: "move", value: function value(t, e, s, n) {
        if (!0 === this[t] && "number" == typeof e) {
          this.enter("moving"), e < 0 ? e = 0 : e > this.getScrollLength(t) && (e = this.getScrollLength(t));var a = this.attributes[t],
              o = this,
              r = function r() {
            o.leave("moving");
          };if (n) this.$container[0][a.scroll] = e, !1 !== s && this.trigger("change", e / this.getScrollLength(t), t), r();else {
            this.enter("animating");var l = i(),
                h = this.getOffset(t),
                c = e;this._frameId = window.requestAnimationFrame(function i(n) {
              var f = (n - l) / o.options.duration;f > 1 && (f = 1), f = o.easing.fn(f);var u = parseFloat(h + f * (c - h), 10);o.$container[0][a.scroll] = u, !1 !== s && o.trigger("change", e / o.getScrollLength(t), t), 1 === f ? (window.cancelAnimationFrame(o._frameId), o._frameId = null, o.leave("animating"), r()) : o._frameId = window.requestAnimationFrame(i);
            });
          }
        }
      } }, { key: "scrollXto", value: function value(t, e, i) {
        return this.scrollTo("horizontal", t, e, i);
      } }, { key: "scrollYto", value: function value(t, e, i) {
        return this.scrollTo("vertical", t, e, i);
      } }, { key: "scrollXby", value: function value(t, e, i) {
        return this.scrollBy("horizontal", t, e, i);
      } }, { key: "scrollYby", value: function value(t, e, i) {
        return this.scrollBy("vertical", t, e, i);
      } }, { key: "getBar", value: function value(t) {
        return t && this["$" + t] ? this["$" + t] : this.$bar;
      } }, { key: "getBarApi", value: function value(t) {
        return this.getBar(t).data("asScrollbar");
      } }, { key: "getBarX", value: function value() {
        return this.getBar("horizontal");
      } }, { key: "getBarY", value: function value() {
        return this.getBar("vertical");
      } }, { key: "showBar", value: function value(t) {
        this.getBar(t).removeClass(this.classes.barHide);
      } }, { key: "hideBar", value: function value(t) {
        this.getBar(t).addClass(this.classes.barHide);
      } }, { key: "updateBarHandle", value: function value(t) {
        var e = this.getBarApi(t);if (e) {
          var i = this.getContainerLength(t),
              s = this.getScrollLength(t);s > 0 ? (e.is("disabled") && e.enable(), e.setHandleLength(e.getBarLength() * i / (s + i), !0)) : e.disable();
        }
      } }, { key: "disable", value: function value() {
        this.is("disabled") || (this.enter("disabled"), this.$wrap.addClass(this.options.disabledClass).removeClass(this.options.enabledClass), this.unbindEvents(), this.unStyle()), this.trigger("disable");
      } }, { key: "enable", value: function value() {
        this.is("disabled") && (this.leave("disabled"), this.$wrap.addClass(this.options.enabledClass).removeClass(this.options.disabledClass), this.bindEvents(), this.update()), this.trigger("enable");
      } }, { key: "update", value: function value() {
        this.is("disabled") || this.$element.is(":visible") && (this.vertical && (this.initLayout("vertical"), this.updateBarHandle("vertical")), this.horizontal && (this.initLayout("horizontal"), this.updateBarHandle("horizontal")));
      } }, { key: "unStyle", value: function value() {
        this.horizontal && (this.$container.css({ height: "", "padding-bottom": "" }), this.$content.css({ height: "" })), this.vertical && (this.$container.css({ width: "", height: "", "padding-right": "" }), this.$content.css({ width: "" })), this.options.containerSelector || this.$wrap.css({ height: "" });
      } }, { key: "destroy", value: function value() {
        this.$wrap.removeClass(this.classes.wrap + "-vertical").removeClass(this.classes.wrap + "-horizontal").removeClass(this.classes.wrap).removeClass(this.options.enabledClass).removeClass(this.classes.disabledClass), this.unStyle(), this.$bar && this.$bar.remove(), this.unbindEvents(), this.options.containerSelector ? this.$container.removeClass(this.classes.container) : this.$container.unwrap(), this.options.contentSelector || this.$content.unwrap(), this.$content.removeClass(this.classes.content), this.$element.data("asScrollable", null), this.trigger("destroy");
      } }], [{ key: "setDefaults", value: function value(t) {
        o.default.extend(h, o.default.isPlainObject(t) && t);
      } }]), t;
  }(),
      d = { version: "0.4.10" },
      v = o.default.fn.asScrollable,
      g = function g(t) {
    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) {
      i[s - 1] = arguments[s];
    }if ("string" == typeof t) {
      var n = t;if (/^_/.test(n)) return !1;if (!/^(get)/.test(n)) return this.each(function () {
        var t = o.default.data(this, "asScrollable");t && "function" == typeof t[n] && t[n].apply(t, i);
      });var a = this.first().data("asScrollable");if (a && "function" == typeof a[n]) return a[n].apply(a, i);
    }return this.each(function () {
      (0, o.default)(this).data("asScrollable") || (0, o.default)(this).data("asScrollable", new u(this, t));
    });
  };o.default.fn.asScrollable = g, o.default.asScrollable = o.default.extend({ setDefaults: u.setDefaults, noConflict: function noConflict() {
      return o.default.fn.asScrollable = v, g;
    } }, d);
});
//# sourceMappingURL=jquery-asScrollable.min.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
* jQuery asHoverScroll v0.3.6
* https://github.com/amazingSurge/jquery-asHoverScroll
*
* Copyright (c) amazingSurge
* Released under the LGPL-3.0 license
*/
!function (t, e) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) e(require("jquery"));else {
    var i = { exports: {} };e(t.jQuery), t.jqueryAsHoverScrollEs = i.exports;
  }
}(this, function (t) {
  "use strict";
  function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }var i = function (t) {
    return t && t.__esModule ? t : { default: t };
  }(t),
      n = function () {
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }return function (e, i, n) {
      return i && t(e.prototype, i), n && t(e, n), e;
    };
  }(),
      s = { namespace: "asHoverScroll", list: "> ul", item: "> li", exception: null, direction: "vertical", fixed: !1, mouseMove: !0, touchScroll: !0, pointerScroll: !0, useCssTransforms: !0, useCssTransforms3d: !0, boundary: 10, throttle: 20, onEnter: function onEnter() {
      $(this).siblings().removeClass("is-active"), $(this).addClass("is-active");
    }, onLeave: function onLeave() {
      $(this).removeClass("is-active");
    } },
      o = {};!function (t) {
    var e = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        n = ["webkit", "Moz", "O", "ms"],
        s = (0, i.default)("<support>").get(0).style,
        o = { csstransforms: function csstransforms() {
        return Boolean(r("transform"));
      }, csstransforms3d: function csstransforms3d() {
        return Boolean(r("perspective"));
      }, csstransitions: function csstransitions() {
        return Boolean(r("transition"));
      }, cssanimations: function cssanimations() {
        return Boolean(r("animation"));
      } },
        r = function r(t, e) {
      var o = !1,
          r = t.charAt(0).toUpperCase() + t.slice(1);return void 0 !== s[t] && (o = t), o || i.default.each(n, function (t, e) {
        return void 0 === s[e + r] || (o = "-" + e.toLowerCase() + "-" + r, !1);
      }), e ? o : !!o;
    },
        a = function a(t) {
      return r(t, !0);
    };o.csstransitions() && (t.transition = new String(a("transition")), t.transition.end = e.transition.end[t.transition]), o.cssanimations() && (t.animation = new String(a("animation")), t.animation.end = e.animation.end[t.animation]), o.csstransforms() && (t.transform = new String(a("transform")), t.transform3d = o.csstransforms3d()), "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch ? t.touch = !0 : t.touch = !1, window.PointerEvent || window.MSPointerEvent ? t.pointer = !0 : t.pointer = !1, t.convertMatrixToArray = function (t) {
      return !(!t || "matrix" !== t.substr(0, 6)) && t.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/);
    }, t.prefixPointerEvent = function (t) {
      return window.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t;
    };
  }(o);var r = 0,
      a = function () {
    function t(n, o) {
      e(this, t), this.element = n, this.$element = (0, i.default)(n), this.options = i.default.extend({}, s, o, this.$element.data()), this.$list = (0, i.default)(this.options.list, this.$element), this.classes = { disabled: this.options.namespace + "-disabled" }, "vertical" === this.options.direction ? this.attributes = { page: "pageY", axis: "Y", position: "top", length: "height", offset: "offsetTop", client: "clientY", clientLength: "clientHeight" } : "horizontal" === this.options.direction && (this.attributes = { page: "pageX", axis: "X", position: "left", length: "width", offset: "offsetLeft", client: "clientX", clientLength: "clientWidth" }), this._states = {}, this._scroll = { time: null, pointer: null }, this.instanceId = ++r, this.trigger("init"), this.init();
    }return n(t, [{ key: "init", value: function value() {
        this.initPosition(), this.updateLength(), this.bindEvents();
      } }, { key: "bindEvents", value: function value() {
        var t = this,
            e = this,
            n = ["enter"],
            s = [];this.options.mouseMove && (this.$element.on(this.eventName("mousemove"), i.default.proxy(this.onMove, this)), n.push("mouseenter"), s.push("mouseleave")), this.options.touchScroll && o.touch && (this.$element.on(this.eventName("touchstart"), i.default.proxy(this.onScrollStart, this)), this.$element.on(this.eventName("touchcancel"), i.default.proxy(this.onScrollEnd, this))), this.options.pointerScroll && o.pointer && (this.$element.on(this.eventName(o.prefixPointerEvent("pointerdown")), i.default.proxy(this.onScrollStart, this)), this.$element.on(this.eventName(o.prefixPointerEvent("pointercancel")), i.default.proxy(this.onScrollEnd, this))), this.$list.on(this.eventName(n.join(" ")), this.options.item, function () {
          e.is("scrolling") || e.options.onEnter.call(t);
        }), this.$list.on(this.eventName(s.join(" ")), this.options.item, function () {
          e.is("scrolling") || e.options.onLeave.call(t);
        }), (0, i.default)(window).on(this.eventNameWithId("orientationchange"), function () {
          e.update();
        }), (0, i.default)(window).on(this.eventNameWithId("resize"), this.throttle(function () {
          e.update();
        }, this.options.throttle));
      } }, { key: "unbindEvents", value: function value() {
        this.$element.off(this.eventName()), this.$list.off(this.eventName()), (0, i.default)(window).off(this.eventNameWithId());
      } }, { key: "onScrollStart", value: function value(t) {
        var e = this,
            n = this;if (!(this.is("scrolling") || 3 === t.which || (0, i.default)(t.target).closest(this.options.exception).length > 0)) {
          this._scroll.time = new Date().getTime(), this._scroll.pointer = this.pointer(t), this._scroll.start = this.getPosition(), this._scroll.moved = !1;var s = function s() {
            e.enter("scrolling"), e.trigger("scroll");
          };this.options.touchScroll && o.touch && ((0, i.default)(document).on(this.eventName("touchend"), i.default.proxy(this.onScrollEnd, this)), (0, i.default)(document).one(this.eventName("touchmove"), i.default.proxy(function () {
            this.is("scrolling") || ((0, i.default)(document).on(n.eventName("touchmove"), i.default.proxy(this.onScrollMove, this)), s());
          }, this))), this.options.pointerScroll && o.pointer && ((0, i.default)(document).on(this.eventName(o.prefixPointerEvent("pointerup")), i.default.proxy(this.onScrollEnd, this)), (0, i.default)(document).one(this.eventName(o.prefixPointerEvent("pointermove")), i.default.proxy(function () {
            this.is("scrolling") || ((0, i.default)(document).on(n.eventName(o.prefixPointerEvent("pointermove")), i.default.proxy(this.onScrollMove, this)), s());
          }, this))), (0, i.default)(document).on(this.eventName("blur"), i.default.proxy(this.onScrollEnd, this)), t.preventDefault();
        }
      } }, { key: "onScrollMove", value: function value(t) {
        this._scroll.updated = this.pointer(t);var e = this.distance(this._scroll.pointer, this._scroll.updated);if ((Math.abs(this._scroll.pointer.x - this._scroll.updated.x) > 10 || Math.abs(this._scroll.pointer.y - this._scroll.updated.y) > 10) && (this._scroll.moved = !0), this.is("scrolling")) {
          t.preventDefault();var i = this._scroll.start + e;this.canScroll() && (i > 0 ? i = 0 : i < this.containerLength - this.listLength && (i = this.containerLength - this.listLength), this.updatePosition(i));
        }
      } }, { key: "onScrollEnd", value: function value(t) {
        this._scroll.moved || (0, i.default)(t.target).trigger("tap"), this.options.touchScroll && o.touch && (0, i.default)(document).off(this.eventName("touchmove touchend")), this.options.pointerScroll && o.pointer && (0, i.default)(document).off(this.eventName(o.prefixPointerEvent("pointermove pointerup"))), (0, i.default)(document).off(this.eventName("blur")), this.leave("scrolling"), this.trigger("scrolled");
      } }, { key: "pointer", value: function value(t) {
        var e = { x: null, y: null };return (t = this.getEvent(t)).pageX && !this.options.fixed ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e;
      } }, { key: "getEvent", value: function value(t) {
        return t = t.originalEvent || t || window.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t;
      } }, { key: "distance", value: function value(t, e) {
        return "vertical" === this.options.direction ? e.y - t.y : e.x - t.x;
      } }, { key: "onMove", value: function value(t) {
        if (t = this.getEvent(t), !this.is("scrolling") && this.isMatchScroll(t)) {
          var e = void 0,
              i = void 0;(i = (t[this.attributes.page] && !this.options.fixed ? t[this.attributes.page] : t[this.attributes.client]) - this.element[this.attributes.offset]) < this.options.boundary ? e = 0 : (e = (i - this.options.boundary) * this.multiplier) > this.listLength - this.containerLength && (e = this.listLength - this.containerLength), this.updatePosition(-e);
        }
      } }, { key: "isMatchScroll", value: function value(t) {
        return !(this.is("disabled") || !this.canScroll()) && (!this.options.exception || 0 === (0, i.default)(t.target).closest(this.options.exception).length);
      } }, { key: "canScroll", value: function value() {
        return this.listLength > this.containerLength;
      } }, { key: "getContainerLength", value: function value() {
        return this.element[this.attributes.clientLength];
      } }, { key: "getListhLength", value: function value() {
        return this.$list[0][this.attributes.clientLength];
      } }, { key: "updateLength", value: function value() {
        this.containerLength = this.getContainerLength(), this.listLength = this.getListhLength(), this.multiplier = (this.listLength - this.containerLength) / (this.containerLength - 2 * this.options.boundary);
      } }, { key: "initPosition", value: function value() {
        var t = this.makePositionStyle(0);this.$list.css(t);
      } }, { key: "getPosition", value: function value() {
        var t = void 0;if (this.options.useCssTransforms && o.transform) {
          if (!(t = (this.options.useCssTransforms3d && o.transform3d, o.convertMatrixToArray(this.$list.css(o.transform))))) return 0;t = "X" === this.attributes.axis ? t[12] || t[4] : t[13] || t[5];
        } else t = this.$list.css(this.attributes.position);return parseFloat(t.replace("px", ""));
      } }, { key: "makePositionStyle", value: function value(t) {
        var e = void 0,
            i = "0px",
            n = "0px";this.options.useCssTransforms && o.transform ? ("X" === this.attributes.axis ? i = t + "px" : n = t + "px", e = o.transform.toString(), t = this.options.useCssTransforms3d && o.transform3d ? "translate3d(" + i + "," + n + ",0px)" : "translate(" + i + "," + n + ")") : e = this.attributes.position;var s = {};return s[e] = t, s;
      } }, { key: "updatePosition", value: function value(t) {
        var e = this.makePositionStyle(t);this.$list.css(e);
      } }, { key: "update", value: function value() {
        this.is("disabled") || (this.updateLength(), this.canScroll() || this.initPosition());
      } }, { key: "eventName", value: function value(t) {
        if ("string" != typeof t || "" === t) return ".asHoverScroll";for (var e = (t = t.split(" ")).length, i = 0; i < e; i++) {
          t[i] = t[i] + ".asHoverScroll";
        }return t.join(" ");
      } }, { key: "eventNameWithId", value: function value(t) {
        if ("string" != typeof t || "" === t) return "." + this.options.namespace + "-" + this.instanceId;for (var e = (t = t.split(" ")).length, i = 0; i < e; i++) {
          t[i] = t[i] + "." + this.options.namespace + "-" + this.instanceId;
        }return t.join(" ");
      } }, { key: "trigger", value: function value(t) {
        for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) {
          i[n - 1] = arguments[n];
        }var s = [this].concat(i);this.$element.trigger("asHoverScroll::" + t, s);var o = "on" + (t = t.replace(/\b\w+\b/g, function (t) {
          return t.substring(0, 1).toUpperCase() + t.substring(1);
        }));"function" == typeof this.options[o] && this.options[o].apply(this, i);
      } }, { key: "is", value: function value(t) {
        return this._states[t] && this._states[t] > 0;
      } }, { key: "enter", value: function value(t) {
        void 0 === this._states[t] && (this._states[t] = 0), this._states[t] = 1;
      } }, { key: "leave", value: function value(t) {
        this._states[t] = 0;
      } }, { key: "throttle", value: function value(t, e) {
        var i = this,
            n = Date.now || function () {
          return new Date().getTime();
        },
            s = void 0,
            o = void 0,
            r = void 0,
            a = void 0,
            l = 0,
            h = function h() {
          l = n(), s = null, a = t.apply(o, r), s || (o = r = null);
        };return function () {
          for (var u = arguments.length, c = Array(u), f = 0; f < u; f++) {
            c[f] = arguments[f];
          }var d = n(),
              p = e - (d - l);return o = i, r = c, p <= 0 || p > e ? (s && (clearTimeout(s), s = null), l = d, a = t.apply(o, r), s || (o = r = null)) : s || (s = setTimeout(h, p)), a;
        };
      } }, { key: "enable", value: function value() {
        this.is("disabled") && (this.leave("disabled"), this.$element.removeClass(this.classes.disabled), this.bindEvents()), this.trigger("enable");
      } }, { key: "disable", value: function value() {
        this.is("disabled") || (this.enter("disabled"), this.initPosition(), this.$element.addClass(this.classes.disabled), this.unbindEvents()), this.trigger("disable");
      } }, { key: "destroy", value: function value() {
        this.$element.removeClass(this.classes.disabled), this.unbindEvents(), this.$element.data("asHoverScroll", null), this.trigger("destroy");
      } }], [{ key: "setDefaults", value: function value(t) {
        i.default.extend(s, i.default.isPlainObject(t) && t);
      } }]), t;
  }(),
      l = { version: "0.3.6" },
      h = i.default.fn.asHoverScroll,
      u = function u(t) {
    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) {
      n[s - 1] = arguments[s];
    }if ("string" == typeof t) {
      var o = t;if (/^_/.test(o)) return !1;if (!/^(get)/.test(o)) return this.each(function () {
        var t = i.default.data(this, "asHoverScroll");t && "function" == typeof t[o] && t[o].apply(t, n);
      });var r = this.first().data("asHoverScroll");if (r && "function" == typeof r[o]) return r[o].apply(r, n);
    }return this.each(function () {
      (0, i.default)(this).data("asHoverScroll") || (0, i.default)(this).data("asHoverScroll", new a(this, t));
    });
  };i.default.fn.asHoverScroll = u, i.default.asHoverScroll = i.default.extend({ setDefaults: a.setDefaults, noConflict: function noConflict() {
      return i.default.fn.asHoverScroll = h, u;
    } }, l);
});
//# sourceMappingURL=jquery-asHoverScroll.min.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Waves v0.7.2
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
!function (a, b) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return b.apply(a);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b.call(a) : a.Waves = b.call(a);
}("object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) ? global : this, function () {
  "use strict";
  function a(a) {
    return null !== a && a === a.window;
  }function b(b) {
    return a(b) ? b : 9 === b.nodeType && b.defaultView;
  }function c(a) {
    var b = typeof a === "undefined" ? "undefined" : _typeof(a);return "function" === b || "object" === b && !!a;
  }function d(a) {
    return c(a) && a.nodeType > 0;
  }function e(a) {
    var b = m.call(a);return "[object String]" === b ? l(a) : c(a) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(b) && a.hasOwnProperty("length") ? a : d(a) ? [a] : [];
  }function f(a) {
    var c,
        d,
        e = { top: 0, left: 0 },
        f = a && a.ownerDocument;return c = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = b(f), { top: e.top + d.pageYOffset - c.clientTop, left: e.left + d.pageXOffset - c.clientLeft };
  }function g(a) {
    var b = "";for (var c in a) {
      a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
    }return b;
  }function h(a, b, c) {
    if (c) {
      c.classList.remove("waves-rippling");var d = c.getAttribute("data-x"),
          e = c.getAttribute("data-y"),
          f = c.getAttribute("data-scale"),
          h = c.getAttribute("data-translate"),
          i = Date.now() - Number(c.getAttribute("data-hold")),
          j = 350 - i;0 > j && (j = 0), "mousemove" === a.type && (j = 150);var k = "mousemove" === a.type ? 2500 : o.duration;setTimeout(function () {
        var a = { top: e + "px", left: d + "px", opacity: "0", "-webkit-transition-duration": k + "ms", "-moz-transition-duration": k + "ms", "-o-transition-duration": k + "ms", "transition-duration": k + "ms", "-webkit-transform": f + " " + h, "-moz-transform": f + " " + h, "-ms-transform": f + " " + h, "-o-transform": f + " " + h, transform: f + " " + h };c.setAttribute("style", g(a)), setTimeout(function () {
          try {
            b.removeChild(c);
          } catch (a) {
            return !1;
          }
        }, k);
      }, j);
    }
  }function i(a) {
    if (q.allowEvent(a) === !1) return null;for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
      if (c.classList.contains("waves-effect") && !(c instanceof SVGElement)) {
        b = c;break;
      }c = c.parentElement;
    }return b;
  }function j(a) {
    q.registerEvent(a);var b = i(a);if (null !== b) if ("touchstart" === a.type && o.delay) {
      var c = !1,
          d = setTimeout(function () {
        d = null, o.show(a, b);
      }, o.delay),
          e = function e(_e) {
        d && (clearTimeout(d), d = null, o.show(a, b)), c || (c = !0, o.hide(_e, b));
      },
          f = function f(a) {
        d && (clearTimeout(d), d = null), e(a);
      };b.addEventListener("touchmove", f, !1), b.addEventListener("touchend", e, !1), b.addEventListener("touchcancel", e, !1);
    } else o.show(a, b), n && (b.addEventListener("touchend", o.hide, !1), b.addEventListener("touchcancel", o.hide, !1)), b.addEventListener("mouseup", o.hide, !1), b.addEventListener("mouseleave", o.hide, !1);
  }var k = k || {},
      l = document.querySelectorAll.bind(document),
      m = Object.prototype.toString,
      n = "ontouchstart" in window,
      o = { duration: 750, delay: 200, show: function show(a, b, c) {
      if (2 === a.button) return !1;b = b || this;var d = document.createElement("div");d.className = "waves-ripple waves-rippling", b.appendChild(d);var e = f(b),
          h = a.pageY - e.top,
          i = a.pageX - e.left,
          j = "scale(" + b.clientWidth / 100 * 3 + ")",
          k = "translate(0,0)";c && (k = "translate(" + c.x + "px, " + c.y + "px)"), "touches" in a && a.touches.length && (h = a.touches[0].pageY - e.top, i = a.touches[0].pageX - e.left), d.setAttribute("data-hold", Date.now()), d.setAttribute("data-x", i), d.setAttribute("data-y", h), d.setAttribute("data-scale", j), d.setAttribute("data-translate", k);var l = { top: h + "px", left: i + "px" };d.classList.add("waves-notransition"), d.setAttribute("style", g(l)), d.classList.remove("waves-notransition"), l["-webkit-transform"] = j + " " + k, l["-moz-transform"] = j + " " + k, l["-ms-transform"] = j + " " + k, l["-o-transform"] = j + " " + k, l.transform = j + " " + k, l.opacity = "1";var m = "mousemove" === a.type ? 2500 : o.duration;l["-webkit-transition-duration"] = m + "ms", l["-moz-transition-duration"] = m + "ms", l["-o-transition-duration"] = m + "ms", l["transition-duration"] = m + "ms", d.setAttribute("style", g(l));
    }, hide: function hide(a, b) {
      b = b || this;for (var c = b.getElementsByClassName("waves-rippling"), d = 0, e = c.length; e > d; d++) {
        h(a, b, c[d]);
      }
    } },
      p = { input: function input(a) {
      var b = a.parentNode;if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
        var c = document.createElement("i");c.className = a.className + " waves-input-wrapper", a.className = "waves-button-input", b.replaceChild(c, a), c.appendChild(a);var d = window.getComputedStyle(a, null),
            e = d.color,
            f = d.backgroundColor;c.setAttribute("style", "color:" + e + ";background:" + f), a.setAttribute("style", "background-color:rgba(0,0,0,0);");
      }
    }, img: function img(a) {
      var b = a.parentNode;if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
        var c = document.createElement("i");b.replaceChild(c, a), c.appendChild(a);
      }
    } },
      q = { touches: 0, allowEvent: function allowEvent(a) {
      var b = !0;return (/^(mousedown|mousemove)$/.test(a.type) && q.touches && (b = !1), b
      );
    }, registerEvent: function registerEvent(a) {
      var b = a.type;"touchstart" === b ? q.touches += 1 : /^(touchend|touchcancel)$/.test(b) && setTimeout(function () {
        q.touches && (q.touches -= 1);
      }, 500);
    } };return k.init = function (a) {
    var b = document.body;a = a || {}, "duration" in a && (o.duration = a.duration), "delay" in a && (o.delay = a.delay), n && (b.addEventListener("touchstart", j, !1), b.addEventListener("touchcancel", q.registerEvent, !1), b.addEventListener("touchend", q.registerEvent, !1)), b.addEventListener("mousedown", j, !1);
  }, k.attach = function (a, b) {
    a = e(a), "[object Array]" === m.call(b) && (b = b.join(" ")), b = b ? " " + b : "";for (var c, d, f = 0, g = a.length; g > f; f++) {
      c = a[f], d = c.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(d) && (p[d](c), c = c.parentElement), c.className += " waves-effect" + b;
    }
  }, k.ripple = function (a, b) {
    a = e(a);var c = a.length;if (b = b || {}, b.wait = b.wait || 0, b.position = b.position || null, c) for (var d, g, h, i = {}, j = 0, k = { type: "mousedown", button: 1 }, l = function l(a, b) {
      return function () {
        o.hide(a, b);
      };
    }; c > j; j++) {
      if (d = a[j], g = b.position || { x: d.clientWidth / 2, y: d.clientHeight / 2 }, h = f(d), i.x = h.left + g.x, i.y = h.top + g.y, k.pageX = i.x, k.pageY = i.y, o.show(k, d), b.wait >= 0 && null !== b.wait) {
        var m = { type: "mouseup", button: 1 };setTimeout(l(m, d), b.wait);
      }
    }
  }, k.calm = function (a) {
    a = e(a);for (var b = { type: "mouseup", button: 1 }, c = 0, d = a.length; d > c; c++) {
      o.hide(b, a[c]);
    }
  }, k.displayEffect = function (a) {
    console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), k.init(a);
  }, k;
});
//# sourceMappingURL=waves.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  function require(name) {
    var module = require.modules[name];if (!module) throw new Error('failed to require "' + name + '"');if (!("exports" in module) && typeof module.definition === "function") {
      module.client = module.component = true;module.definition.call(this, module.exports = {}, module);delete module.definition;
    }return module.exports;
  }require.loader = "component";require.helper = {};require.helper.semVerSort = function (a, b) {
    var aArray = a.version.split(".");var bArray = b.version.split(".");for (var i = 0; i < aArray.length; ++i) {
      var aInt = parseInt(aArray[i], 10);var bInt = parseInt(bArray[i], 10);if (aInt === bInt) {
        var aLex = aArray[i].substr(("" + aInt).length);var bLex = bArray[i].substr(("" + bInt).length);if (aLex === "" && bLex !== "") return 1;if (aLex !== "" && bLex === "") return -1;if (aLex !== "" && bLex !== "") return aLex > bLex ? 1 : -1;continue;
      } else if (aInt > bInt) {
        return 1;
      } else {
        return -1;
      }
    }return 0;
  };require.latest = function (name, returnPath) {
    function showError(name) {
      throw new Error('failed to find latest module of "' + name + '"');
    }var versionRegexp = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;var remoteRegexp = /(.*)~(.*)/;if (!remoteRegexp.test(name)) showError(name);var moduleNames = Object.keys(require.modules);var semVerCandidates = [];var otherCandidates = [];for (var i = 0; i < moduleNames.length; i++) {
      var moduleName = moduleNames[i];if (new RegExp(name + "@").test(moduleName)) {
        var version = moduleName.substr(name.length + 1);var semVerMatch = versionRegexp.exec(moduleName);if (semVerMatch != null) {
          semVerCandidates.push({ version: version, name: moduleName });
        } else {
          otherCandidates.push({ version: version, name: moduleName });
        }
      }
    }if (semVerCandidates.concat(otherCandidates).length === 0) {
      showError(name);
    }if (semVerCandidates.length > 0) {
      var module = semVerCandidates.sort(require.helper.semVerSort).pop().name;if (returnPath === true) {
        return module;
      }return require(module);
    }var module = otherCandidates.sort(function (a, b) {
      return a.name > b.name;
    })[0].name;if (returnPath === true) {
      return module;
    }return require(module);
  };require.modules = {};require.register = function (name, definition) {
    require.modules[name] = { definition: definition };
  };require.define = function (name, exports) {
    require.modules[name] = { exports: exports };
  };require.register("abpetkov~transitionize@0.0.3", function (exports, module) {
    module.exports = Transitionize;function Transitionize(element, props) {
      if (!(this instanceof Transitionize)) return new Transitionize(element, props);this.element = element;this.props = props || {};this.init();
    }Transitionize.prototype.isSafari = function () {
      return (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
      );
    };Transitionize.prototype.init = function () {
      var transitions = [];for (var key in this.props) {
        transitions.push(key + " " + this.props[key]);
      }this.element.style.transition = transitions.join(", ");if (this.isSafari()) this.element.style.webkitTransition = transitions.join(", ");
    };
  });require.register("ftlabs~fastclick@v0.6.11", function (exports, module) {
    function FastClick(layer) {
      "use strict";
      var oldOnClick,
          self = this;this.trackingClick = false;this.trackingClickStart = 0;this.targetElement = null;this.touchStartX = 0;this.touchStartY = 0;this.lastTouchIdentifier = 0;this.touchBoundary = 10;this.layer = layer;if (!layer || !layer.nodeType) {
        throw new TypeError("Layer must be a document node");
      }this.onClick = function () {
        return FastClick.prototype.onClick.apply(self, arguments);
      };this.onMouse = function () {
        return FastClick.prototype.onMouse.apply(self, arguments);
      };this.onTouchStart = function () {
        return FastClick.prototype.onTouchStart.apply(self, arguments);
      };this.onTouchMove = function () {
        return FastClick.prototype.onTouchMove.apply(self, arguments);
      };this.onTouchEnd = function () {
        return FastClick.prototype.onTouchEnd.apply(self, arguments);
      };this.onTouchCancel = function () {
        return FastClick.prototype.onTouchCancel.apply(self, arguments);
      };if (FastClick.notNeeded(layer)) {
        return;
      }if (this.deviceIsAndroid) {
        layer.addEventListener("mouseover", this.onMouse, true);layer.addEventListener("mousedown", this.onMouse, true);layer.addEventListener("mouseup", this.onMouse, true);
      }layer.addEventListener("click", this.onClick, true);layer.addEventListener("touchstart", this.onTouchStart, false);layer.addEventListener("touchmove", this.onTouchMove, false);layer.addEventListener("touchend", this.onTouchEnd, false);layer.addEventListener("touchcancel", this.onTouchCancel, false);if (!Event.prototype.stopImmediatePropagation) {
        layer.removeEventListener = function (type, callback, capture) {
          var rmv = Node.prototype.removeEventListener;if (type === "click") {
            rmv.call(layer, type, callback.hijacked || callback, capture);
          } else {
            rmv.call(layer, type, callback, capture);
          }
        };layer.addEventListener = function (type, callback, capture) {
          var adv = Node.prototype.addEventListener;if (type === "click") {
            adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
              if (!event.propagationStopped) {
                callback(event);
              }
            }), capture);
          } else {
            adv.call(layer, type, callback, capture);
          }
        };
      }if (typeof layer.onclick === "function") {
        oldOnClick = layer.onclick;layer.addEventListener("click", function (event) {
          oldOnClick(event);
        }, false);layer.onclick = null;
      }
    }FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0;FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick = function (target) {
      "use strict";
      switch (target.nodeName.toLowerCase()) {case "button":case "select":case "textarea":
          if (target.disabled) {
            return true;
          }break;case "input":
          if (this.deviceIsIOS && target.type === "file" || target.disabled) {
            return true;
          }break;case "label":case "video":
          return true;}return (/\bneedsclick\b/.test(target.className)
      );
    };FastClick.prototype.needsFocus = function (target) {
      "use strict";
      switch (target.nodeName.toLowerCase()) {case "textarea":
          return true;case "select":
          return !this.deviceIsAndroid;case "input":
          switch (target.type) {case "button":case "checkbox":case "file":case "image":case "radio":case "submit":
              return false;}return !target.disabled && !target.readOnly;default:
          return (/\bneedsfocus\b/.test(target.className)
          );}
    };FastClick.prototype.sendClick = function (targetElement, event) {
      "use strict";
      var clickEvent, touch;if (document.activeElement && document.activeElement !== targetElement) {
        document.activeElement.blur();
      }touch = event.changedTouches[0];clickEvent = document.createEvent("MouseEvents");clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);clickEvent.forwardedTouchEvent = true;targetElement.dispatchEvent(clickEvent);
    };FastClick.prototype.determineEventType = function (targetElement) {
      "use strict";
      if (this.deviceIsAndroid && targetElement.tagName.toLowerCase() === "select") {
        return "mousedown";
      }return "click";
    };FastClick.prototype.focus = function (targetElement) {
      "use strict";
      var length;if (this.deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf("date") !== 0 && targetElement.type !== "time") {
        length = targetElement.value.length;targetElement.setSelectionRange(length, length);
      } else {
        targetElement.focus();
      }
    };FastClick.prototype.updateScrollParent = function (targetElement) {
      "use strict";
      var scrollParent, parentElement;scrollParent = targetElement.fastClickScrollParent;if (!scrollParent || !scrollParent.contains(targetElement)) {
        parentElement = targetElement;do {
          if (parentElement.scrollHeight > parentElement.offsetHeight) {
            scrollParent = parentElement;targetElement.fastClickScrollParent = parentElement;break;
          }parentElement = parentElement.parentElement;
        } while (parentElement);
      }if (scrollParent) {
        scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
      }
    };FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
      "use strict";
      if (eventTarget.nodeType === Node.TEXT_NODE) {
        return eventTarget.parentNode;
      }return eventTarget;
    };FastClick.prototype.onTouchStart = function (event) {
      "use strict";
      var targetElement, touch, selection;if (event.targetTouches.length > 1) {
        return true;
      }targetElement = this.getTargetElementFromEventTarget(event.target);touch = event.targetTouches[0];if (this.deviceIsIOS) {
        selection = window.getSelection();if (selection.rangeCount && !selection.isCollapsed) {
          return true;
        }if (!this.deviceIsIOS4) {
          if (touch.identifier === this.lastTouchIdentifier) {
            event.preventDefault();return false;
          }this.lastTouchIdentifier = touch.identifier;this.updateScrollParent(targetElement);
        }
      }this.trackingClick = true;this.trackingClickStart = event.timeStamp;this.targetElement = targetElement;this.touchStartX = touch.pageX;this.touchStartY = touch.pageY;if (event.timeStamp - this.lastClickTime < 200) {
        event.preventDefault();
      }return true;
    };FastClick.prototype.touchHasMoved = function (event) {
      "use strict";
      var touch = event.changedTouches[0],
          boundary = this.touchBoundary;if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
        return true;
      }return false;
    };FastClick.prototype.onTouchMove = function (event) {
      "use strict";
      if (!this.trackingClick) {
        return true;
      }if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
        this.trackingClick = false;this.targetElement = null;
      }return true;
    };FastClick.prototype.findControl = function (labelElement) {
      "use strict";
      if (labelElement.control !== undefined) {
        return labelElement.control;
      }if (labelElement.htmlFor) {
        return document.getElementById(labelElement.htmlFor);
      }return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
    };FastClick.prototype.onTouchEnd = function (event) {
      "use strict";
      var forElement,
          trackingClickStart,
          targetTagName,
          scrollParent,
          touch,
          targetElement = this.targetElement;if (!this.trackingClick) {
        return true;
      }if (event.timeStamp - this.lastClickTime < 200) {
        this.cancelNextClick = true;return true;
      }this.cancelNextClick = false;this.lastClickTime = event.timeStamp;trackingClickStart = this.trackingClickStart;this.trackingClick = false;this.trackingClickStart = 0;if (this.deviceIsIOSWithBadTarget) {
        touch = event.changedTouches[0];targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
      }targetTagName = targetElement.tagName.toLowerCase();if (targetTagName === "label") {
        forElement = this.findControl(targetElement);if (forElement) {
          this.focus(targetElement);if (this.deviceIsAndroid) {
            return false;
          }targetElement = forElement;
        }
      } else if (this.needsFocus(targetElement)) {
        if (event.timeStamp - trackingClickStart > 100 || this.deviceIsIOS && window.top !== window && targetTagName === "input") {
          this.targetElement = null;return false;
        }this.focus(targetElement);if (!this.deviceIsIOS4 || targetTagName !== "select") {
          this.targetElement = null;event.preventDefault();
        }return false;
      }if (this.deviceIsIOS && !this.deviceIsIOS4) {
        scrollParent = targetElement.fastClickScrollParent;if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
          return true;
        }
      }if (!this.needsClick(targetElement)) {
        event.preventDefault();this.sendClick(targetElement, event);
      }return false;
    };FastClick.prototype.onTouchCancel = function () {
      "use strict";
      this.trackingClick = false;this.targetElement = null;
    };FastClick.prototype.onMouse = function (event) {
      "use strict";
      if (!this.targetElement) {
        return true;
      }if (event.forwardedTouchEvent) {
        return true;
      }if (!event.cancelable) {
        return true;
      }if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
        if (event.stopImmediatePropagation) {
          event.stopImmediatePropagation();
        } else {
          event.propagationStopped = true;
        }event.stopPropagation();event.preventDefault();return false;
      }return true;
    };FastClick.prototype.onClick = function (event) {
      "use strict";
      var permitted;if (this.trackingClick) {
        this.targetElement = null;this.trackingClick = false;return true;
      }if (event.target.type === "submit" && event.detail === 0) {
        return true;
      }permitted = this.onMouse(event);if (!permitted) {
        this.targetElement = null;
      }return permitted;
    };FastClick.prototype.destroy = function () {
      "use strict";
      var layer = this.layer;if (this.deviceIsAndroid) {
        layer.removeEventListener("mouseover", this.onMouse, true);layer.removeEventListener("mousedown", this.onMouse, true);layer.removeEventListener("mouseup", this.onMouse, true);
      }layer.removeEventListener("click", this.onClick, true);layer.removeEventListener("touchstart", this.onTouchStart, false);layer.removeEventListener("touchmove", this.onTouchMove, false);layer.removeEventListener("touchend", this.onTouchEnd, false);layer.removeEventListener("touchcancel", this.onTouchCancel, false);
    };FastClick.notNeeded = function (layer) {
      "use strict";
      var metaViewport;var chromeVersion;if (typeof window.ontouchstart === "undefined") {
        return true;
      }chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];if (chromeVersion) {
        if (FastClick.prototype.deviceIsAndroid) {
          metaViewport = document.querySelector("meta[name=viewport]");if (metaViewport) {
            if (metaViewport.content.indexOf("user-scalable=no") !== -1) {
              return true;
            }if (chromeVersion > 31 && window.innerWidth <= window.screen.width) {
              return true;
            }
          }
        } else {
          return true;
        }
      }if (layer.style.msTouchAction === "none") {
        return true;
      }return false;
    };FastClick.attach = function (layer) {
      "use strict";
      return new FastClick(layer);
    };if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        "use strict";
        return FastClick;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== "undefined" && module.exports) {
      module.exports = FastClick.attach;module.exports.FastClick = FastClick;
    } else {
      window.FastClick = FastClick;
    }
  });require.register("component~indexof@0.0.3", function (exports, module) {
    module.exports = function (arr, obj) {
      if (arr.indexOf) return arr.indexOf(obj);for (var i = 0; i < arr.length; ++i) {
        if (arr[i] === obj) return i;
      }return -1;
    };
  });require.register("component~classes@1.2.1", function (exports, module) {
    var index = require("component~indexof@0.0.3");var re = /\s+/;var toString = Object.prototype.toString;module.exports = function (el) {
      return new ClassList(el);
    };function ClassList(el) {
      if (!el) throw new Error("A DOM element reference is required");this.el = el;this.list = el.classList;
    }ClassList.prototype.add = function (name) {
      if (this.list) {
        this.list.add(name);return this;
      }var arr = this.array();var i = index(arr, name);if (!~i) arr.push(name);this.el.className = arr.join(" ");return this;
    };ClassList.prototype.remove = function (name) {
      if ("[object RegExp]" == toString.call(name)) {
        return this.removeMatching(name);
      }if (this.list) {
        this.list.remove(name);return this;
      }var arr = this.array();var i = index(arr, name);if (~i) arr.splice(i, 1);this.el.className = arr.join(" ");return this;
    };ClassList.prototype.removeMatching = function (re) {
      var arr = this.array();for (var i = 0; i < arr.length; i++) {
        if (re.test(arr[i])) {
          this.remove(arr[i]);
        }
      }return this;
    };ClassList.prototype.toggle = function (name, force) {
      if (this.list) {
        if ("undefined" !== typeof force) {
          if (force !== this.list.toggle(name, force)) {
            this.list.toggle(name);
          }
        } else {
          this.list.toggle(name);
        }return this;
      }if ("undefined" !== typeof force) {
        if (!force) {
          this.remove(name);
        } else {
          this.add(name);
        }
      } else {
        if (this.has(name)) {
          this.remove(name);
        } else {
          this.add(name);
        }
      }return this;
    };ClassList.prototype.array = function () {
      var str = this.el.className.replace(/^\s+|\s+$/g, "");var arr = str.split(re);if ("" === arr[0]) arr.shift();return arr;
    };ClassList.prototype.has = ClassList.prototype.contains = function (name) {
      return this.list ? this.list.contains(name) : !!~index(this.array(), name);
    };
  });require.register("component~event@0.1.4", function (exports, module) {
    var bind = window.addEventListener ? "addEventListener" : "attachEvent",
        unbind = window.removeEventListener ? "removeEventListener" : "detachEvent",
        prefix = bind !== "addEventListener" ? "on" : "";exports.bind = function (el, type, fn, capture) {
      el[bind](prefix + type, fn, capture || false);return fn;
    };exports.unbind = function (el, type, fn, capture) {
      el[unbind](prefix + type, fn, capture || false);return fn;
    };
  });require.register("component~query@0.0.3", function (exports, module) {
    function one(selector, el) {
      return el.querySelector(selector);
    }exports = module.exports = function (selector, el) {
      el = el || document;return one(selector, el);
    };exports.all = function (selector, el) {
      el = el || document;return el.querySelectorAll(selector);
    };exports.engine = function (obj) {
      if (!obj.one) throw new Error(".one callback required");if (!obj.all) throw new Error(".all callback required");one = obj.one;exports.all = obj.all;return exports;
    };
  });require.register("component~matches-selector@0.1.5", function (exports, module) {
    var query = require("component~query@0.0.3");var proto = Element.prototype;var vendor = proto.matches || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector;module.exports = match;function match(el, selector) {
      if (!el || el.nodeType !== 1) return false;if (vendor) return vendor.call(el, selector);var nodes = query.all(selector, el.parentNode);for (var i = 0; i < nodes.length; ++i) {
        if (nodes[i] == el) return true;
      }return false;
    }
  });require.register("component~closest@0.1.4", function (exports, module) {
    var matches = require("component~matches-selector@0.1.5");module.exports = function (element, selector, checkYoSelf, root) {
      element = checkYoSelf ? { parentNode: element } : element;root = root || document;while ((element = element.parentNode) && element !== document) {
        if (matches(element, selector)) return element;if (element === root) return;
      }
    };
  });require.register("component~delegate@0.2.3", function (exports, module) {
    var closest = require("component~closest@0.1.4"),
        event = require("component~event@0.1.4");exports.bind = function (el, selector, type, fn, capture) {
      return event.bind(el, type, function (e) {
        var target = e.target || e.srcElement;e.delegateTarget = closest(target, selector, true, el);if (e.delegateTarget) fn.call(el, e);
      }, capture);
    };exports.unbind = function (el, type, fn, capture) {
      event.unbind(el, type, fn, capture);
    };
  });require.register("component~events@1.0.9", function (exports, module) {
    var events = require("component~event@0.1.4");var delegate = require("component~delegate@0.2.3");module.exports = Events;function Events(el, obj) {
      if (!(this instanceof Events)) return new Events(el, obj);if (!el) throw new Error("element required");if (!obj) throw new Error("object required");this.el = el;this.obj = obj;this._events = {};
    }Events.prototype.sub = function (event, method, cb) {
      this._events[event] = this._events[event] || {};this._events[event][method] = cb;
    };Events.prototype.bind = function (event, method) {
      var e = parse(event);var el = this.el;var obj = this.obj;var name = e.name;var method = method || "on" + name;var args = [].slice.call(arguments, 2);function cb() {
        var a = [].slice.call(arguments).concat(args);obj[method].apply(obj, a);
      }if (e.selector) {
        cb = delegate.bind(el, e.selector, name, cb);
      } else {
        events.bind(el, name, cb);
      }this.sub(name, method, cb);return cb;
    };Events.prototype.unbind = function (event, method) {
      if (0 == arguments.length) return this.unbindAll();if (1 == arguments.length) return this.unbindAllOf(event);var bindings = this._events[event];if (!bindings) return;var cb = bindings[method];if (!cb) return;events.unbind(this.el, event, cb);
    };Events.prototype.unbindAll = function () {
      for (var event in this._events) {
        this.unbindAllOf(event);
      }
    };Events.prototype.unbindAllOf = function (event) {
      var bindings = this._events[event];if (!bindings) return;for (var method in bindings) {
        this.unbind(event, method);
      }
    };function parse(event) {
      var parts = event.split(/ +/);return { name: parts.shift(), selector: parts.join(" ") };
    }
  });require.register("switchery", function (exports, module) {
    var transitionize = require("abpetkov~transitionize@0.0.3"),
        fastclick = require("ftlabs~fastclick@v0.6.11"),
        classes = require("component~classes@1.2.1"),
        events = require("component~events@1.0.9");module.exports = Switchery;var defaults = { color: "#64bd63", secondaryColor: "#dfdfdf", jackColor: "#fff", jackSecondaryColor: null, className: "switchery", disabled: false, disabledOpacity: .5, speed: "0.4s", size: "default" };function Switchery(element, options) {
      if (!(this instanceof Switchery)) return new Switchery(element, options);this.element = element;this.options = options || {};for (var i in defaults) {
        if (this.options[i] == null) {
          this.options[i] = defaults[i];
        }
      }if (this.element != null && this.element.type == "checkbox") this.init();if (this.isDisabled() === true) this.disable();
    }Switchery.prototype.hide = function () {
      this.element.style.display = "none";
    };Switchery.prototype.show = function () {
      var switcher = this.create();this.insertAfter(this.element, switcher);
    };Switchery.prototype.create = function () {
      this.switcher = document.createElement("span");this.jack = document.createElement("small");this.switcher.appendChild(this.jack);this.switcher.className = this.options.className;this.events = events(this.switcher, this);return this.switcher;
    };Switchery.prototype.insertAfter = function (reference, target) {
      reference.parentNode.insertBefore(target, reference.nextSibling);
    };Switchery.prototype.setPosition = function (clicked) {
      var checked = this.isChecked(),
          switcher = this.switcher,
          jack = this.jack;if (clicked && checked) checked = false;else if (clicked && !checked) checked = true;if (checked === true) {
        this.element.checked = true;if (window.getComputedStyle) jack.style.left = parseInt(window.getComputedStyle(switcher).width) - parseInt(window.getComputedStyle(jack).width) + "px";else jack.style.left = parseInt(switcher.currentStyle["width"]) - parseInt(jack.currentStyle["width"]) + "px";if (this.options.color) this.colorize();this.setSpeed();
      } else {
        jack.style.left = 0;this.element.checked = false;this.switcher.style.boxShadow = "inset 0 0 0 0 " + this.options.secondaryColor;this.switcher.style.borderColor = this.options.secondaryColor;this.switcher.style.backgroundColor = this.options.secondaryColor !== defaults.secondaryColor ? this.options.secondaryColor : "#fff";this.jack.style.backgroundColor = this.options.jackSecondaryColor !== this.options.jackColor ? this.options.jackSecondaryColor : this.options.jackColor;this.setSpeed();
      }
    };Switchery.prototype.setSpeed = function () {
      var switcherProp = {},
          jackProp = { "background-color": this.options.speed, left: this.options.speed.replace(/[a-z]/, "") / 2 + "s" };if (this.isChecked()) {
        switcherProp = { border: this.options.speed, "box-shadow": this.options.speed, "background-color": this.options.speed.replace(/[a-z]/, "") * 3 + "s" };
      } else {
        switcherProp = { border: this.options.speed, "box-shadow": this.options.speed };
      }transitionize(this.switcher, switcherProp);transitionize(this.jack, jackProp);
    };Switchery.prototype.setSize = function () {
      var small = "switchery-small",
          normal = "switchery-default",
          large = "switchery-large";switch (this.options.size) {case "small":
          classes(this.switcher).add(small);break;case "large":
          classes(this.switcher).add(large);break;default:
          classes(this.switcher).add(normal);break;}
    };Switchery.prototype.colorize = function () {
      var switcherHeight = this.switcher.offsetHeight / 2;this.switcher.style.backgroundColor = this.options.color;this.switcher.style.borderColor = this.options.color;this.switcher.style.boxShadow = "inset 0 0 0 " + switcherHeight + "px " + this.options.color;this.jack.style.backgroundColor = this.options.jackColor;
    };Switchery.prototype.handleOnchange = function (state) {
      if (document.dispatchEvent) {
        var event = document.createEvent("HTMLEvents");event.initEvent("change", true, true);this.element.dispatchEvent(event);
      } else {
        this.element.fireEvent("onchange");
      }
    };Switchery.prototype.handleChange = function () {
      var self = this,
          el = this.element;if (el.addEventListener) {
        el.addEventListener("change", function () {
          self.setPosition();
        });
      } else {
        el.attachEvent("onchange", function () {
          self.setPosition();
        });
      }
    };Switchery.prototype.handleClick = function () {
      var switcher = this.switcher;fastclick(switcher);this.events.bind("click", "bindClick");
    };Switchery.prototype.bindClick = function () {
      var parent = this.element.parentNode.tagName.toLowerCase(),
          labelParent = parent === "label" ? false : true;this.setPosition(labelParent);this.handleOnchange(this.element.checked);
    };Switchery.prototype.markAsSwitched = function () {
      this.element.setAttribute("data-switchery", true);
    };Switchery.prototype.markedAsSwitched = function () {
      return this.element.getAttribute("data-switchery");
    };Switchery.prototype.init = function () {
      this.hide();this.show();this.setSize();this.setPosition();this.markAsSwitched();this.handleChange();this.handleClick();
    };Switchery.prototype.isChecked = function () {
      return this.element.checked;
    };Switchery.prototype.isDisabled = function () {
      return this.options.disabled || this.element.disabled || this.element.readOnly;
    };Switchery.prototype.destroy = function () {
      this.events.unbind();
    };Switchery.prototype.enable = function () {
      if (!this.options.disabled) return;if (this.options.disabled) this.options.disabled = false;if (this.element.disabled) this.element.disabled = false;if (this.element.readOnly) this.element.readOnly = false;this.switcher.style.opacity = 1;this.events.bind("click", "bindClick");
    };Switchery.prototype.disable = function () {
      if (this.options.disabled) return;if (!this.options.disabled) this.options.disabled = true;if (!this.element.disabled) this.element.disabled = true;if (!this.element.readOnly) this.element.readOnly = true;this.switcher.style.opacity = this.options.disabledOpacity;this.destroy();
    };
  });if (( false ? 'undefined' : _typeof(exports)) == "object") {
    module.exports = require("switchery");
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return require("switchery");
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    (this || window)["Switchery"] = require("switchery");
  }
})();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (C, n) {
  "object" === ( false ? "undefined" : _typeof(exports)) ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : n(C);
})(this, function (C) {
  function n(a) {
    this._targetElement = a;this._introItems = [];this._options = { nextLabel: "Next \x26rarr;", prevLabel: "\x26larr; Back", skipLabel: "Skip", doneLabel: "Done", hidePrev: !1, hideNext: !1, tooltipPosition: "bottom", tooltipClass: "", highlightClass: "", exitOnEsc: !0, exitOnOverlayClick: !0, showStepNumbers: !0, keyboardNavigation: !0, showButtons: !0, showBullets: !0, showProgress: !1,
      scrollToElement: !0, scrollTo: "element", scrollPadding: 30, overlayOpacity: .8, positionPrecedence: ["bottom", "top", "right", "left"], disableInteraction: !1, hintPosition: "top-middle", hintButtonLabel: "Got it", hintAnimation: !0 };
  }function Z(a) {
    var b,
        c = [],
        d = this;if (this._options.steps) {
      var f = 0;for (b = this._options.steps.length; f < b; f++) {
        var e = y(this._options.steps[f]);e.step = c.length + 1;"string" === typeof e.element && (e.element = document.querySelector(e.element));if ("undefined" === typeof e.element || null == e.element) {
          var g = document.querySelector(".introjsFloatingElement");null == g && (g = document.createElement("div"), g.className = "introjsFloatingElement", document.body.appendChild(g));e.element = g;e.position = "floating";
        }e.scrollTo = e.scrollTo || this._options.scrollTo;"undefined" === typeof e.disableInteraction && (e.disableInteraction = this._options.disableInteraction);null != e.element && c.push(e);
      }
    } else {
      g = a.querySelectorAll("*[data-intro]");if (1 > g.length) return !1;for (var f = 0, r = g.length; f < r; f++) {
        if (e = g[f], "none" != e.style.display) {
          var q = parseInt(e.getAttribute("data-step"), 10);b = this._options.disableInteraction;"undefined" != typeof e.getAttribute("data-disable-interaction") && (b = !!e.getAttribute("data-disable-interaction"));0 < q && (c[q - 1] = { element: e, intro: e.getAttribute("data-intro"), step: parseInt(e.getAttribute("data-step"), 10), tooltipClass: e.getAttribute("data-tooltipClass"), highlightClass: e.getAttribute("data-highlightClass"), position: e.getAttribute("data-position") || this._options.tooltipPosition, scrollTo: e.getAttribute("data-scrollTo") || this._options.scrollTo, disableInteraction: b });
        }
      }f = q = 0;for (r = g.length; f < r; f++) {
        if (e = g[f], null == e.getAttribute("data-step")) {
          for (; "undefined" != typeof c[q];) {
            q++;
          }b = this._options.disableInteraction;"undefined" != typeof e.getAttribute("data-disable-interaction") && (b = !!e.getAttribute("data-disable-interaction"));c[q] = { element: e, intro: e.getAttribute("data-intro"), step: q + 1, tooltipClass: e.getAttribute("data-tooltipClass"), highlightClass: e.getAttribute("data-highlightClass"), position: e.getAttribute("data-position") || this._options.tooltipPosition, scrollTo: e.getAttribute("data-scrollTo") || this._options.scrollTo, disableInteraction: b };
        }
      }
    }f = [];for (b = 0; b < c.length; b++) {
      c[b] && f.push(c[b]);
    }c = f;c.sort(function (a, b) {
      return a.step - b.step;
    });d._introItems = c;aa.call(d, a) && (x.call(d), a.querySelector(".introjs-skipbutton"), a.querySelector(".introjs-nextbutton"), d._onKeyDown = function (b) {
      if (27 === b.keyCode && 1 == d._options.exitOnEsc) z.call(d, a);else if (37 === b.keyCode) E.call(d);else if (39 === b.keyCode) x.call(d);else if (13 === b.keyCode) {
        var c = b.target || b.srcElement;c && 0 < c.className.indexOf("introjs-prevbutton") ? E.call(d) : c && 0 < c.className.indexOf("introjs-skipbutton") ? (d._introItems.length - 1 == d._currentStep && "function" === typeof d._introCompleteCallback && d._introCompleteCallback.call(d), z.call(d, a)) : x.call(d);b.preventDefault ? b.preventDefault() : b.returnValue = !1;
      }
    }, d._onResize = function (a) {
      d.refresh.call(d);
    }, window.addEventListener ? (this._options.keyboardNavigation && window.addEventListener("keydown", d._onKeyDown, !0), window.addEventListener("resize", d._onResize, !0)) : document.attachEvent && (this._options.keyboardNavigation && document.attachEvent("onkeydown", d._onKeyDown), document.attachEvent("onresize", d._onResize)));return !1;
  }function y(a) {
    if (null == a || "object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) || "undefined" != typeof a.nodeType) return a;var b = {},
        c;for (c in a) {
      b[c] = "undefined" != typeof jQuery && a[c] instanceof jQuery ? a[c] : y(a[c]);
    }return b;
  }function x() {
    var a;this._direction = "forward";if ("undefined" !== typeof this._currentStepNumber) for (var b = 0, c = this._introItems.length; b < c; b++) {
      this._introItems[b].step === this._currentStepNumber && (this._currentStep = b - 1, this._currentStepNumber = void 0);
    }"undefined" === typeof this._currentStep ? this._currentStep = 0 : ++this._currentStep;"undefined" !== typeof this._introBeforeChangeCallback && (a = this._introBeforeChangeCallback.call(this));if (!1 === a) return --this._currentStep, !1;this._introItems.length <= this._currentStep ? ("function" === typeof this._introCompleteCallback && this._introCompleteCallback.call(this), z.call(this, this._targetElement)) : O.call(this, this._introItems[this._currentStep]);
  }
  function E() {
    var a;this._direction = "backward";if (0 === this._currentStep) return !1;--this._currentStep;"undefined" !== typeof this._introBeforeChangeCallback && (a = this._introBeforeChangeCallback.call(this));if (!1 === a) return ++this._currentStep, !1;O.call(this, this._introItems[this._currentStep]);
  }function z(a, b) {
    var c = !0;void 0 != this._introBeforeExitCallback && (c = this._introBeforeExitCallback.call(self));if (b || !1 !== c) {
      if ((c = a.querySelectorAll(".introjs-overlay")) && 0 < c.length) for (b = c.length - 1; 0 <= b; b--) {
        var d = c[b];d.style.opacity = 0;setTimeout(function () {
          this.parentNode && this.parentNode.removeChild(this);
        }.bind(d), 500);
      }(b = a.querySelector(".introjs-helperLayer")) && b.parentNode.removeChild(b);(b = a.querySelector(".introjs-tooltipReferenceLayer")) && b.parentNode.removeChild(b);(a = a.querySelector(".introjs-disableInteraction")) && a.parentNode.removeChild(a);(a = document.querySelector(".introjsFloatingElement")) && a.parentNode.removeChild(a);P();if ((a = document.querySelectorAll(".introjs-fixParent")) && 0 < a.length) for (b = a.length - 1; 0 <= b; b--) {
        a[b].className = a[b].className.replace(/introjs-fixParent/g, "").replace(/^\s+|\s+$/g, "");
      }window.removeEventListener ? window.removeEventListener("keydown", this._onKeyDown, !0) : document.detachEvent && document.detachEvent("onkeydown", this._onKeyDown);void 0 != this._introExitCallback && this._introExitCallback.call(self);this._currentStep = void 0;
    }
  }function F(a, b, c, d, f) {
    f = f || !1;b.style.top = null;b.style.right = null;b.style.bottom = null;b.style.left = null;b.style.marginLeft = null;b.style.marginTop = null;c.style.display = "inherit";"undefined" != typeof d && null != d && (d.style.top = null, d.style.left = null);if (this._introItems[this._currentStep]) {
      var e = this._introItems[this._currentStep];e = "string" === typeof e.tooltipClass ? e.tooltipClass : this._options.tooltipClass;b.className = ("introjs-tooltip " + e).replace(/^\s+|\s+$/g, "");var g = this._introItems[this._currentStep].position;"floating" != g && (g = "auto" === g ? Q.call(this, a, b) : Q.call(this, a, b, g));e = u(a);a = u(b);var r = H();switch (g) {case "top":
          c.className = "introjs-arrow bottom";
          I(e, f ? 0 : 15, a, r, b);b.style.bottom = e.height + 20 + "px";break;case "right":
          b.style.left = e.width + 20 + "px";e.top + a.height > r.height ? (c.className = "introjs-arrow left-bottom", b.style.top = "-" + (a.height - e.height - 20) + "px") : c.className = "introjs-arrow left";break;case "left":
          f || 1 != this._options.showStepNumbers || (b.style.top = "15px");e.top + a.height > r.height ? (b.style.top = "-" + (a.height - e.height - 20) + "px", c.className = "introjs-arrow right-bottom") : c.className = "introjs-arrow right";b.style.right = e.width + 20 + "px";break;case "floating":
          c.style.display = "none";b.style.left = "50%";b.style.top = "50%";b.style.marginLeft = "-" + a.width / 2 + "px";b.style.marginTop = "-" + a.height / 2 + "px";"undefined" != typeof d && null != d && (d.style.left = "-" + (a.width / 2 + 18) + "px", d.style.top = "-" + (a.height / 2 + 18) + "px");break;case "bottom-right-aligned":
          c.className = "introjs-arrow top-right";R(e, 0, a, b);b.style.top = e.height + 20 + "px";break;case "bottom-middle-aligned":
          c.className = "introjs-arrow top-middle";c = e.width / 2 - a.width / 2;f && (c += 5);R(e, c, a, b) && (b.style.right = null, I(e, c, a, r, b));b.style.top = e.height + 20 + "px";break;default:
          c.className = "introjs-arrow top", I(e, 0, a, r, b), b.style.top = e.height + 20 + "px";}
    }
  }function I(a, b, c, d, f) {
    if (a.left + b + c.width > d.width) return f.style.left = d.width - c.width - a.left + "px", !1;f.style.left = b + "px";return !0;
  }function R(a, b, c, d) {
    if (0 > a.left + a.width - b - c.width) return d.style.left = -a.left + "px", !1;d.style.right = b + "px";return !0;
  }function Q(a, b, c) {
    var d = this._options.positionPrecedence.slice(),
        f = H(),
        e = u(b).height + 10;b = u(b).width + 20;a = u(a);var g = "floating";a.left + b > f.width || 0 > a.left + a.width / 2 - b ? (t(d, "bottom"), t(d, "top")) : (a.height + a.top + e > f.height && t(d, "bottom"), 0 > a.top - e && t(d, "top"));a.width + a.left + b > f.width && t(d, "right");0 > a.left - b && t(d, "left");0 < d.length && (g = d[0]);c && "auto" != c && -1 < d.indexOf(c) && (g = c);return g;
  }function t(a, b) {
    -1 < a.indexOf(b) && a.splice(a.indexOf(b), 1);
  }function v(a) {
    if (a && this._introItems[this._currentStep]) {
      var b = this._introItems[this._currentStep],
          c = u(b.element),
          d = 10;J(b.element) ? a.className += " introjs-fixedTooltip" : a.className = a.className.replace(" introjs-fixedTooltip", "");"floating" == b.position && (d = 0);a.setAttribute("style", "width: " + (c.width + d) + "px; height:" + (c.height + d) + "px; top:" + (c.top - 5) + "px;left: " + (c.left - 5) + "px;");
    }
  }function ba() {
    var a = document.querySelector(".introjs-disableInteraction");null === a && (a = document.createElement("div"), a.className = "introjs-disableInteraction", this._targetElement.appendChild(a));v.call(this, a);
  }function D(a) {
    a.setAttribute("role", "button");a.tabIndex = 0;
  }function O(a) {
    "undefined" !== typeof this._introChangeCallback && this._introChangeCallback.call(this, a.element);var b = this,
        c = document.querySelector(".introjs-helperLayer"),
        d = document.querySelector(".introjs-tooltipReferenceLayer"),
        f = "introjs-helperLayer";u(a.element);"string" === typeof a.highlightClass && (f += " " + a.highlightClass);"string" === typeof this._options.highlightClass && (f += " " + this._options.highlightClass);if (null != c) {
      var e = d.querySelector(".introjs-helperNumberLayer"),
          g = d.querySelector(".introjs-tooltiptext"),
          r = d.querySelector(".introjs-arrow"),
          q = d.querySelector(".introjs-tooltip");var l = d.querySelector(".introjs-skipbutton");var h = d.querySelector(".introjs-prevbutton");var k = d.querySelector(".introjs-nextbutton");c.className = f;q.style.opacity = 0;q.style.display = "none";if (null != e) {
        var p = this._introItems[0 <= a.step - 2 ? a.step - 2 : 0];if (null != p && "forward" == this._direction && "floating" == p.position || "backward" == this._direction && "floating" == a.position) e.style.opacity = 0;
      }v.call(b, c);v.call(b, d);if ((p = document.querySelectorAll(".introjs-fixParent")) && 0 < p.length) for (f = p.length - 1; 0 <= f; f--) {
        p[f].className = p[f].className.replace(/introjs-fixParent/g, "").replace(/^\s+|\s+$/g, "");
      }P();b._lastShowElementTimer && clearTimeout(b._lastShowElementTimer);b._lastShowElementTimer = setTimeout(function () {
        null != e && (e.innerHTML = a.step);g.innerHTML = a.intro;q.style.display = "block";F.call(b, a.element, q, r, e);b._options.showBullets && (d.querySelector(".introjs-bullets li \x3e a.active").className = "", d.querySelector('.introjs-bullets li \x3e a[data-stepnumber\x3d"' + a.step + '"]').className = "active");d.querySelector(".introjs-progress .introjs-progressbar").setAttribute("style", "width:" + S.call(b) + "%;");q.style.opacity = 1;e && (e.style.opacity = 1);"undefined" !== typeof l && null != l && /introjs-donebutton/gi.test(l.className) ? l.focus() : "undefined" !== typeof k && null != k && k.focus();T.call(b, a.scrollTo, a, g);
      }, 350);
    } else {
      var n = document.createElement("div");h = document.createElement("div");var c = document.createElement("div"),
          m = document.createElement("div"),
          t = document.createElement("div"),
          w = document.createElement("div"),
          G = document.createElement("div"),
          A = document.createElement("div");n.className = f;h.className = "introjs-tooltipReferenceLayer";v.call(b, n);v.call(b, h);this._targetElement.appendChild(n);this._targetElement.appendChild(h);c.className = "introjs-arrow";t.className = "introjs-tooltiptext";t.innerHTML = a.intro;w.className = "introjs-bullets";!1 === this._options.showBullets && (w.style.display = "none");for (var n = document.createElement("ul"), f = 0, C = this._introItems.length; f < C; f++) {
        var y = document.createElement("li"),
            B = document.createElement("a");B.onclick = function () {
          b.goToStep(this.getAttribute("data-stepnumber"));
        };
        f === a.step - 1 && (B.className = "active");D(B);B.innerHTML = "\x26nbsp;";B.setAttribute("data-stepnumber", this._introItems[f].step);y.appendChild(B);n.appendChild(y);
      }w.appendChild(n);G.className = "introjs-progress";!1 === this._options.showProgress && (G.style.display = "none");f = document.createElement("div");f.className = "introjs-progressbar";f.setAttribute("style", "width:" + S.call(this) + "%;");G.appendChild(f);A.className = "introjs-tooltipbuttons";!1 === this._options.showButtons && (A.style.display = "none");m.className = "introjs-tooltip";m.appendChild(t);m.appendChild(w);m.appendChild(G);1 == this._options.showStepNumbers && (p = document.createElement("span"), p.className = "introjs-helperNumberLayer", p.innerHTML = a.step, h.appendChild(p));m.appendChild(c);h.appendChild(m);k = document.createElement("a");k.onclick = function () {
        b._introItems.length - 1 != b._currentStep && x.call(b);
      };D(k);k.innerHTML = this._options.nextLabel;h = document.createElement("a");h.onclick = function () {
        0 != b._currentStep && E.call(b);
      };D(h);h.innerHTML = this._options.prevLabel;
      l = document.createElement("a");l.className = "introjs-button introjs-skipbutton";D(l);l.innerHTML = this._options.skipLabel;l.onclick = function () {
        b._introItems.length - 1 == b._currentStep && "function" === typeof b._introCompleteCallback && b._introCompleteCallback.call(b);z.call(b, b._targetElement);
      };A.appendChild(l);1 < this._introItems.length && (A.appendChild(h), A.appendChild(k));m.appendChild(A);F.call(b, a.element, m, c, p);T.call(this, a.scrollTo, a, m);
    }(p = b._targetElement.querySelector(".introjs-disableInteraction")) && p.parentNode.removeChild(p);a.disableInteraction && ba.call(b);"undefined" !== typeof k && null != k && k.removeAttribute("tabIndex");"undefined" !== typeof h && null != h && h.removeAttribute("tabIndex");0 == this._currentStep && 1 < this._introItems.length ? ("undefined" !== typeof l && null != l && (l.className = "introjs-button introjs-skipbutton"), "undefined" !== typeof k && null != k && (k.className = "introjs-button introjs-nextbutton"), 1 == this._options.hidePrev ? ("undefined" !== typeof h && null != h && (h.className = "introjs-button introjs-prevbutton introjs-hidden"), "undefined" !== typeof k && null != k && (k.className += " introjs-fullbutton")) : "undefined" !== typeof h && null != h && (h.className = "introjs-button introjs-prevbutton introjs-disabled"), "undefined" !== typeof h && null != h && (h.tabIndex = "-1"), "undefined" !== typeof l && null != l && (l.innerHTML = this._options.skipLabel)) : this._introItems.length - 1 == this._currentStep || 1 == this._introItems.length ? ("undefined" !== typeof l && null != l && (l.innerHTML = this._options.doneLabel, l.className += " introjs-donebutton"), "undefined" !== typeof h && null != h && (h.className = "introjs-button introjs-prevbutton"), 1 == this._options.hideNext ? ("undefined" !== typeof k && null != k && (k.className = "introjs-button introjs-nextbutton introjs-hidden"), "undefined" !== typeof h && null != h && (h.className += " introjs-fullbutton")) : "undefined" !== typeof k && null != k && (k.className = "introjs-button introjs-nextbutton introjs-disabled"), "undefined" !== typeof k && null != k && (k.tabIndex = "-1")) : ("undefined" !== typeof l && null != l && (l.className = "introjs-button introjs-skipbutton"), "undefined" !== typeof h && null != h && (h.className = "introjs-button introjs-prevbutton"), "undefined" !== typeof k && null != k && (k.className = "introjs-button introjs-nextbutton"), "undefined" !== typeof l && null != l && (l.innerHTML = this._options.skipLabel));"undefined" !== typeof k && null != k && k.focus();ca(a);"undefined" !== typeof this._introAfterChangeCallback && this._introAfterChangeCallback.call(this, a.element);
  }function T(a, b, c) {
    this._options.scrollToElement && (a = "tooltip" === a ? c.getBoundingClientRect() : b.element.getBoundingClientRect(), c = b.element.getBoundingClientRect(), 0 <= c.top && 0 <= c.left && c.bottom + 80 <= window.innerHeight && c.right <= window.innerWidth || (c = H().height, 0 > a.bottom - (a.bottom - a.top) || b.element.clientHeight > c ? window.scrollBy(0, a.top - (c / 2 - a.height / 2) - this._options.scrollPadding) : window.scrollBy(0, a.top - (c / 2 - a.height / 2) + this._options.scrollPadding)));
  }function P() {
    for (var a = document.querySelectorAll(".introjs-showElement"), b = 0, c = a.length; b < c; b++) {
      var d = a[b],
          f = /introjs-[a-zA-Z]+/g;if (d instanceof SVGElement) {
        var e = d.getAttribute("class") || "";d.setAttribute("class", e.replace(f, "").replace(/^\s+|\s+$/g, ""));
      } else d.className = d.className.replace(f, "").replace(/^\s+|\s+$/g, "");
    }
  }function ca(a) {
    var b;if (a.element instanceof SVGElement) for (b = a.element.parentNode; null != a.element.parentNode && b.tagName && "body" !== b.tagName.toLowerCase();) {
      "svg" === b.tagName.toLowerCase() && K(b, "introjs-showElement introjs-relativePosition"), b = b.parentNode;
    }K(a.element, "introjs-showElement");b = m(a.element, "position");"absolute" !== b && "relative" !== b && "fixed" !== b && K(a.element, "introjs-relativePosition");
    for (b = a.element.parentNode; null != b && b.tagName && "body" !== b.tagName.toLowerCase();) {
      a = m(b, "z-index");var c = parseFloat(m(b, "opacity")),
          d = m(b, "transform") || m(b, "-webkit-transform") || m(b, "-moz-transform") || m(b, "-ms-transform") || m(b, "-o-transform");if (/[0-9]+/.test(a) || 1 > c || "none" !== d && void 0 !== d) b.className += " introjs-fixParent";b = b.parentNode;
    }
  }function K(a, b) {
    if (a instanceof SVGElement) {
      var c = a.getAttribute("class") || "";a.setAttribute("class", c + " " + b);
    } else a.className += " " + b;
  }function m(a, b) {
    var c = "";
    a.currentStyle ? c = a.currentStyle[b] : document.defaultView && document.defaultView.getComputedStyle && (c = document.defaultView.getComputedStyle(a, null).getPropertyValue(b));return c && c.toLowerCase ? c.toLowerCase() : c;
  }function J(a) {
    var b = a.parentNode;return b && "HTML" !== b.nodeName ? "fixed" == m(a, "position") ? !0 : J(b) : !1;
  }function H() {
    if (void 0 != window.innerWidth) return { width: window.innerWidth, height: window.innerHeight };var a = document.documentElement;return { width: a.clientWidth, height: a.clientHeight };
  }function aa(a) {
    var b = document.createElement("div"),
        c = "",
        d = this;b.className = "introjs-overlay";if (a.tagName && "body" !== a.tagName.toLowerCase()) {
      var f = u(a);f && (c += "width: " + f.width + "px; height:" + f.height + "px; top:" + f.top + "px;left: " + f.left + "px;", b.setAttribute("style", c));
    } else c += "top: 0;bottom: 0; left: 0;right: 0;position: fixed;", b.setAttribute("style", c);a.appendChild(b);b.onclick = function () {
      1 == d._options.exitOnOverlayClick && z.call(d, a);
    };setTimeout(function () {
      c += "opacity: " + d._options.overlayOpacity.toString() + ";";b.setAttribute("style", c);
    }, 10);return !0;
  }function w() {
    var a = this._targetElement.querySelector(".introjs-hintReference");if (a) {
      var b = a.getAttribute("data-step");a.parentNode.removeChild(a);return b;
    }
  }function U(a) {
    this._introItems = [];if (this._options.hints) {
      a = 0;for (var b = this._options.hints.length; a < b; a++) {
        var c = y(this._options.hints[a]);"string" === typeof c.element && (c.element = document.querySelector(c.element));c.hintPosition = c.hintPosition || this._options.hintPosition;c.hintAnimation = c.hintAnimation || this._options.hintAnimation;
        null != c.element && this._introItems.push(c);
      }
    } else {
      c = a.querySelectorAll("*[data-hint]");if (1 > c.length) return !1;a = 0;for (b = c.length; a < b; a++) {
        var d = c[a],
            f = d.getAttribute("data-hintAnimation"),
            f = f ? "true" == f : this._options.hintAnimation;this._introItems.push({ element: d, hint: d.getAttribute("data-hint"), hintPosition: d.getAttribute("data-hintPosition") || this._options.hintPosition, hintAnimation: f, tooltipClass: d.getAttribute("data-tooltipClass"), position: d.getAttribute("data-position") || this._options.tooltipPosition });
      }
    }da.call(this);
    document.addEventListener ? (document.addEventListener("click", w.bind(this), !1), window.addEventListener("resize", L.bind(this), !0)) : document.attachEvent && (document.attachEvent("onclick", w.bind(this)), document.attachEvent("onresize", L.bind(this)));
  }function L() {
    for (var a = 0, b = this._introItems.length; a < b; a++) {
      var c = this._introItems[a];"undefined" != typeof c.targetElement && V.call(this, c.hintPosition, c.element, c.targetElement);
    }
  }function M(a) {
    w.call(this);var b = this._targetElement.querySelector('.introjs-hint[data-step\x3d"' + a + '"]');b && (b.className += " introjs-hidehint");"undefined" !== typeof this._hintCloseCallback && this._hintCloseCallback.call(this, a);
  }function W(a) {
    if (a = this._targetElement.querySelector('.introjs-hint[data-step\x3d"' + a + '"]')) a.className = a.className.replace(/introjs\-hidehint/g, "");
  }function X(a) {
    (a = this._targetElement.querySelector('.introjs-hint[data-step\x3d"' + a + '"]')) && a.parentNode.removeChild(a);
  }function da() {
    var a = this;var b = document.querySelector(".introjs-hints");null == b && (b = document.createElement("div"), b.className = "introjs-hints");for (var c = 0, d = this._introItems.length; c < d; c++) {
      var f = this._introItems[c];if (!document.querySelector('.introjs-hint[data-step\x3d"' + c + '"]')) {
        var e = document.createElement("a");D(e);(function (b, c, d) {
          b.onclick = function (b) {
            b = b ? b : window.event;b.stopPropagation && b.stopPropagation();null != b.cancelBubble && (b.cancelBubble = !0);Y.call(a, d);
          };
        })(e, f, c);e.className = "introjs-hint";f.hintAnimation || (e.className += " introjs-hint-no-anim");J(f.element) && (e.className += " introjs-fixedhint");
        var g = document.createElement("div");g.className = "introjs-hint-dot";var m = document.createElement("div");m.className = "introjs-hint-pulse";e.appendChild(g);e.appendChild(m);e.setAttribute("data-step", c);f.targetElement = f.element;f.element = e;V.call(this, f.hintPosition, e, f.targetElement);b.appendChild(e);
      }
    }document.body.appendChild(b);"undefined" !== typeof this._hintsAddedCallback && this._hintsAddedCallback.call(this);
  }function V(a, b, c) {
    c = u.call(this, c);switch (a) {default:case "top-left":
        b.style.left = c.left + "px";b.style.top = c.top + "px";break;case "top-right":
        b.style.left = c.left + c.width - 20 + "px";b.style.top = c.top + "px";break;case "bottom-left":
        b.style.left = c.left + "px";b.style.top = c.top + c.height - 20 + "px";break;case "bottom-right":
        b.style.left = c.left + c.width - 20 + "px";b.style.top = c.top + c.height - 20 + "px";break;case "middle-left":
        b.style.left = c.left + "px";b.style.top = c.top + (c.height - 20) / 2 + "px";break;case "middle-right":
        b.style.left = c.left + c.width - 20 + "px";b.style.top = c.top + (c.height - 20) / 2 + "px";break;case "middle-middle":
        b.style.left = c.left + (c.width - 20) / 2 + "px";b.style.top = c.top + (c.height - 20) / 2 + "px";break;case "bottom-middle":
        b.style.left = c.left + (c.width - 20) / 2 + "px";b.style.top = c.top + c.height - 20 + "px";break;case "top-middle":
        b.style.left = c.left + (c.width - 20) / 2 + "px", b.style.top = c.top + "px";}
  }function Y(a) {
    var b = document.querySelector('.introjs-hint[data-step\x3d"' + a + '"]'),
        c = this._introItems[a];"undefined" !== typeof this._hintClickCallback && this._hintClickCallback.call(this, b, c, a);var d = w.call(this);if (parseInt(d, 10) != a) {
      var d = document.createElement("div"),
          f = document.createElement("div"),
          e = document.createElement("div"),
          g = document.createElement("div");d.className = "introjs-tooltip";d.onclick = function (a) {
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
      };f.className = "introjs-tooltiptext";var m = document.createElement("p");m.innerHTML = c.hint;c = document.createElement("a");c.className = "introjs-button";c.innerHTML = this._options.hintButtonLabel;c.onclick = M.bind(this, a);f.appendChild(m);f.appendChild(c);e.className = "introjs-arrow";d.appendChild(e);d.appendChild(f);
      this._currentStep = b.getAttribute("data-step");g.className = "introjs-tooltipReferenceLayer introjs-hintReference";g.setAttribute("data-step", b.getAttribute("data-step"));v.call(this, g);g.appendChild(d);document.body.appendChild(g);F.call(this, b, d, e, null, !0);
    }
  }function u(a) {
    var b = {},
        c = document.body,
        d = document.documentElement,
        f = window.pageYOffset || d.scrollTop || c.scrollTop,
        c = window.pageXOffset || d.scrollLeft || c.scrollLeft;if (a instanceof SVGElement) a = a.getBoundingClientRect(), b.top = a.top + f, b.width = a.width, b.height = a.height, b.left = a.left + c;else {
      b.width = a.offsetWidth;b.height = a.offsetHeight;for (c = f = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);) {
        f += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
      }b.top = c;b.left = f;
    }return b;
  }function S() {
    return parseInt(this._currentStep + 1, 10) / this._introItems.length * 100;
  }var N = function N(a) {
    if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) return new n(a);if ("string" === typeof a) {
      if (a = document.querySelector(a)) return new n(a);throw Error("There is no element with given selector.");
    }return new n(document.body);
  };
  N.version = "2.8.0-alpha.1";N.fn = n.prototype = { clone: function clone() {
      return new n(this);
    }, setOption: function setOption(a, b) {
      this._options[a] = b;return this;
    }, setOptions: function setOptions(a) {
      var b = this._options,
          c = {},
          d;for (d in b) {
        c[d] = b[d];
      }for (d in a) {
        c[d] = a[d];
      }this._options = c;return this;
    }, start: function start() {
      Z.call(this, this._targetElement);return this;
    }, goToStep: function goToStep(a) {
      this._currentStep = a - 2;"undefined" !== typeof this._introItems && x.call(this);return this;
    }, addStep: function addStep(a) {
      this._options.steps || (this._options.steps = []);this._options.steps.push(a);
      return this;
    }, addSteps: function addSteps(a) {
      if (a.length) {
        for (var b = 0; b < a.length; b++) {
          this.addStep(a[b]);
        }return this;
      }
    }, goToStepNumber: function goToStepNumber(a) {
      this._currentStepNumber = a;"undefined" !== typeof this._introItems && x.call(this);return this;
    }, nextStep: function nextStep() {
      x.call(this);return this;
    }, previousStep: function previousStep() {
      E.call(this);return this;
    }, exit: function exit(a) {
      z.call(this, this._targetElement, a);return this;
    }, refresh: function refresh() {
      v.call(this, document.querySelector(".introjs-helperLayer"));v.call(this, document.querySelector(".introjs-tooltipReferenceLayer"));
      v.call(this, document.querySelector(".introjs-disableInteraction"));if (void 0 !== this._currentStep && null !== this._currentStep) {
        var a = document.querySelector(".introjs-helperNumberLayer"),
            b = document.querySelector(".introjs-arrow"),
            c = document.querySelector(".introjs-tooltip");F.call(this, this._introItems[this._currentStep].element, c, b, a);
      }L.call(this);return this;
    }, onbeforechange: function onbeforechange(a) {
      if ("function" === typeof a) this._introBeforeChangeCallback = a;else throw Error("Provided callback for onbeforechange was not a function");
      return this;
    }, onchange: function onchange(a) {
      if ("function" === typeof a) this._introChangeCallback = a;else throw Error("Provided callback for onchange was not a function.");return this;
    }, onafterchange: function onafterchange(a) {
      if ("function" === typeof a) this._introAfterChangeCallback = a;else throw Error("Provided callback for onafterchange was not a function");return this;
    }, oncomplete: function oncomplete(a) {
      if ("function" === typeof a) this._introCompleteCallback = a;else throw Error("Provided callback for oncomplete was not a function.");return this;
    },
    onhintsadded: function onhintsadded(a) {
      if ("function" === typeof a) this._hintsAddedCallback = a;else throw Error("Provided callback for onhintsadded was not a function.");return this;
    }, onhintclick: function onhintclick(a) {
      if ("function" === typeof a) this._hintClickCallback = a;else throw Error("Provided callback for onhintclick was not a function.");return this;
    }, onhintclose: function onhintclose(a) {
      if ("function" === typeof a) this._hintCloseCallback = a;else throw Error("Provided callback for onhintclose was not a function.");return this;
    }, onexit: function onexit(a) {
      if ("function" === typeof a) this._introExitCallback = a;else throw Error("Provided callback for onexit was not a function.");return this;
    }, onbeforeexit: function onbeforeexit(a) {
      if ("function" === typeof a) this._introBeforeExitCallback = a;else throw Error("Provided callback for onbeforeexit was not a function.");return this;
    }, addHints: function addHints() {
      U.call(this, this._targetElement);return this;
    }, hideHint: function hideHint(a) {
      M.call(this, a);return this;
    }, hideHints: function hideHints() {
      var a = this._targetElement.querySelectorAll(".introjs-hint");if (a && 0 < a.length) for (var b = 0; b < a.length; b++) {
        M.call(this, a[b].getAttribute("data-step"));
      }return this;
    }, showHint: function showHint(a) {
      W.call(this, a);return this;
    }, showHints: function showHints() {
      var a = this._targetElement.querySelectorAll(".introjs-hint");if (a && 0 < a.length) for (var b = 0; b < a.length; b++) {
        W.call(this, a[b].getAttribute("data-step"));
      } else U.call(this, this._targetElement);return this;
    }, removeHints: function removeHints() {
      var a = this._targetElement.querySelectorAll(".introjs-hint");if (a && 0 < a.length) for (var b = 0; b < a.length; b++) {
        X.call(this, a[b].getAttribute("data-step"));
      }return this;
    }, removeHint: function removeHint(a) {
      X.call(this, a);return this;
    }, showHintDialog: function showHintDialog(a) {
      Y.call(this, a);return this;
    } };return C.introJs = N;
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*!
* screenfull
* v3.0.0 - 2015-11-24
* (c) Sindre Sorhus; MIT License
*/
!function () {
  "use strict";
  var a = "undefined" != typeof module && module.exports,
      b = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
      c = function () {
    for (var a, b, c = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], d = 0, e = c.length, f = {}; e > d; d++) {
      if (a = c[d], a && a[1] in document) {
        for (d = 0, b = a.length; b > d; d++) {
          f[c[0][d]] = a[d];
        }return f;
      }
    }return !1;
  }(),
      d = { request: function request(a) {
      var d = c.requestFullscreen;a = a || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[d]() : a[d](b && Element.ALLOW_KEYBOARD_INPUT);
    }, exit: function exit() {
      document[c.exitFullscreen]();
    }, toggle: function toggle(a) {
      this.isFullscreen ? this.exit() : this.request(a);
    }, raw: c };return c ? (Object.defineProperties(d, { isFullscreen: { get: function get() {
        return Boolean(document[c.fullscreenElement]);
      } }, element: { enumerable: !0, get: function get() {
        return document[c.fullscreenElement];
      } }, enabled: { enumerable: !0, get: function get() {
        return Boolean(document[c.fullscreenEnabled]);
      } } }), void (a ? module.exports = d : window.screenfull = d)) : void (a ? module.exports = !1 : window.screenfull = !1);
}();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
* jQuery slidePanel v0.3.5
* https://github.com/amazingSurge/jquery-slidePanel
*
* Copyright (c) amazingSurge
* Released under the LGPL-3.0 license
*/
!function (t, e) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) e(require("jquery"));else {
    var n = { exports: {} };e(t.jQuery), t.jquerySlidePanelEs = n.exports;
  }
}(this, function (t) {
  "use strict";
  function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }function n(t) {
    return !(!t || "matrix" !== t.substr(0, 6)) && t.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/);
  }function i(t) {
    "string" != typeof t && (t = JSON.stringify(t));var e = 0,
        n = void 0,
        i = void 0;if (0 === t.length) return e;for (n = 0, i = t.length; n < i; n++) {
      e = (e << 5) - e + t.charCodeAt(n), e |= 0;
    }return e;
  }function o() {
    return void 0 !== window.performance && window.performance.now ? window.performance.now() : Date.now();
  }function s(t) {
    return "string" == typeof t && -1 !== t.indexOf("%");
  }function a(t) {
    return "string" == typeof t && -1 !== t.indexOf("px");
  }function r(t, e, n, i) {
    function o(t, e) {
      return 1 - 3 * e + 3 * t;
    }function s(t, e) {
      return 3 * e - 6 * t;
    }function a(t) {
      return 3 * t;
    }function r(t, e, n) {
      return ((o(e, n) * t + s(e, n)) * t + a(e)) * t;
    }function l(t, e, n) {
      return 3 * o(e, n) * t * t + 2 * s(e, n) * t + a(e);
    }function u(e) {
      for (var i = e, o = 0; o < 4; ++o) {
        var s = l(i, t, n);if (0 === s) return i;i -= (r(i, t, n) - e) / s;
      }return i;
    }return t === e && n === i ? { css: "linear", fn: function fn(t) {
        return t;
      } } : { css: "cubic-bezier(" + t + "," + e + "," + n + "," + i + ")", fn: function fn(t) {
        return r(u(t), e, i);
      } };
  }var l = function (t) {
    return t && t.__esModule ? t : { default: t };
  }(t),
      u = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(),
      h = { version: "0.3.5" },
      d = { skin: null, classes: { base: "slidePanel", show: "slidePanel-show", loading: "slidePanel-loading", content: "slidePanel-content", dragging: "slidePanel-dragging", willClose: "slidePanel-will-close" }, closeSelector: null, template: function template(t) {
      return '<div class="' + t.classes.base + " " + t.classes.base + "-" + t.direction + '"><div class="' + t.classes.content + '"></div></div>';
    }, loading: { appendTo: "panel", template: function template(t) {
        return '<div class="' + t.classes.loading + '"></div>';
      }, showCallback: function showCallback(t) {
        this.$el.addClass(t.classes.loading + "-show");
      }, hideCallback: function hideCallback(t) {
        this.$el.removeClass(t.classes.loading + "-show");
      } }, contentFilter: function contentFilter(t, e) {
      return t;
    }, useCssTransforms3d: !0, useCssTransforms: !0, useCssTransitions: !0, dragTolerance: 150, mouseDragHandler: null, mouseDrag: !0, touchDrag: !0, pointerDrag: !0, direction: "right", duration: "500", easing: "ease", beforeLoad: $.noop, afterLoad: $.noop, beforeShow: $.noop, afterShow: $.noop, onChange: $.noop, beforeHide: $.noop, afterHide: $.noop, beforeDrag: $.noop, afterDrag: $.noop },
      c = function () {
    function t(n) {
      e(this, t);for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) {
        o[s - 1] = arguments[s];
      }this.initialize.apply(this, [n].concat(o));
    }return u(t, [{ key: "initialize", value: function value(t) {
        var e = (arguments.length <= 1 ? void 0 : arguments[1]) || {};if ("string" == typeof t) t = { url: t };else if (t && 1 === t.nodeType) {
          var n = (0, l.default)(t);t = { url: n.attr("href"), settings: n.data("settings") || {}, options: n.data() || {} };
        }return t && t.options ? t.options = l.default.extend(!0, e, t.options) : t.options = e, t.options = l.default.extend(!0, {}, d, t.options), l.default.extend(this, t), this;
      } }]), t;
  }(),
      f = {};!function (t) {
    var e = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        n = ["webkit", "Moz", "O", "ms"],
        i = (0, l.default)("<support>").get(0).style,
        o = { csstransforms: function csstransforms() {
        return Boolean(s("transform"));
      }, csstransforms3d: function csstransforms3d() {
        return Boolean(s("perspective"));
      }, csstransitions: function csstransitions() {
        return Boolean(s("transition"));
      }, cssanimations: function cssanimations() {
        return Boolean(s("animation"));
      } },
        s = function s(t, e) {
      var o = !1,
          s = t.charAt(0).toUpperCase() + t.slice(1);return void 0 !== i[t] && (o = t), o || l.default.each(n, function (t, e) {
        return void 0 === i[e + s] || (o = "-" + e.toLowerCase() + "-" + s, !1);
      }), e ? o : !!o;
    },
        a = function a(t) {
      return s(t, !0);
    };o.csstransitions() && (t.transition = new String(a("transition")), t.transition.end = e.transition.end[t.transition]), o.cssanimations() && (t.animation = new String(a("animation")), t.animation.end = e.animation.end[t.animation]), o.csstransforms() && (t.transform = new String(a("transform")), t.transform3d = o.csstransforms3d()), "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch ? t.touch = !0 : t.touch = !1, window.PointerEvent || window.MSPointerEvent ? t.pointer = !0 : t.pointer = !1, t.prefixPointerEvent = function (t) {
      return window.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t;
    };
  }(f);var p = { ease: r(.25, .1, .25, 1), linear: r(0, 0, 1, 1), "ease-in": r(.42, 0, 1, 1), "ease-out": r(0, 0, .58, 1), "ease-in-out": r(.42, 0, .58, 1) },
      g = { prepareTransition: function prepareTransition(t, e, n, i, o) {
      var s = [];e && s.push(e), n && (l.default.isNumeric(n) && (n += "ms"), s.push(n)), i ? s.push(i) : s.push(this.easing.css), o && s.push(o), t.css(f.transition, s.join(" "));
    }, do: function _do(t, e, n) {
      y.enter("animating");var i = t.options.duration,
          s = t.options.easing || "ease",
          a = this,
          r = t.makePositionStyle(e),
          u = null;for (u in r) {
        if ({}.hasOwnProperty.call(r, u)) break;
      }if (t.options.useCssTransitions && f.transition) setTimeout(function () {
        a.prepareTransition(t.$panel, u, i, s);
      }, 20), t.$panel.one(f.transition.end, function () {
        l.default.isFunction(n) && n(), t.$panel.css(f.transition, ""), y.leave("animating");
      }), setTimeout(function () {
        t.setPosition(e);
      }, 20);else {
        var h = o(),
            d = t.getPosition(),
            c = e;a._frameId = window.requestAnimationFrame(function e(i) {
          var o = (i - h) / t.options.duration;o > 1 && (o = 1), o = p[s].fn(o);var r = parseFloat(d + o * (c - d), 10);t.setPosition(r), 1 === o ? (window.cancelAnimationFrame(a._frameId), a._frameId = null, l.default.isFunction(n) && n(), y.leave("animating")) : a._frameId = window.requestAnimationFrame(e);
        });
      }
    } },
      v = function () {
    function t(n) {
      e(this, t), this.initialize(n);
    }return u(t, [{ key: "initialize", value: function value(t) {
        this._view = t, this.build();
      } }, { key: "build", value: function value() {
        if (!this._builded) {
          var t = this._view.options,
              e = t.loading.template.call(this, t);switch (this.$el = (0, l.default)(e), t.loading.appendTo) {case "panel":
              this.$el.appendTo(this._view.$panel);break;case "body":
              this.$el.appendTo("body");break;default:
              this.$el.appendTo(t.loading.appendTo);}this._builded = !0;
        }
      } }, { key: "show", value: function value(t) {
        this.build();var e = this._view.options;e.loading.showCallback.call(this, e), l.default.isFunction(t) && t.call(this);
      } }, { key: "hide", value: function value(t) {
        var e = this._view.options;e.loading.hideCallback.call(this, e), l.default.isFunction(t) && t.call(this);
      } }]), t;
  }(),
      m = function () {
    function t() {
      e(this, t), this.initialize.apply(this, arguments);
    }return u(t, [{ key: "initialize", value: function value(t) {
        this._view = t, this.options = t.options, this._drag = { time: null, pointer: null }, this.bindEvents();
      } }, { key: "bindEvents", value: function value() {
        var t = this._view.$panel,
            e = this.options;e.mouseDrag && (t.on(y.eventName("mousedown"), l.default.proxy(this.onDragStart, this)), t.on(y.eventName("dragstart selectstart"), function (t) {
          if (!e.mouseDragHandler || (0, l.default)(t.target).is(e.mouseDragHandler) || (0, l.default)(t.target).parents(e.mouseDragHandler).length > 0) return !1;
        })), e.touchDrag && f.touch && (t.on(y.eventName("touchstart"), l.default.proxy(this.onDragStart, this)), t.on(y.eventName("touchcancel"), l.default.proxy(this.onDragEnd, this))), e.pointerDrag && f.pointer && (t.on(y.eventName(f.prefixPointerEvent("pointerdown")), l.default.proxy(this.onDragStart, this)), t.on(y.eventName(f.prefixPointerEvent("pointercancel")), l.default.proxy(this.onDragEnd, this)));
      } }, { key: "onDragStart", value: function value(t) {
        var e = this;if (3 !== t.which) {
          var n = this.options;this._view.$panel.addClass(this.options.classes.dragging), this._position = this._view.getPosition(!0), this._drag.time = new Date().getTime(), this._drag.pointer = this.pointer(t);var i = function i() {
            y.enter("dragging"), y.trigger(e._view, "beforeDrag");
          };if (n.mouseDrag) {
            if (n.mouseDragHandler && !((0, l.default)(t.target).is(n.mouseDragHandler) || (0, l.default)(t.target).parents(n.mouseDragHandler).length > 0)) return;(0, l.default)(document).on(y.eventName("mouseup"), l.default.proxy(this.onDragEnd, this)), (0, l.default)(document).one(y.eventName("mousemove"), l.default.proxy(function () {
              (0, l.default)(document).on(y.eventName("mousemove"), l.default.proxy(this.onDragMove, this)), i();
            }, this));
          }n.touchDrag && f.touch && ((0, l.default)(document).on(y.eventName("touchend"), l.default.proxy(this.onDragEnd, this)), (0, l.default)(document).one(y.eventName("touchmove"), l.default.proxy(function () {
            (0, l.default)(document).on(y.eventName("touchmove"), l.default.proxy(this.onDragMove, this)), i();
          }, this))), n.pointerDrag && f.pointer && ((0, l.default)(document).on(y.eventName(f.prefixPointerEvent("pointerup")), l.default.proxy(this.onDragEnd, this)), (0, l.default)(document).one(y.eventName(f.prefixPointerEvent("pointermove")), l.default.proxy(function () {
            (0, l.default)(document).on(y.eventName(f.prefixPointerEvent("pointermove")), l.default.proxy(this.onDragMove, this)), i();
          }, this))), (0, l.default)(document).on(y.eventName("blur"), l.default.proxy(this.onDragEnd, this)), t.preventDefault();
        }
      } }, { key: "onDragMove", value: function value(t) {
        var e = this.distance(this._drag.pointer, this.pointer(t));y.is("dragging") && (Math.abs(e) > this.options.dragTolerance ? !0 !== this._willClose && (this._willClose = !0, this._view.$panel.addClass(this.options.classes.willClose)) : !1 !== this._willClose && (this._willClose = !1, this._view.$panel.removeClass(this.options.classes.willClose)), y.is("dragging") && (t.preventDefault(), this.move(e)));
      } }, { key: "onDragEnd", value: function value(t) {
        var e = this.distance(this._drag.pointer, this.pointer(t));(0, l.default)(document).off(y.eventName("mousemove mouseup touchmove touchend pointermove pointerup MSPointerMove MSPointerUp blur")), this._view.$panel.removeClass(this.options.classes.dragging), !0 === this._willClose && (this._willClose = !1, this._view.$panel.removeClass(this.options.classes.willClose)), y.is("dragging") && (y.leave("dragging"), y.trigger(this._view, "afterDrag"), Math.abs(e) < this.options.dragTolerance ? this._view.revert() : this._view.hide());
      } }, { key: "pointer", value: function value(t) {
        var e = { x: null, y: null };return t = t.originalEvent || t || window.event, (t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e;
      } }, { key: "distance", value: function value(t, e) {
        var n = this.options.direction;return "left" === n || "right" === n ? e.x - t.x : e.y - t.y;
      } }, { key: "move", value: function value(t) {
        var e = this._position + t;if ("right" === this.options.direction || "bottom" === this.options.direction) {
          if (e < 0) return;
        } else if (e > 0) return;this.options.useCssTransforms || this.options.useCssTransforms3d || "right" !== this.options.direction && "bottom" !== this.options.direction || (e = -e), this._view.setPosition(e + "px");
      } }]), t;
  }(),
      w = function () {
    function t(n) {
      e(this, t), this.initialize(n);
    }return u(t, [{ key: "initialize", value: function value(t) {
        this.options = t, this._instance = null, this._showed = !1, this._isLoading = !1, this.build();
      } }, { key: "setLength", value: function value() {
        switch (this.options.direction) {case "top":case "bottom":
            this._length = this.$panel.outerHeight();break;case "left":case "right":
            this._length = this.$panel.outerWidth();}
      } }, { key: "build", value: function value() {
        if (!this._builded) {
          var t = this.options,
              e = t.template.call(this, t),
              n = this;this.$panel = (0, l.default)(e).appendTo("body"), t.skin && this.$panel.addClass(t.skin), this.$content = this.$panel.find("." + this.options.classes.content), t.closeSelector && this.$panel.on("click touchstart", t.closeSelector, function () {
            return n.hide(), !1;
          }), this.loading = new v(this), this.setLength(), this.setPosition(this.getHidePosition()), (t.mouseDrag || t.touchDrag || t.pointerDrag) && (this.drag = new m(this)), this._builded = !0;
        }
      } }, { key: "getHidePosition", value: function value() {
        var t = this.options;if (t.useCssTransforms || t.useCssTransforms3d) switch (t.direction) {case "top":case "left":
            return "-100";case "bottom":case "right":
            return "100";}switch (t.direction) {case "top":case "bottom":
            return parseFloat(-this._length / (0, l.default)(window).height() * 100, 10);case "left":case "right":
            return parseFloat(-this._length / (0, l.default)(window).width() * 100, 10);}
      } }, { key: "empty", value: function value() {
        this._instance = null, this.$content.empty();
      } }, { key: "load", value: function value(t) {
        function e(e) {
          e = i.contentFilter.call(this, e, t), n.$content.html(e), n.hideLoading(), n._instance = t, y.trigger(n, "afterLoad", t);
        }var n = this,
            i = t.options;y.trigger(this, "beforeLoad", t), this.empty(), t.content ? e(t.content) : t.url ? (this.showLoading(), l.default.ajax(t.url, t.settings || {}).done(function (t) {
          e(t);
        })) : e("");
      } }, { key: "showLoading", value: function value() {
        var t = this;this.loading.show(function () {
          t._isLoading = !0;
        });
      } }, { key: "hideLoading", value: function value() {
        var t = this;this.loading.hide(function () {
          t._isLoading = !1;
        });
      } }, { key: "show", value: function value(t) {
        this.build(), y.enter("show"), y.trigger(this, "beforeShow"), (0, l.default)("html").addClass(this.options.classes.base + "-html"), this.$panel.addClass(this.options.classes.show);var e = this;g.do(this, 0, function () {
          e._showed = !0, y.trigger(e, "afterShow"), l.default.isFunction(t) && t.call(e);
        });
      } }, { key: "change", value: function value(t) {
        y.trigger(this, "beforeShow"), y.trigger(this, "onChange", t, this._instance), this.load(t), y.trigger(this, "afterShow");
      } }, { key: "revert", value: function value(t) {
        var e = this;g.do(this, 0, function () {
          l.default.isFunction(t) && t.call(e);
        });
      } }, { key: "hide", value: function value(t) {
        y.leave("show"), y.trigger(this, "beforeHide");var e = this;g.do(this, this.getHidePosition(), function () {
          e.$panel.removeClass(e.options.classes.show), e._showed = !1, e._instance = null, y._current === e && (y._current = null), y.is("show") || (0, l.default)("html").removeClass(e.options.classes.base + "-html"), l.default.isFunction(t) && t.call(e), y.trigger(e, "afterHide");
        });
      } }, { key: "makePositionStyle", value: function value(t) {
        var e = void 0,
            n = "0",
            i = "0";s(t) || a(t) || (t += "%"), this.options.useCssTransforms && f.transform ? ("left" === this.options.direction || "right" === this.options.direction ? n = t : i = t, e = f.transform.toString(), t = this.options.useCssTransforms3d && f.transform3d ? "translate3d(" + n + "," + i + ",0)" : "translate(" + n + "," + i + ")") : e = this.options.direction;var o = {};return o[e] = t, o;
      } }, { key: "getPosition", value: function value(t) {
        var e = void 0;if (this.options.useCssTransforms && f.transform) {
          if (!(e = n(this.$panel.css(f.transform)))) return 0;e = "left" === this.options.direction || "right" === this.options.direction ? e[12] || e[4] : e[13] || e[5];
        } else e = this.$panel.css(this.options.direction), e = parseFloat(e.replace("px", ""));return !0 !== t && (e = e / this._length * 100), parseFloat(e, 10);
      } }, { key: "setPosition", value: function value(t) {
        var e = this.makePositionStyle(t);this.$panel.css(e);
      } }]), t;
  }(),
      y = { _states: {}, _views: {}, _current: null, is: function is(t) {
      return this._states[t] && this._states[t] > 0;
    }, enter: function enter(t) {
      void 0 === this._states[t] && (this._states[t] = 0), this._states[t]++;
    }, leave: function leave(t) {
      this._states[t]--;
    }, trigger: function trigger(t, e) {
      for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) {
        i[o - 2] = arguments[o];
      }var s = [t].concat(i);(0, l.default)(document).trigger("slidePanel::" + e, s), l.default.isFunction(t.options[e]) && t.options[e].apply(t, i);
    }, eventName: function eventName(t) {
      if ("string" != typeof t || "" === t) return ".slidepanel";for (var e = (t = t.split(" ")).length, n = 0; n < e; n++) {
        t[n] = t[n] + ".slidepanel";
      }return t.join(" ");
    }, show: function show(t, e) {
      var n = this;if (!(t instanceof c)) switch (arguments.length) {case 0:
          t = new c();break;case 1:
          t = new c(t);break;case 2:
          t = new c(t, e);}var i = this.getView(t.options),
          o = function o() {
        i.show(), i.load(t), n._current = i;
      };null !== this._current ? i === this._current ? this._current.change(t) : this._current.hide(o) : o();
    }, getView: function getView(t) {
      var e = i(t);return this._views.hasOwnProperty(e) ? this._views[e] : this._views[e] = new w(t);
    }, hide: function hide(t) {
      void 0 !== t && void 0 !== t.options ? this.getView(t.options).hide() : null !== this._current && this._current.hide();
    } },
      _ = { is: function is(t) {
      return y.is(t);
    }, show: function show(t, e) {
      return y.show(t, e), this;
    }, hide: function hide() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }return y.hide(e), this;
    } };Date.now || (Date.now = function () {
    return new Date().getTime();
  });for (var b = ["webkit", "moz"], k = 0; k < b.length && !window.requestAnimationFrame; ++k) {
    var P = b[k];window.requestAnimationFrame = window[P + "RequestAnimationFrame"], window.cancelAnimationFrame = window[P + "CancelAnimationFrame"] || window[P + "CancelRequestAnimationFrame"];
  }if (/iP(ad|hone|od).*OS (6|7|8)/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var D = 0;window.requestAnimationFrame = function (t) {
      var e = o(),
          n = Math.max(D + 16, e);return setTimeout(function () {
        t(D = n);
      }, n - e);
    }, window.cancelAnimationFrame = clearTimeout;
  }var C = l.default.fn.slidePanel,
      x = function x(t) {
    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) {
      n[i - 1] = arguments[i];
    }var o = t;return "string" == typeof t ? this.each(function () {
      var t = l.default.data(this, "slidePanel");switch (t instanceof c || (t = new c(this, n), l.default.data(this, "slidePanel", t)), o) {case "hide":
          y.hide(t);break;case "show":
          y.show(t);}
    }) : this.each(function () {
      l.default.data(this, "slidePanel") || (l.default.data(this, "slidePanel", new c(this, t)), (0, l.default)(this).on("click", function (t) {
        var e = l.default.data(this, "slidePanel");y.show(e), t.preventDefault(), t.stopPropagation();
      }));
    });
  };l.default.fn.slidePanel = x, l.default.slidePanel = function () {
    y.show.apply(y, arguments);
  }, l.default.extend(l.default.slidePanel, { setDefaults: function setDefaults(t) {
      l.default.extend(!0, d, l.default.isPlainObject(t) && t);
    }, noConflict: function noConflict() {
      return l.default.fn.slidePanel = C, x;
    } }, h, _);
});
//# sourceMappingURL=jquery-slidePanel.min.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) factory(exports, require("jquery"));else {
    var mod = { exports: {} };factory(mod.exports, global.jQuery), global.State = mod.exports;
  }
}(this, function (exports, _jquery) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: !0 });var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
      _class = function () {
    function _class(states) {
      babelHelpers.classCallCheck(this, _class), this._states = Object.assign({}, states), this._values = {}, this._relations = {}, this._callbacks = {}, this._define();
    }return babelHelpers.createClass(_class, [{ key: "_define", value: function value() {
        for (var _this = this, self = this, keys = Object.keys(this._states), obj = {}, tmpRelations = [], composites = [], i = 0, l = keys.length; i < l; i++) {
          !function (i, l) {
            var key = keys[i];"function" != typeof _this._states[key] ? (Object.defineProperty(obj, key, { set: function set() {
                return !1;
              }, get: function get() {
                return tmpRelations.push(key), self._states[key];
              }, enumerable: !0, configurable: !0 }), _this._values[key] = _this._states[key], _this._relations[key] = []) : composites.push(key);
          }(i);
        }for (var i = 0, l = composites.length; i < l; i++) {
          !function (i, l) {
            var key = composites[i];Object.defineProperty(obj, key, { set: function set() {
                return !1;
              }, get: function get() {
                var value = self._states[key].call(obj);return self._addRelation(key, tmpRelations), tmpRelations = [], self._values[key] = value, value;
              }, enumerable: !0, configurable: !0 });
          }(i);
        }
      } }, { key: "_compare", value: function value(state) {
        if (this._states[state] !== this._values[state]) {
          var value = this._values[state];this._values[state] = this._states[state], this._dispatch(state, value, this._states[state]), this._compareComposite(state);
        }
      } }, { key: "_compareComposite", value: function value(state) {
        var relations = this.getRelation(state);if (relations && relations.length > 0) for (var i = 0, l = relations.length; i < l; i++) {
          var _state = relations[i],
              value = this._states[_state]();value !== this._values[_state] && (this._dispatch(_state, this._values[_state], value), this._values[_state] = value);
        }
      } }, { key: "_addRelation", value: function value(state, relations) {
        for (var i = 0, l = relations.length; i < l; i++) {
          var pros = relations[i];this._relations[pros].push(state);
        }
      } }, { key: "_dispatch", value: function value(state, origValue, newValue) {
        this._callbacks[state] && this._callbacks[state].fire([newValue, origValue]);
      } }, { key: "getRelation", value: function value(state) {
        return this._relations[state].length > 0 ? this._relations[state] : null;
      } }, { key: "on", value: function value(state, callback) {
        "function" == typeof state && (callback = state, state = "all"), this._callbacks[state] || (this._callbacks[state] = _jquery2.default.Callbacks()), this._callbacks[state].add(callback);
      } }, { key: "off", value: function value(state, callback) {
        this._callbacks[state] && this._callbacks[state].remove(callback);
      } }, { key: "set", value: function value(state, _value) {
        var isDeep = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if ("string" == typeof state && void 0 !== _value && "function" != typeof this._states[state]) this._states[state] = _value, isDeep || this._compare(state);else if ("object" === (void 0 === state ? "undefined" : babelHelpers.typeof(state))) {
          for (var _key in state) {
            "function" != typeof state[_key] && this.set(_key, state[_key], !0);
          }for (var _key2 in state) {
            "function" != typeof state[_key2] && this._compare(_key2);
          }
        }return this._states[state];
      } }, { key: "get", value: function value(state) {
        return state ? this._values[state] : this._values;
      } }]), _class;
  }();exports.default = _class;
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) factory(exports, require("jquery"));else {
    var mod = { exports: {} };factory(mod.exports, global.jQuery), global.Component = mod.exports;
  }
}(this, function (exports, _jquery) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: !0 });var _jquery2 = babelHelpers.interopRequireDefault(_jquery);void 0 === Object.assign && (Object.assign = _jquery2.default.extend);var _class = function () {
    function _class() {
      var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};babelHelpers.classCallCheck(this, _class), this.$el = options.$el ? options.$el : (0, _jquery2.default)(document), this.el = this.$el[0], delete options.$el, this.options = options, this.isProcessed = !1;
    }return babelHelpers.createClass(_class, [{ key: "initialize", value: function value() {} }, { key: "process", value: function value() {} }, { key: "run", value: function value() {
        this.isProcessed || (this.initialize(), this.process()), this.isProcessed = !0;
      } }, { key: "triggerResize", value: function value() {
        if (document.createEvent) {
          var ev = document.createEvent("Event");ev.initEvent("resize", !0, !0), window.dispatchEvent(ev);
        } else {
          element = document.documentElement;var event = document.createEventObject();element.fireEvent("onresize", event);
        }
      } }]), _class;
  }();exports.default = _class;
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) factory(exports, require("jquery"));else {
    var mod = { exports: {} };factory(mod.exports, global.jQuery), global.Plugin = mod.exports;
  }
}(this, function (exports, _jquery) {
  "use strict";
  function getPlugin(name) {
    return void 0 !== plugins[name] && plugins[name];
  }function getDefaults(name) {
    var PluginClass = getPlugin(name);return PluginClass ? PluginClass.getDefaults() : {};
  }Object.defineProperty(exports, "__esModule", { value: !0 }), exports.pluginFactory = exports.getDefaults = exports.getPlugin = exports.getPluginAPI = exports.Plugin = void 0;var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
      plugins = {},
      apis = {},
      Plugin = function () {
    function Plugin($el) {
      var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};babelHelpers.classCallCheck(this, Plugin), this.name = this.getName(), this.$el = $el, this.options = options, this.isRendered = !1;
    }return babelHelpers.createClass(Plugin, [{ key: "getName", value: function value() {
        return "plugin";
      } }, { key: "render", value: function value() {
        if (!_jquery2.default.fn[this.name]) return !1;this.$el[this.name](this.options);
      } }, { key: "initialize", value: function value() {
        if (this.isRendered) return !1;this.render(), this.isRendered = !0;
      } }], [{ key: "getDefaults", value: function value() {
        return {};
      } }, { key: "register", value: function value(name, obj) {
        void 0 !== obj && (plugins[name] = obj, void 0 !== obj.api && Plugin.registerApi(name, obj));
      } }, { key: "registerApi", value: function value(name, obj) {
        var api = obj.api();if ("string" == typeof api) {
          var _api = obj.api().split("|"),
              event = _api[0] + ".plugin." + name,
              func = _api[1] || "render",
              callback = function callback(e) {
            var $el = (0, _jquery2.default)(this),
                plugin = $el.data("pluginInstance");plugin || ((plugin = new obj($el, _jquery2.default.extend(!0, {}, getDefaults(name), $el.data()))).initialize(), $el.data("pluginInstance", plugin)), plugin[func](e);
          };apis[name] = function (selector, context) {
            context ? ((0, _jquery2.default)(context).off(event), (0, _jquery2.default)(context).on(event, selector, callback)) : (0, _jquery2.default)(selector).on(event, callback);
          };
        } else "function" == typeof api && (apis[name] = api);
      } }]), Plugin;
  }();exports.default = Plugin, exports.Plugin = Plugin, exports.getPluginAPI = function (name) {
    return void 0 === name ? apis : apis[name];
  }, exports.getPlugin = getPlugin, exports.getDefaults = getDefaults, exports.pluginFactory = function (name, $el) {
    var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        PluginClass = getPlugin(name);if (PluginClass && void 0 === PluginClass.api) return new PluginClass($el, _jquery2.default.extend(!0, {}, getDefaults(name), options));if (_jquery2.default.fn[name]) {
      var plugin = new Plugin($el, options);return plugin.getName = function () {
        return name;
      }, plugin.name = name, plugin;
    }return PluginClass.api, !1;
  };
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), !(function webpackMissingModule() { var e = new Error("Cannot find module \"Component\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"Plugin\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) factory(exports, require("jquery"), require("Component"), require("Plugin"));else {
    var mod = { exports: {} };factory(mod.exports, global.jQuery, global.Component, global.Plugin), global.Base = mod.exports;
  }
}(this, function (exports, _jquery, _Component2, _Plugin) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: !0 });var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
      _class = function (_Component) {
    function _class() {
      return babelHelpers.classCallCheck(this, _class), babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }return babelHelpers.inherits(_class, _Component), babelHelpers.createClass(_class, [{ key: "initializePlugins", value: function value() {
        var context = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];(0, _jquery2.default)("[data-plugin]", context || this.$el).each(function () {
          var $this = (0, _jquery2.default)(this),
              name = $this.data("plugin"),
              plugin = (0, _Plugin.pluginFactory)(name, $this, $this.data());plugin && plugin.initialize();
        });
      } }, { key: "initializePluginAPIs", value: function value() {
        var context = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
            apis = (0, _Plugin.getPluginAPI)();for (var name in apis) {
          (0, _Plugin.getPluginAPI)(name)("[data-plugin=" + name + "]", context);
        }
      } }]), _class;
  }(babelHelpers.interopRequireDefault(_Component2).default);exports.default = _class;
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) factory(exports);else {
    var mod = { exports: {} };factory(mod.exports), global.Config = mod.exports;
  }
}(this, function (exports) {
  "use strict";
  function get() {
    for (var data = values, _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
      names[_key] = arguments[_key];
    }for (var i = 0; i < names.length; i++) {
      data = function (data, name) {
        return data[name];
      }(data, names[i]);
    }return data;
  }function getColor(name, level) {
    if ("primary" === name && ((name = get("primaryColor")) || (name = "red")), void 0 === values.colors) return null;if (void 0 !== values.colors[name]) {
      if (level && void 0 !== values.colors[name][level]) return values.colors[name][level];if (void 0 === level) return values.colors[name];
    }return null;
  }Object.defineProperty(exports, "__esModule", { value: !0 });var values = { fontFamily: "Noto Sans, sans-serif", primaryColor: "blue", assets: "../assets" };exports.get = get, exports.set = function (name, value) {
    "string" == typeof name && void 0 !== value ? values[name] = value : "object" === (void 0 === name ? "undefined" : babelHelpers.typeof(name)) && (values = $.extend(!0, {}, values, name));
  }, exports.getColor = getColor, exports.colors = function (name, level) {
    return getColor(name, level);
  };
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) factory();else {
    var mod = { exports: {} };factory(), global.configColors = mod.exports;
  }
}(this, function () {
  "use strict";
  !function (Config) {
    Config.set("colors", { red: { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", a100: "#ff8a80", a200: "#ff5252", a300: "#ff1744", a400: "#d50000" }, pink: { 50: "#fce4ec", 100: "#f8bbd0", 200: "#f48fb1", 300: "#f06292", 400: "#ec407a", 500: "#e91e63", 600: "#d81b60", 700: "#c2185b", 800: "#ad1457", 900: "#880e4f", a100: "#ff80ab", a200: "#ff4081", a300: "#f50057", a400: "#c51162" }, purple: { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", a100: "#ea80fc", a200: "#e040fb", a300: "#d500f9", a400: "#aa00ff" }, "deep-purple": { 50: "#ede7f6", 100: "#d1c4e9", 200: "#b39ddb", 300: "#9575cd", 400: "#7e57c2", 500: "#673ab7", 600: "#5e35b1", 700: "#512da8", 800: "#4527a0", 900: "#311b92", a100: "#b388ff", a200: "#7c4dff", a300: "#651fff", a400: "#6200ea" }, indigo: { 50: "#e8eaf6", 100: "#c5cae9", 200: "#9fa8da", 300: "#7986cb", 400: "#5c6bc0", 500: "#3f51b5", 600: "#3949ab", 700: "#303f9f", 800: "#283593", 900: "#1a237e", a100: "#8c9eff", a200: "#536dfe", a300: "#3d5afe", a400: "#304ffe" }, blue: { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", a100: "#82b1ff", a200: "#448aff", a300: "#2979ff", a400: "#2962ff" }, "light-blue": { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", a100: "#80d8ff", a200: "#40c4ff", a300: "#00b0ff", a400: "#0091ea" }, cyan: { 50: "#e0f7fa", 100: "#b2ebf2", 200: "#80deea", 300: "#4dd0e1", 400: "#26c6da", 500: "#00bcd4", 600: "#00acc1", 700: "#0097a7", 800: "#00838f", 900: "#006064", a100: "#84ffff", a200: "#18ffff", a300: "#00e5ff", a400: "#00b8d4" }, teal: { 50: "#e0f2f1", 100: "#b2dfdb", 200: "#80cbc4", 300: "#4db6ac", 400: "#26a69a", 500: "#009688", 600: "#00897b", 700: "#00796b", 800: "#00695c", 900: "#004d40", a100: "#a7ffeb", a200: "#64ffda", a300: "#1de9b6", a400: "#00bfa5" }, green: { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", a100: "#b9f6ca", a200: "#69f0ae", a300: "#00e676", a400: "#00c853" }, "light-green": { 50: "#f1f8e9", 100: "#dcedc8", 200: "#c5e1a5", 300: "#aed581", 400: "#9ccc65", 500: "#8bc34a", 600: "#7cb342", 700: "#689f38", 800: "#558b2f", 900: "#33691e", a100: "#ccff90", a200: "#b2ff59", a300: "#76ff03", a400: "#64dd17" }, lime: { 50: "#f9fbe7", 100: "#f0f4c3", 200: "#e6ee9c", 300: "#dce775", 400: "#d4e157", 500: "#cddc39", 600: "#c0ca33", 700: "#afb42b", 800: "#9e9d24", 900: "#827717", a100: "#f4ff81", a200: "#eeff41", a300: "#c6ff00", a400: "#aeea00" }, yellow: { 50: "#fffde7", 100: "#fff9c4", 200: "#fff59d", 300: "#fff176", 400: "#ffee58", 500: "#ffeb3b", 600: "#fdd835", 700: "#fbc02d", 800: "#f9a825", 900: "#f57f17", a100: "#ffff8d", a200: "#ffff00", a300: "#ffea00", a400: "#ffd600" }, amber: { 50: "#fff8e1", 100: "#ffecb3", 200: "#ffe082", 300: "#ffd54f", 400: "#ffca28", 500: "#ffc107", 600: "#ffb300", 700: "#ffa000", 800: "#ff8f00", 900: "#ff6f00", a100: "#ffe57f", a200: "#ffd740", a300: "#ffc400", a400: "#ffab00" }, orange: { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", a100: "#ffd180", a200: "#ffab40", a300: "#ff9100", a400: "#ff6d00" }, "deep-orange": { 50: "#fbe9e7", 100: "#ffccbc", 200: "#ffab91", 300: "#ff8a65", 400: "#ff7043", 500: "#ff5722", 600: "#f4511e", 700: "#e64a19", 800: "#d84315", 900: "#bf360c", a100: "#ff9e80", a200: "#ff6e40", a300: "#ff3d00", a400: "#dd2c00" }, brown: { 50: "#efebe9", 100: "#d7ccc8", 200: "#bcaaa4", 300: "#a1887f", 400: "#8d6e63", 500: "#795548", 600: "#6d4c41", 700: "#5d4037", 800: "#4e342e", 900: "#3e2723" }, grey: { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121" }, "blue-grey": { 50: "#eceff1", 100: "#cfd8dc", 200: "#b0bec5", 300: "#90a4ae", 400: "#78909c", 500: "#607d8b", 600: "#546e7a", 700: "#455a64", 800: "#37474f", 900: "#263238" } });
  }(Config);
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, !(function webpackMissingModule() { var e = new Error("Cannot find module \"Plugin\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) factory(exports, require("Plugin"));else {
    var mod = { exports: {} };factory(mod.exports, global.Plugin), global.PluginAsscrollable = mod.exports;
  }
}(this, function (exports, _Plugin2) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: !0 });var _Plugin3 = babelHelpers.interopRequireDefault(_Plugin2),
      Scrollable = function (_Plugin) {
    function Scrollable() {
      return babelHelpers.classCallCheck(this, Scrollable), babelHelpers.possibleConstructorReturn(this, (Scrollable.__proto__ || Object.getPrototypeOf(Scrollable)).apply(this, arguments));
    }return babelHelpers.inherits(Scrollable, _Plugin), babelHelpers.createClass(Scrollable, [{ key: "getName", value: function value() {
        return "scrollable";
      } }, { key: "render", value: function value() {
        this.$el.asScrollable(this.options);
      } }], [{ key: "getDefaults", value: function value() {
        return { namespace: "scrollable", contentSelector: "> [data-role='content']", containerSelector: "> [data-role='container']" };
      } }]), Scrollable;
  }(_Plugin3.default);_Plugin3.default.register("scrollable", Scrollable), exports.default = Scrollable;
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), !(function webpackMissingModule() { var e = new Error("Cannot find module \"Plugin\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) factory(exports, require("jquery"), require("Plugin"));else {
    var mod = { exports: {} };factory(mod.exports, global.jQuery, global.Plugin), global.PluginSlidepanel = mod.exports;
  }
}(this, function (exports, _jquery, _Plugin2) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: !0 });var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
      _Plugin3 = babelHelpers.interopRequireDefault(_Plugin2),
      SlidePanel = function (_Plugin) {
    function SlidePanel() {
      return babelHelpers.classCallCheck(this, SlidePanel), babelHelpers.possibleConstructorReturn(this, (SlidePanel.__proto__ || Object.getPrototypeOf(SlidePanel)).apply(this, arguments));
    }return babelHelpers.inherits(SlidePanel, _Plugin), babelHelpers.createClass(SlidePanel, [{ key: "getName", value: function value() {
        return "slidePanel";
      } }, { key: "render", value: function value() {
        void 0 !== _jquery2.default.slidePanel && (this.options.url || (this.options.url = this.$el.attr("href"), this.options.url = this.options.url && this.options.url.replace(/.*(?=#[^\s]*$)/, "")), this.$el.data("slidePanelWrapAPI", this));
      } }, { key: "show", value: function value() {
        var options = this.options;_jquery2.default.slidePanel.show({ url: options.url }, options);
      } }], [{ key: "getDefaults", value: function value() {
        return { closeSelector: ".slidePanel-close", mouseDragHandler: ".slidePanel-handler", loading: { template: function template(options) {
              return '<div class="' + options.classes.loading + '">\n                    <div class="loader loader-default"></div>\n                  </div>';
            }, showCallback: function showCallback(options) {
              this.$el.addClass(options.classes.loading + "-show");
            }, hideCallback: function hideCallback(options) {
              this.$el.removeClass(options.classes.loading + "-show");
            } } };
      } }, { key: "api", value: function value() {
        return "click|show";
      } }]), SlidePanel;
  }(_Plugin3.default);_Plugin3.default.register("slidePanel", SlidePanel), exports.default = SlidePanel;
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, !(function webpackMissingModule() { var e = new Error("Cannot find module \"Plugin\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"Config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports) factory(exports, require("Plugin"), require("Config"));else {
    var mod = { exports: {} };factory(mod.exports, global.Plugin, global.Config), global.PluginSwitchery = mod.exports;
  }
}(this, function (exports, _Plugin2, _Config) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: !0 });var _Plugin3 = babelHelpers.interopRequireDefault(_Plugin2),
      Config = babelHelpers.interopRequireWildcard(_Config),
      SwitcheryPlugin = function (_Plugin) {
    function SwitcheryPlugin() {
      return babelHelpers.classCallCheck(this, SwitcheryPlugin), babelHelpers.possibleConstructorReturn(this, (SwitcheryPlugin.__proto__ || Object.getPrototypeOf(SwitcheryPlugin)).apply(this, arguments));
    }return babelHelpers.inherits(SwitcheryPlugin, _Plugin), babelHelpers.createClass(SwitcheryPlugin, [{ key: "getName", value: function value() {
        return "switchery";
      } }, { key: "render", value: function value() {
        "undefined" != typeof Switchery && new Switchery(this.$el[0], this.options);
      } }], [{ key: "getDefaults", value: function value() {
        return { color: Config.colors("primary", 600) };
      } }]), SwitcheryPlugin;
  }(_Plugin3.default);_Plugin3.default.register("switchery", SwitcheryPlugin), exports.default = SwitcheryPlugin;
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);