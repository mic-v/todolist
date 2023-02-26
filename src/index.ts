import './styles/input.css';

import { compareAsc, format } from 'date-fns'

import { View } from  "./modules/view";
import { DOMcontroller } from "./modules/domcontroller";

let controller = new DOMcontroller();


controller.setupProjectTasks();
controller.setupEventListeners();

const text: string = 'Hello TypeScript';
