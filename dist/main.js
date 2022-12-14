/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst DEFAULTS = {\n  COLOR: '#D3D3D3',\n  RADIUS: 10\n}\n\nfunction Asteroid(obj) {\n  let ast = {};\n  ast.color = DEFAULTS.COLOR;\n  ast.radius = DEFAULTS.RADIUS;\n  ast.pos = obj.pos;\n  ast.vel = Util.randomVec(5);\n  MovingObject.call(this, ast);  \n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst DIM_X = 500;\nconst DIM_Y = 500;\nconst NUM_ASTEROIDS = 15;\n\nfunction Game() {\n  this.asteroids = [];\n  this.addAsteroids();\n  console.log(this.asteroids)\n}\n\nGame.prototype.addAsteroids = function() {\n  let count = 0;\n  while (count < NUM_ASTEROIDS) {\n    let newAsteroid = new Asteroid({pos: this.randomPosition()});\n    this.asteroids.push(newAsteroid);\n    count++;\n  }\n}\n\nGame.prototype.randomPosition = function() {\n  return [Math.random() * DIM_X, Math.random() * DIM_Y]\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, DIM_X, DIM_Y);\n  ctx.fillStyle = 'black'\n  ctx.fillRect(0, 0, 500, 500);\n  for (let asteroid of this.asteroids) {\n    asteroid.draw(ctx);\n  }\n}\n\nGame.prototype.moveObjects = function() {\n  for (let asteroid of this.asteroids) {\n    asteroid.move();\n  }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\nfunction GameView(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n    setInterval( () => {\n        this.game.draw(this.ctx);\n        this.game.moveObjects();\n    }, 75)\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack://asteroids/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\")\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\nwindow.MovingObject = MovingObject; \n\n\nconst canvas = document.getElementById('game-canvas');\nconst ctx = canvas.getContext(\"2d\");\nwindow.ctx = ctx;\n\ncanvas.width = 500;\ncanvas.height = 500;\n\nctx.fillStyle = \"black\";\nctx.fillRect(0, 0, 500, 500);\n\nconst g = new Game();\nconst gv = new GameView(g, ctx);\n\ngv.start()\n\nconsole.log(\"check\")\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(obj) {\n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.radius = obj.radius;\n    this.color = obj.color;\n}\n\n  MovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n  }\n\n  MovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0]\n    this.pos[1] += this.vel[1]\n  }\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util ={\n  inherits(childClass, parentClass) {\n    function Surrogate(){};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://asteroids/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;