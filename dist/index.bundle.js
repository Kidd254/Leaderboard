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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNBOztBQUU5QztBQUNBO0FBQ0EsRUFBRSw4REFBVztBQUNiLEVBQUUsK0RBQVU7QUFDWjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZ0M7O0FBRWhDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckIwQjs7QUFFcEQ7QUFDQSxzQkFBc0IsaURBQU07QUFDNUI7QUFDQTtBQUNBLHFEQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiM0I7QUFDTztBQUNRO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLDhDQUE4QztBQUM5QyxVQUFVO0FBQ1YsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZS9hZGRTY29yZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGUvcmVmcmVzaC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGUvc2NvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZE15U2NvcmUgZnJvbSAnLi9tb2R1bGUvYWRkU2NvcmUuanMnO1xuaW1wb3J0IHJlY2VudFNjb3JlIGZyb20gJy4vbW9kdWxlL3JlZnJlc2guanMnO1xuXG5jb25zdCBjYWxsID0gKCkgPT4ge1xuICBjb25zdCBkeW5hbWljRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Jyk7XG4gIHJlY2VudFNjb3JlKGR5bmFtaWNEaXNwbGF5KTtcbiAgYWRkTXlTY29yZShkeW5hbWljRGlzcGxheSk7XG59O1xuXG5jYWxsKCk7XG4iLCJpbXBvcnQgU2NvcmVzIGZyb20gJy4vc2NvcmUuanMnO1xuXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKTtcbmNvbnN0IHNjb3JlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbmNvbnN0IGFkZE15U2NvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3RTY29yZSA9IG5ldyBTY29yZXMoKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChzY29yZUlucHV0LnZhbHVlID09PSAnJyB8fCBuYW1lSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICAgIHJldHVybiBhbGVydCgnUGxlYXNlIGZpbGwgdGhlIFVzZXIgYW5kIFNjb3JlIGZpZWxkcycpO1xuICAgIH1cbiAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZUludChzY29yZUlucHV0LnZhbHVlLCAxMCkpKSB7XG4gICAgICByZXR1cm4gbGlzdFNjb3JlLmFkZFNjb3JlcyhuYW1lSW5wdXQudmFsdWUsIHNjb3JlSW5wdXQudmFsdWUpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICByZXR1cm4gYWxlcnQoJ1Njb3JlIG11c3QgYmUgYSBudW1lcmljIHZhbHVlJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTXlTY29yZTtcbiIsImltcG9ydCBTY29yZXMsIHsgc2NvcmVDb250YWluZXIgfSBmcm9tICcuL3Njb3JlLmpzJztcblxuY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoJyk7XG5jb25zdCBsaXN0U2NvcmUgPSBuZXcgU2NvcmVzKCk7XG5jb25zdCBzY29yZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuc2NvcmVMaXN0LmlkID0gJ3Njb3JlLWxpc3QnO1xuc2NvcmVDb250YWluZXIuYXBwZW5kKHNjb3JlTGlzdCk7XG5jb25zdCByZWNlbnRTY29yZSA9IGFzeW5jICgpID0+IHtcbiAgcmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsaXN0U2NvcmUuZ2V0TGlzdChzY29yZUxpc3QpO1xuICB9KTtcbiAgbGlzdFNjb3JlLmdldExpc3Qoc2NvcmVMaXN0KTtcbn07XG5leHBvcnQgZGVmYXVsdCByZWNlbnRTY29yZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmV4cG9ydCBjb25zdCBzY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Jyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNjb3JlTGlzdCA9IFtdO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5mbycpKSB7XG4gICAgICB0aGlzLnNjb3JlTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZm8nKSk7XG4gICAgfVxuICB9XG5cbiAgICBzdG9yYWdlPShzY29yZSkgPT4ge1xuICAgICAgdGhpcy5zY29yZUxpc3QucHVzaChzY29yZSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5mbycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc2NvcmVMaXN0KSk7XG4gICAgfVxuXG4gICAgY3JlYXRlPShzY29yZUNvbnRhaW5lcikgPT4ge1xuICAgICAgc2NvcmVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLnNjb3JlTGlzdC5mb3JFYWNoKChzY29yZSkgPT4ge1xuICAgICAgICBjb25zdCBzY29yZUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2NvcmVMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZS1hZGRlZCcpO1xuICAgICAgICBjb25zdCBwb2ludHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBvaW50cy5jbGFzc0xpc3QuYWRkKCdzY29yZS1hZGRlZCcpO1xuXG4gICAgICAgIG5hbWUuaW5uZXJIVE1MID0gc2NvcmUudXNlcjtcbiAgICAgICAgcG9pbnRzLmlubmVySFRNTCA9IHNjb3JlLnNjb3JlO1xuXG4gICAgICAgIHNjb3JlTGlzdENvbnRhaW5lci5hcHBlbmQobmFtZSk7XG4gICAgICAgIHNjb3JlTGlzdENvbnRhaW5lci5hcHBlbmQocG9pbnRzKTtcbiAgICAgICAgc2NvcmVDb250YWluZXIuYXBwZW5kKHNjb3JlTGlzdENvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzY29yZUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAgYWRkU2NvcmVzID0gKHVzZXJEYXRhLCBzY29yZURhdGEpID0+IHtcbiAgICAgICBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvUlBJTGJtOEhlbGdYS1l0NVE3b0svc2NvcmVzLycsIHtcbiAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICB1c2VyOiB1c2VyRGF0YSxcbiAgICAgICAgICAgc2NvcmU6IHNjb3JlRGF0YSxcbiAgICAgICAgIH0pLFxuICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgfSxcbiAgICAgICB9KTtcbiAgICAgfVxuXG4gICAgIGFzeW5jIGdldExpc3Qoc2NvcmVDb250YWluZXIpIHtcbiAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvUlBJTGJtOEhlbGdYS1l0NVE3b0svc2NvcmVzLycpO1xuICAgICAgIHRoaXMuZmV0Y2hpbmcoZmV0Y2hEYXRhLCBzY29yZUNvbnRhaW5lcik7XG4gICAgIH1cblxuICAgICBhc3luYyBmZXRjaGluZyhmZXRjaERhdGEsIHNjb3JlQ29udGFpbmVyKSB7XG4gICAgICAgY29uc3QgdG9Kc29uID0gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKTtcbiAgICAgICB0aGlzLnNjb3JlTGlzdCA9IHRvSnNvbi5yZXN1bHQ7XG4gICAgICAgdGhpcy5jcmVhdGUoc2NvcmVDb250YWluZXIpO1xuICAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=