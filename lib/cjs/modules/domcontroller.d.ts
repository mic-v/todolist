import { Data } from "./data";
import { View } from "./view";
export declare class DOMcontroller {
    data: Data;
    view: View;
    constructor();
    setupEventListeners(): void;
    openTaskForm(): void;
    closeTaskForm(): void;
    submitTaskForm(e: Event): void;
    static test(): void;
}
