import { IPageGuideItem } from "./interfaces/IPageGuideItem";
export declare class PageGuideItem implements IPageGuideItem {
    content: string;
    index: number;
    collectionLength: number;
    element: string;
    title: string;
    position: string;
    static readonly CSS_PREFIX: string;
    private gui;
    targets: NodeListOf<HTMLElement>;
    constructor(content: string, index: number, collectionLength: number, element?: string, title?: string, position?: string);
    draw(cb: Function): void;
    cleanup(): void;
    update(): void;
    onExit(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void;
    onPrevious(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void;
    onNext(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void;
}
