import { IButtonDefinition } from '../interfaces/IButtonDefinition';
import { PageGuideItem } from '../PageGuideItem';
export declare class PageGuideGui {
    private buttonDefinition;
    private canvas;
    private ctx;
    private btnStart;
    private target;
    constructor(buttonDefinition?: boolean | IButtonDefinition);
    onStart(callback: (this: HTMLElement, ev: MouseEvent) => any): void;
    onEnd(callback: (this: HTMLElement, ev: MouseEvent) => any): void;
    start(): void;
    update(): void;
    private roundRect(ctx, x, y, width, height, radius, fill, stroke);
    stop(): void;
    highlight(target: PageGuideItem): void;
    private renderBackdrop();
}
