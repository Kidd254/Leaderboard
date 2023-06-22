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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjBCO0FBQ3BEO0FBQ0E7QUFDQSxzQkFBc0IsaURBQU07QUFDNUI7QUFDQTtBQUNBLHFEQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiM0I7QUFDTztBQUNRO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsOENBQThDO0FBQzlDLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMxREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDQTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFXO0FBQ2IsRUFBRSwrREFBVTtBQUNaO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZS9hZGRTY29yZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGUvcmVmcmVzaC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGUvc2NvcmUuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NvcmVzIGZyb20gJy4vc2NvcmUuanMnO1xyXG5cclxuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKTtcclxuY29uc3Qgc2NvcmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpO1xyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XHJcbmNvbnN0IGFkZE15U2NvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGlzdFNjb3JlID0gbmV3IFNjb3JlcygpO1xyXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChzY29yZUlucHV0LnZhbHVlID09PSAnJyB8fCBuYW1lSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxyXG4gICAgICByZXR1cm4gYWxlcnQoJ1BsZWFzZSBmaWxsIHRoZSBVc2VyIGFuZCBTY29yZSBmaWVsZHMnKTtcclxuICAgIH1cclxuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlSW50KHNjb3JlSW5wdXQudmFsdWUsIDEwKSkpIHtcclxuICAgICAgcmV0dXJuIGxpc3RTY29yZS5hZGRTY29yZXMobmFtZUlucHV0LnZhbHVlLCBzY29yZUlucHV0LnZhbHVlKTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxyXG4gICAgcmV0dXJuIGFsZXJ0KCdTY29yZSBtdXN0IGJlIGEgbnVtZXJpYyB2YWx1ZScpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkTXlTY29yZTtcclxuIiwiaW1wb3J0IFNjb3JlcywgeyBzY29yZUNvbnRhaW5lciB9IGZyb20gJy4vc2NvcmUuanMnO1xyXG5cclxuY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoJyk7XHJcbmNvbnN0IGxpc3RTY29yZSA9IG5ldyBTY29yZXMoKTtcclxuY29uc3Qgc2NvcmVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuc2NvcmVMaXN0LmlkID0gJ3Njb3JlLWxpc3QnO1xyXG5zY29yZUNvbnRhaW5lci5hcHBlbmQoc2NvcmVMaXN0KTtcclxuY29uc3QgcmVjZW50U2NvcmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxpc3RTY29yZS5nZXRMaXN0KHNjb3JlTGlzdCk7XHJcbiAgfSk7XHJcbiAgbGlzdFNjb3JlLmdldExpc3Qoc2NvcmVMaXN0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVjZW50U2NvcmU7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuZXhwb3J0IGNvbnN0IHNjb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2NvcmVMaXN0ID0gW107XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZm8nKSkge1xyXG4gICAgICB0aGlzLnNjb3JlTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZm8nKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIHN0b3JhZ2U9KHNjb3JlKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NvcmVMaXN0LnB1c2goc2NvcmUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5mbycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc2NvcmVMaXN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlPShzY29yZUNvbnRhaW5lcikgPT4ge1xyXG4gICAgICBzY29yZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgdGhpcy5zY29yZUxpc3QuZm9yRWFjaCgoc2NvcmUpID0+IHtcclxuICAgICAgICBjb25zdCBzY29yZUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzY29yZUxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZS1hZGRlZCcpO1xyXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwb2ludHMuY2xhc3NMaXN0LmFkZCgnc2NvcmUtYWRkZWQnKTtcclxuXHJcbiAgICAgICAgbmFtZS5pbm5lckhUTUwgPSBzY29yZS51c2VyO1xyXG4gICAgICAgIHBvaW50cy5pbm5lckhUTUwgPSBzY29yZS5zY29yZTtcclxuXHJcbiAgICAgICAgc2NvcmVMaXN0Q29udGFpbmVyLmFwcGVuZChuYW1lKTtcclxuICAgICAgICBzY29yZUxpc3RDb250YWluZXIuYXBwZW5kKHBvaW50cyk7XHJcbiAgICAgICAgc2NvcmVDb250YWluZXIuYXBwZW5kKHNjb3JlTGlzdENvbnRhaW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gc2NvcmVDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgIGFkZFNjb3JlcyA9ICh1c2VyRGF0YSwgc2NvcmVEYXRhKSA9PiB7XHJcbiAgICAgICBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvUlBJTGJtOEhlbGdYS1l0NVE3b0svc2NvcmVzLycsIHtcclxuICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICB1c2VyOiB1c2VyRGF0YSxcclxuICAgICAgICAgICBzY29yZTogc2NvcmVEYXRhLFxyXG4gICAgICAgICB9KSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICB9KTtcclxuICAgICB9XHJcblxyXG4gICAgIGFzeW5jIGdldExpc3Qoc2NvcmVDb250YWluZXIpIHtcclxuICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9SUElMYm04SGVsZ1hLWXQ1UTdvSy9zY29yZXMvJyk7XHJcbiAgICAgICB0aGlzLmZldGNoaW5nKGZldGNoRGF0YSwgc2NvcmVDb250YWluZXIpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgYXN5bmMgZmV0Y2hpbmcoZmV0Y2hEYXRhLCBzY29yZUNvbnRhaW5lcikge1xyXG4gICAgICAgY29uc3QgdG9Kc29uID0gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKTtcclxuICAgICAgIHRoaXMuc2NvcmVMaXN0ID0gdG9Kc29uLnJlc3VsdDtcclxuICAgICAgIHRoaXMuY3JlYXRlKHNjb3JlQ29udGFpbmVyKTtcclxuICAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWRkTXlTY29yZSBmcm9tICcuL21vZHVsZS9hZGRTY29yZS5qcyc7XHJcbmltcG9ydCByZWNlbnRTY29yZSBmcm9tICcuL21vZHVsZS9yZWZyZXNoLmpzJztcclxuXHJcbmNvbnN0IGNhbGwgPSAoKSA9PiB7XHJcbiAgY29uc3QgZHluYW1pY0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xyXG4gIHJlY2VudFNjb3JlKGR5bmFtaWNEaXNwbGF5KTtcclxuICBhZGRNeVNjb3JlKGR5bmFtaWNEaXNwbGF5KTtcclxufTtcclxuXHJcbmNhbGwoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9