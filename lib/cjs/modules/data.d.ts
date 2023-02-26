export declare class Data {
    projects: string[];
    constructor(message: string);
    displayText(message: string): void;
    displayTaskForm(element: string): void;
    getProjects(): string[];
    static test(): void;
}
