/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/addScore.js":
/*!********************************!*\
  !*** ./src/module/addScore.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formElement: () => (/* binding */ formElement)
/* harmony export */ });
/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.js */ "./src/module/score.js");


const nameInput = document.querySelector('#name');
const formElement = document.querySelector('#form');
const scoreInput = document.querySelector('#score');
const submitBtn = document.querySelector('.submit');
const addMyScore = () => {
  const listScore = new _score_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  submitBtn.addEventListener('click', () => {
    if (scoreInput.value === '' || nameInput.value === '') {
      // eslint-disable-next-line no-alert
      return alert('Please fill the User and Score fields');
    }
    if (!Number.isNaN(parseInt(scoreInput.value, 10))) {
      return listScore.addScores(nameInput.value, scoreInput.value);
    }
    // eslint-disable-next-line no-alert
    return alert('Score must be a numeric value');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMyScore);


/***/ }),

/***/ "./src/module/refresh.js":
/*!*******************************!*\
  !*** ./src/module/refresh.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.js */ "./src/module/score.js");


const refreshBtn = document.querySelector('.refresh');
const listScore = new _score_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
const scoreList = document.createElement('ul');
scoreList.id = 'score-list';
_score_js__WEBPACK_IMPORTED_MODULE_0__.scoreContainer.append(scoreList);
const recentScore = async () => {
  refreshBtn.addEventListener('click', () => {
    listScore.getList(scoreList);
  });
  listScore.getList(scoreList);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recentScore);


/***/ }),

/***/ "./src/module/score.js":
/*!*****************************!*\
  !*** ./src/module/score.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scores),
/* harmony export */   scoreContainer: () => (/* binding */ scoreContainer)
/* harmony export */ });
/* eslint-disable no-console */
const scoreContainer = document.querySelector('.display');
class Scores {
  constructor() {
    this.scoreList = [];
    if (localStorage.getItem('info')) {
      this.scoreList = JSON.parse(localStorage.getItem('info'));
    }
  }

    storage=(score) => {
      this.scoreList.push(score);
      localStorage.setItem('info', JSON.stringify(this.scoreList));
    }

    create=(scoreContainer) => {
      scoreContainer.innerHTML = '';
      this.scoreList.forEach((score) => {
        const scoreListContainer = document.createElement('div');
        scoreListContainer.classList.add('list-container');
        const name = document.createElement('p');
        name.classList.add('name-added');
        const points = document.createElement('p');
        points.classList.add('score-added');

        name.innerHTML = score.user;
        points.innerHTML = score.score;

        scoreListContainer.append(name);
        scoreListContainer.append(points);
        scoreContainer.append(scoreListContainer);
      });
      return scoreContainer;
    }

     addScores = (userData, scoreData) => {
       fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RPILbm8HelgXKYt5Q7oK/scores/', {
         method: 'POST',
         body: JSON.stringify({
           user: userData,
           score: scoreData,
         }),
         headers: {
           'Content-type': 'application/json; charset=UTF-8',
         },
       });
     }

     async getList(scoreContainer) {
       const fetchData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RPILbm8HelgXKYt5Q7oK/scores/');
       this.fetching(fetchData, scoreContainer);
     }

     async fetching(fetchData, scoreContainer) {
       const toJson = await fetchData.json();
       this.scoreList = toJson.result;
       this.create(scoreContainer);
     }
}


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_addScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/addScore.js */ "./src/module/addScore.js");
/* harmony import */ var _module_refresh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/refresh.js */ "./src/module/refresh.js");



const call = () => {
  const dynamicDisplay = document.querySelector('.display');
  (0,_module_refresh_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dynamicDisplay);
  (0,_module_addScore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dynamicDisplay);
};

