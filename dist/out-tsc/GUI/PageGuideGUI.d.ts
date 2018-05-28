import { IButtonDefinition } from '../interfaces/IButtonDefinition';
export declare class PageGuideGui {
    private buttonDefinition;
    private canvas;
    private ctx;
    private btnStart;
    private targets;
    constructor(buttonDefinition?: boolean | IButtonDefinition);
    onStart(callback: (this: HTMLElement, ev: MouseEvent) => any): void;
    onEnd(callback: (this: HTMLElement, ev: MouseEvent) => any): void;
    start(): void;
    update(): void;
    stop(): void;
    highlight(elements: NodeListOf<HTMLElement>): void;
    private renderBackdrop();
}
