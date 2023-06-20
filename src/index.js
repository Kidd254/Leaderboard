import './style.css';
import { addScore, formElement } from './module/addScore.js';

formElement.addEventListener('submit', addScore);