call();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7O0FBRWhDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckIwQjtBQUNwRDtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFNO0FBQzVCO0FBQ0E7QUFDQSxxREFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjNCO0FBQ087QUFDUTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSw4Q0FBOEM7QUFDOUMsVUFBVTtBQUNWLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMxREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDQTs7QUFFOUM7QUFDQTtBQUNBLEVBQUUsOERBQVc7QUFDYixFQUFFLCtEQUFVO0FBQ1o7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGUvYWRkU2NvcmUuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlL3JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlL3Njb3JlLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjb3JlcyBmcm9tICcuL3Njb3JlLmpzJztcblxuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbmV4cG9ydCBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG5jb25zdCBzY29yZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5jb25zdCBhZGRNeVNjb3JlID0gKCkgPT4ge1xuICBjb25zdCBsaXN0U2NvcmUgPSBuZXcgU2NvcmVzKCk7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoc2NvcmVJbnB1dC52YWx1ZSA9PT0gJycgfHwgbmFtZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgICByZXR1cm4gYWxlcnQoJ1BsZWFzZSBmaWxsIHRoZSBVc2VyIGFuZCBTY29yZSBmaWVsZHMnKTtcbiAgICB9XG4gICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VJbnQoc2NvcmVJbnB1dC52YWx1ZSwgMTApKSkge1xuICAgICAgcmV0dXJuIGxpc3RTY29yZS5hZGRTY29yZXMobmFtZUlucHV0LnZhbHVlLCBzY29yZUlucHV0LnZhbHVlKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgcmV0dXJuIGFsZXJ0KCdTY29yZSBtdXN0IGJlIGEgbnVtZXJpYyB2YWx1ZScpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZE15U2NvcmU7XG4iLCJpbXBvcnQgU2NvcmVzLCB7IHNjb3JlQ29udGFpbmVyIH0gZnJvbSAnLi9zY29yZS5qcyc7XHJcblxyXG5jb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gnKTtcclxuY29uc3QgbGlzdFNjb3JlID0gbmV3IFNjb3JlcygpO1xyXG5jb25zdCBzY29yZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5zY29yZUxpc3QuaWQgPSAnc2NvcmUtbGlzdCc7XHJcbnNjb3JlQ29udGFpbmVyLmFwcGVuZChzY29yZUxpc3QpO1xyXG5jb25zdCByZWNlbnRTY29yZSA9IGFzeW5jICgpID0+IHtcclxuICByZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbGlzdFNjb3JlLmdldExpc3Qoc2NvcmVMaXN0KTtcclxuICB9KTtcclxuICBsaXN0U2NvcmUuZ2V0TGlzdChzY29yZUxpc3QpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZWNlbnRTY29yZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuZXhwb3J0IGNvbnN0IHNjb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2NvcmVMaXN0ID0gW107XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmZvJykpIHtcbiAgICAgIHRoaXMuc2NvcmVMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5mbycpKTtcbiAgICB9XG4gIH1cblxuICAgIHN0b3JhZ2U9KHNjb3JlKSA9PiB7XG4gICAgICB0aGlzLnNjb3JlTGlzdC5wdXNoKHNjb3JlKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmZvJywgSlNPTi5zdHJpbmdpZnkodGhpcy5zY29yZUxpc3QpKTtcbiAgICB9XG5cbiAgICBjcmVhdGU9KHNjb3JlQ29udGFpbmVyKSA9PiB7XG4gICAgICBzY29yZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMuc2NvcmVMaXN0LmZvckVhY2goKHNjb3JlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjb3JlTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzY29yZUxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lLWFkZGVkJyk7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcG9pbnRzLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWFkZGVkJyk7XG5cbiAgICAgICAgbmFtZS5pbm5lckhUTUwgPSBzY29yZS51c2VyO1xuICAgICAgICBwb2ludHMuaW5uZXJIVE1MID0gc2NvcmUuc2NvcmU7XG5cbiAgICAgICAgc2NvcmVMaXN0Q29udGFpbmVyLmFwcGVuZChuYW1lKTtcbiAgICAgICAgc2NvcmVMaXN0Q29udGFpbmVyLmFwcGVuZChwb2ludHMpO1xuICAgICAgICBzY29yZUNvbnRhaW5lci5hcHBlbmQoc2NvcmVMaXN0Q29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNjb3JlQ29udGFpbmVyO1xuICAgIH1cblxuICAgICBhZGRTY29yZXMgPSAodXNlckRhdGEsIHNjb3JlRGF0YSkgPT4ge1xuICAgICAgIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9SUElMYm04SGVsZ1hLWXQ1UTdvSy9zY29yZXMvJywge1xuICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgIHVzZXI6IHVzZXJEYXRhLFxuICAgICAgICAgICBzY29yZTogc2NvcmVEYXRhLFxuICAgICAgICAgfSksXG4gICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgICB9LFxuICAgICAgIH0pO1xuICAgICB9XG5cbiAgICAgYXN5bmMgZ2V0TGlzdChzY29yZUNvbnRhaW5lcikge1xuICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9SUElMYm04SGVsZ1hLWXQ1UTdvSy9zY29yZXMvJyk7XG4gICAgICAgdGhpcy5mZXRjaGluZyhmZXRjaERhdGEsIHNjb3JlQ29udGFpbmVyKTtcbiAgICAgfVxuXG4gICAgIGFzeW5jIGZldGNoaW5nKGZldGNoRGF0YSwgc2NvcmVDb250YWluZXIpIHtcbiAgICAgICBjb25zdCB0b0pzb24gPSBhd2FpdCBmZXRjaERhdGEuanNvbigpO1xuICAgICAgIHRoaXMuc2NvcmVMaXN0ID0gdG9Kc29uLnJlc3VsdDtcbiAgICAgICB0aGlzLmNyZWF0ZShzY29yZUNvbnRhaW5lcik7XG4gICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGFkZE15U2NvcmUgZnJvbSAnLi9tb2R1bGUvYWRkU2NvcmUuanMnO1xuaW1wb3J0IHJlY2VudFNjb3JlIGZyb20gJy4vbW9kdWxlL3JlZnJlc2guanMnO1xuXG5jb25zdCBjYWxsID0gKCkgPT4ge1xuICBjb25zdCBkeW5hbWljRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Jyk7XG4gIHJlY2VudFNjb3JlKGR5bmFtaWNEaXNwbGF5KTtcbiAgYWRkTXlTY29yZShkeW5hbWljRGlzcGxheSk7XG59O1xuXG5jYWxsKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=