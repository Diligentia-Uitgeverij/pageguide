import { PageGuideItem } from './PageGuideItem';
import { PageGuideGui } from './GUI/PageGuideGUI';

import './PageGuide.scss';
import { IButtonDefinition } from './interfaces/IButtonDefinition';
import { IPageGuideItem } from './interfaces/IPageGuideItem';

/**
 * @class PageGuide
 * @description Diligentia Uitgeverij's PageGuide uses a Canvas to draw a backdrop, and hightlight targeted elements.
 * @author Peter Delvaux <peter.delvaux@diligentia-uitgeverij.be>
 * @since 28/05/2018
 * @export PageGuide
 */
export class PageGuide {
    /**
     * @description prefix used for the creation of CSS-classes
     * @static
     * @type {string}
     * @memberof PageGuide
     */
    public static readonly CSS_PREFIX: string = 'page-guide';

    /**
     * @description Graphical User Interface of the PageGuide
     * @private
     * @type {PageGuideGui}
     * @memberof PageGuide
     */
    private gui: PageGuideGui;
    /**
     * @description list of items to be displayed
     * @private
     * @type {PageGuideItem[]}
     * @memberof PageGuide
     */
    private items: PageGuideItem[];
    /**
     * @description if the PageGuide is active
     * @private
     * @type {boolean}
     * @memberof PageGuide
     */
    private isActive: boolean = false;
    /**
     * @description Index of the item which is currently displayed
     * @private
     * @type {number}
     * @memberof PageGuide
     */
    private activeIndex: number = 0;
    /**
     * @description The currently active item
     * @private
     * @type {PageGuideItem}
     * @memberof PageGuide
     */
    private activeItem: PageGuideItem;

    /**
     * @description callBack functien to be called on start
     * @private
     * @type {Function}
     * @memberof PageGuide
     */
    private onStartCallback: Function;
    /**
     * @description callBack functien to be called on stop
     * @private
     * @type {Function}
     * @memberof PageGuide
     */
    private onEndCallback: Function;

    /**
     * @description creates a new PageGuide
     * @param { IPageGuideItem[] } dtoItems a list of dtoItems to be converted into PageGuideItems
     * @param { IButtonDefinition | boolean} buttonDefinition an optional ButtonDefinition, or true for the default button, or false for no button.
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