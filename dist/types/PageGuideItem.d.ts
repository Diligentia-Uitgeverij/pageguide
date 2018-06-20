import { IPageGuideItem } from "./interfaces/IPageGuideItem";
export declare class PageGuideItem implements IPageGuideItem {
    content: string;
    index: number;
    collectionLength: number;
    element: string;
    title: string;
    position: string;
    shape: string;
    padding: number;
    static readonly CSS_PREFIX: string;
    static readonly RECT: string;
    static readonly ROUNDED_RECT: string;
    static readonly CIRCLE: string;
    static readonly ELLIPSE: string;
    static readonly TOP: string;
    static readonly RIGHT: string;
    static readonly BOTTOM: string;
    static readonly LEFT: string;
    private gui;
    targets: NodeListOf<HTMLElement>;
    constructor(content: string, index: number, collectionLength: number, element?: string, title?: string, position?: string, shape?: string, padding?: number);
    draw(cb: Function): void;
    cleanup(): void;
    update(): void;
    onExit(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void;
    onPrevious(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void;
    onNext(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void;
}
