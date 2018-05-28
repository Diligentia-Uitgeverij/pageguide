import { PageGuideItem } from './PageGuideItem';
import { PageGuideGui } from './GUI/PageGuideGUI';

import './PageGuide.scss';
import { IButtonDefinition } from './interfaces/IButtonDefinition';
import { IPageGuideItem } from './interfaces/IPageGuideItem';

export class PageGuide {
    public static readonly CSS_PREFIX: string = 'page-guide';

    private gui: PageGuideGui;
    private items: PageGuideItem[];
    private isActive: boolean = false;
    private activeIndex: number = 0;
    private activeItem: PageGuideItem;

    private onStartCallback: Function;
    private onEndCallback: Function;

    /**
     * creates a new PageGuide
     * @param { IPageGuideItem[] } dtoItems a list of dtoItems to be converted into PageGuideItems
     */
    constructor(dtoItems: IPageGuideItem[], buttonDefinition: boolean|IButtonDefinition = true) {
        this.gui = new PageGuideGui( buttonDefinition );

        this.items = dtoItems
            .filter( dto => typeof dto.element === 'undefined' || document.querySelectorAll(dto.element).length > 0)
            .map( (dto, index, list) => {
                const item = new PageGuideItem(dto.content, index, list.length, dto.element, dto.title, dto.position);

                item.onExit(()=>{ this.stop() });
                item.onPrevious(()=>{ this.activeIndex --; this.step(); });
                item.onNext(()=>{ this.activeIndex ++; this.step(); });

                return item;
            });

        if ( buttonDefinition !== false ) {
            this.gui.onStart(() => this.start());
        }
        
        this.gui.onEnd(() => this.stop());

        window.onkeydown = (evt) => {
            if (! this.isActive || evt.altKey  || evt.shiftKey  || evt.ctrlKey  || evt.metaKey ) {
                return;
            }
            switch (evt.key) {
                case 'ArrowUp':
                case 'Up':
                case 'ArrowLeft':
                case 'Left':
                    this.activeIndex --; 
                    this.step();
                    evt.preventDefault();
                    break;
                case 'ArrowDown':
                case 'Down':
                case 'ArrowRight':
                case 'Right':
                case 'Enter':
                    this.activeIndex ++; 
                    this.step();
                    evt.preventDefault();
                    break;
                case 'Escape':
                case 'Esc':
                    this.stop();
                    evt.preventDefault();
                    break;
            }
        };
        window.onresize = (evt) => {
            if (! this.isActive) {
                return;
            }

            this.gui.update();

            if (typeof this.activeItem !== 'undefined') {
                this.activeItem.update();
            }
        };
    }

    /**
     * start
     * @description starts the PageGuide
     * @memberof PageGuide
     */
    public start(): void {
        this.isActive = true;
        this.gui.start();

        this.step();

        if (typeof this.onStartCallback !== 'undefined') {
            this.onStartCallback();
        }
    }

    /**
     * step
     * @description Renders the active step.
     * @param { number } index [OPTIONAL] the step you want to activate
     * @returns {void} 
     * @memberof PageGuide
     */
    public step(index?: number): void {
        if (typeof index !== 'undefined' && index >= 0 && index <= this.items.length - 1) {
            this.activeIndex = index;
        }
        if (typeof this.activeItem !== 'undefined') {
            this.cleanActiveItem();
        }
        if (this.activeIndex < 0 || this.activeIndex >= this.items.length) {
            return this.stop();
        }
        
        this.activeItem = this.items[this.activeIndex];
        
        this.activeItem.draw(() => {
            this.gui.highlight( this.activeItem.targets );
        });
    }

    /**
     * cleanActiveItem
     * @description If the active item is defiend, clean it up, and set it to undefined.
     * @memberof PageGuide
     */
    public cleanActiveItem(): void {
        if (typeof this.activeItem === 'undefined') {
            return
        }
        
        this.activeItem.cleanup();
        this.activeItem = undefined;
    }

    /**
     * stop
     * @description stops the PageGuide
     * @memberof PageGuide
     */
    public stop(): void {
        this.isActive = false;
        this.gui.stop();
        this.cleanActiveItem();
        this.activeIndex = 0;

        if (typeof this.onEndCallback !== 'undefined') {
            this.onEndCallback();
        }
    }

    /**
     * onStart
     * @description adds a callback function to fire when the pageGuide is started by the user.
     * @param {Function} cb 
     * @memberof PageGuide
     */
    public onStart(cb: Function) {
        this.onStartCallback = cb;
    }
    /**
     * onEnd
     * @description adds a callback function to fire when the pageGuide reaches the end, or is stopped by the user.
     * @param {Function} cb 
     * @memberof PageGuide
     */
    public onEnd(cb: Function) {
        this.onEndCallback = cb;
    }
}