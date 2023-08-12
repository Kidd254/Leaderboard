"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_addScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/addScore.js */ "./src/module/addScore.js");
/* harmony import */ var _module_refresh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/refresh.js */ "./src/module/refresh.js");



const call = () => {
  const dynamicDisplay = document.querySelector('.display');
  (0,_module_refresh_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dynamicDisplay);
  (0,_module_addScore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dynamicDisplay);
};

call();


/***/ }),

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

  storage = (score) => {
    this.scoreList.push(score);
    localStorage.setItem('info', JSON.stringify(this.scoreList));
  };

  create = (scoreContainer) => {
    scoreContainer.innerHTML = '';
    this.scoreList.forEach((score) => {
      const scoreListContainer = document.createElement('div');
      scoreListContainer.classList.add('list-container');
      const name = document.createElement('p');
      name.classList.add('name-added');
      const points = document.createElement('p');
      points.classList.add('score-added');

      name.innerHTML = score.user;
      points.innerHTML = `: ${score.score}`;

      scoreListContainer.append(name);
      scoreListContainer.append(points);
      scoreContainer.append(scoreListContainer);
    });
    return scoreContainer;
  };

  addScores = (userData, scoreData) => {
    fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RPILbm8HelgXKYt5Q7oK/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          score: scoreData,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };

  async getList(scoreContainer) {
    const fetchData = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RPILbm8HelgXKYt5Q7oK/scores/',
    );
    this.fetching(fetchData, scoreContainer);
  }

  async fetching(fetchData, scoreContainer) {
    const toJson = await fetchData.json();
    this.scoreList = toJson.result;
    this.create(scoreContainer);
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNBOztBQUU5QztBQUNBO0FBQ0EsRUFBRSw4REFBVztBQUNiLEVBQUUsK0RBQVU7QUFDWjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZ0M7O0FBRWhDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckIwQjs7QUFFcEQ7QUFDQSxzQkFBc0IsaURBQU07QUFDNUI7QUFDQTtBQUNBLHFEQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiM0I7QUFDTztBQUNRO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixZQUFZOztBQUUxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkNBQTZDO0FBQzdDLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlL2FkZFNjb3JlLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZS9yZWZyZXNoLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZS9zY29yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkTXlTY29yZSBmcm9tICcuL21vZHVsZS9hZGRTY29yZS5qcyc7XG5pbXBvcnQgcmVjZW50U2NvcmUgZnJvbSAnLi9tb2R1bGUvcmVmcmVzaC5qcyc7XG5cbmNvbnN0IGNhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGR5bmFtaWNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcbiAgcmVjZW50U2NvcmUoZHluYW1pY0Rpc3BsYXkpO1xuICBhZGRNeVNjb3JlKGR5bmFtaWNEaXNwbGF5KTtcbn07XG5cbmNhbGwoKTtcbiIsImltcG9ydCBTY29yZXMgZnJvbSAnLi9zY29yZS5qcyc7XG5cbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpO1xuY29uc3Qgc2NvcmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuY29uc3QgYWRkTXlTY29yZSA9ICgpID0+IHtcbiAgY29uc3QgbGlzdFNjb3JlID0gbmV3IFNjb3JlcygpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHNjb3JlSW5wdXQudmFsdWUgPT09ICcnIHx8IG5hbWVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgICAgcmV0dXJuIGFsZXJ0KCdQbGVhc2UgZmlsbCB0aGUgVXNlciBhbmQgU2NvcmUgZmllbGRzJyk7XG4gICAgfVxuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlSW50KHNjb3JlSW5wdXQudmFsdWUsIDEwKSkpIHtcbiAgICAgIHJldHVybiBsaXN0U2NvcmUuYWRkU2NvcmVzKG5hbWVJbnB1dC52YWx1ZSwgc2NvcmVJbnB1dC52YWx1ZSk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgIHJldHVybiBhbGVydCgnU2NvcmUgbXVzdCBiZSBhIG51bWVyaWMgdmFsdWUnKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRNeVNjb3JlO1xuIiwiaW1wb3J0IFNjb3JlcywgeyBzY29yZUNvbnRhaW5lciB9IGZyb20gJy4vc2NvcmUuanMnO1xuXG5jb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gnKTtcbmNvbnN0IGxpc3RTY29yZSA9IG5ldyBTY29yZXMoKTtcbmNvbnN0IHNjb3JlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5zY29yZUxpc3QuaWQgPSAnc2NvcmUtbGlzdCc7XG5zY29yZUNvbnRhaW5lci5hcHBlbmQoc2NvcmVMaXN0KTtcbmNvbnN0IHJlY2VudFNjb3JlID0gYXN5bmMgKCkgPT4ge1xuICByZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxpc3RTY29yZS5nZXRMaXN0KHNjb3JlTGlzdCk7XG4gIH0pO1xuICBsaXN0U2NvcmUuZ2V0TGlzdChzY29yZUxpc3QpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlY2VudFNjb3JlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuZXhwb3J0IGNvbnN0IHNjb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2NvcmVMaXN0ID0gW107XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmZvJykpIHtcbiAgICAgIHRoaXMuc2NvcmVMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5mbycpKTtcbiAgICB9XG4gIH1cblxuICBzdG9yYWdlID0gKHNjb3JlKSA9PiB7XG4gICAgdGhpcy5zY29yZUxpc3QucHVzaChzY29yZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luZm8nLCBKU09OLnN0cmluZ2lmeSh0aGlzLnNjb3JlTGlzdCkpO1xuICB9O1xuXG4gIGNyZWF0ZSA9IChzY29yZUNvbnRhaW5lcikgPT4ge1xuICAgIHNjb3JlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc2NvcmVMaXN0LmZvckVhY2goKHNjb3JlKSA9PiB7XG4gICAgICBjb25zdCBzY29yZUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNjb3JlTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0LWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZS1hZGRlZCcpO1xuICAgICAgY29uc3QgcG9pbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcG9pbnRzLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWFkZGVkJyk7XG5cbiAgICAgIG5hbWUuaW5uZXJIVE1MID0gc2NvcmUudXNlcjtcbiAgICAgIHBvaW50cy5pbm5lckhUTUwgPSBgOiAke3Njb3JlLnNjb3JlfWA7XG5cbiAgICAgIHNjb3JlTGlzdENvbnRhaW5lci5hcHBlbmQobmFtZSk7XG4gICAgICBzY29yZUxpc3RDb250YWluZXIuYXBwZW5kKHBvaW50cyk7XG4gICAgICBzY29yZUNvbnRhaW5lci5hcHBlbmQoc2NvcmVMaXN0Q29udGFpbmVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2NvcmVDb250YWluZXI7XG4gIH07XG5cbiAgYWRkU2NvcmVzID0gKHVzZXJEYXRhLCBzY29yZURhdGEpID0+IHtcbiAgICBmZXRjaChcbiAgICAgICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9SUElMYm04SGVsZ1hLWXQ1UTdvSy9zY29yZXMvJyxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VyOiB1c2VyRGF0YSxcbiAgICAgICAgICBzY29yZTogc2NvcmVEYXRhLFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgYXN5bmMgZ2V0TGlzdChzY29yZUNvbnRhaW5lcikge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL1JQSUxibThIZWxnWEtZdDVRN29LL3Njb3Jlcy8nLFxuICAgICk7XG4gICAgdGhpcy5mZXRjaGluZyhmZXRjaERhdGEsIHNjb3JlQ29udGFpbmVyKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoaW5nKGZldGNoRGF0YSwgc2NvcmVDb250YWluZXIpIHtcbiAgICBjb25zdCB0b0pzb24gPSBhd2FpdCBmZXRjaERhdGEuanNvbigpO1xuICAgIHRoaXMuc2NvcmVMaXN0ID0gdG9Kc29uLnJlc3VsdDtcbiAgICB0aGlzLmNyZWF0ZShzY29yZUNvbnRhaW5lcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==