import { PageGuideItem } from "../PageGuideItem";
export declare class PageGuideItemGUI {
    private pageGuideItem;
    markup: HTMLElement;
    private btnExit;
    private btnPrevious;
    private btnNext;
    private buttons;
    private content;
    private counter;
    private title;
    private arrow;
    private popper;
    private popperShifts;
    constructor(pageGuideItem: PageGuideItem);
    position(): void;
    update(): void;
    onExit(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void;
    onPrevious(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void;
    onNext(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void;
}
