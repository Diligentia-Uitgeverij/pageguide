import './PageGuide.scss';
import { IButtonDefinition } from './interfaces/IButtonDefinition';
import { IPageGuideItem } from './interfaces/IPageGuideItem';
export declare class PageGuide {
    static readonly CSS_PREFIX: string;
    private gui;
    private items;
    private isActive;
    private activeIndex;
    private activeItem;
    private onStartCallback;
    private onEndCallback;
    constructor(dtoItems: IPageGuideItem[], buttonDefinition?: boolean | IButtonDefinition);
    start(): void;
    step(index?: number): void;
    cleanActiveItem(): void;
    stop(): void;
    onStart(cb: Function): void;
    onEnd(cb: Function): void;
}
