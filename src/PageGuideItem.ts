import { PageGuideItemGUI } from "./GUI/PageGuideItemGUI";
import { IPageGuideItem } from "./interfaces/IPageGuideItem";

/**
 * @class PageGuideItem
 * @description A single item to display information.
 * @author Peter Delvaux <peter.delvaux@diligentia-uitgeverij.be>
 * @since 28/05/2018
 * @export PageGuideItem
 */
export class PageGuideItem implements IPageGuideItem {
    /**
     * @description prefix used for the creation of CSS-classes
     * @static
     * @type {string}
     * @memberof PageGuideItem
     */
    public static readonly CSS_PREFIX: string = 'item';

    public static readonly RECT: string = 'rect';
    public static readonly ROUNDED_RECT: string = 'rounded_rect';
    public static readonly CIRCLE: string = 'circle';
    public static readonly ELLIPSE: string = 'ellipse';

    public static readonly TOP: string = 'top';
    public static readonly RIGHT: string = 'right';
    public static readonly BOTTOM: string = 'bottom';
    public static readonly LEFT: string = 'left';

    /**
     * @description Graphical User Interface of the PageGuideItem
     * @private
     * @type {PageGuideItemGUI}
     * @memberof PageGuideItem
     */
    private gui: PageGuideItemGUI;
    /**
     * @description NodeList of all found targets, can be undefined or empty.
     * @type {NodeListOf<HTMLElement>}
     * @memberof PageGuideItem
     */
    public targets: NodeListOf<HTMLElement>;

    /**
     * @description Creates a new PageGuideItem
     * @param { string } content Contents of the popup, can be plaintext or HTML
     * @param { number } index Index of the item in the collection
     * @param { number } collectionLength Length of the collection
     * @param { string } element [OPTIONAL] element query selector
     * @param { string } title [OPTIONAL] title of the popup
     * @param { 'top'|'right'|'bottom'|'left' } position [OPTIONAL] position, defaults to bottom
     * @param { 'rect'|'rounded_rect'|'circle'|'ellipse' } shape [OPTIONAL] shape of the highlight, defaults to rect
     * @param { number } padding [OPTIONAL] A padding around the element and the mask.
     */
    constructor(
        public content: string, 
        public index: number,
        public collectionLength: number,
        public element?: string, 
        public title: string = '', 
        public position: string = PageGuideItem.BOTTOM,
        public shape: string = PageGuideItem.RECT,
        public padding: number = 0,
    ) {
        if (typeof this.element !== 'undefined' && this.element !== '') {
            this.targets = document.querySelectorAll(this.element);
        }

        this.gui = new PageGuideItemGUI( this );
    }

    /**
     * @description Draws the PageGuideItem on the document.body
     * @param {Function} cb a callback function, so it will work on IE11 as well
     * @returns {void} 
     * @memberof PageGuideItem
     */
    public draw(cb: Function): void {
        if (typeof this.targets !== 'undefined' && this.targets.length === 0) {
            return;
        }

        if (typeof this.targets !== 'undefined' && this.targets.length > 0) {
            this.targets[0].scrollIntoView({block: 'center', inline: 'nearest'});
        }

        setTimeout(() => {
            document.body.appendChild( this.gui.markup );
            this.gui.position();

            cb();
        }, 0);
    }

    /**
     * @description removes the PageGuideItem from the document.body
     * @memberof PageGuideItem
     */
    public cleanup(): void {
        document.body.removeChild( this.gui.markup );
    }
    /**
     * @description updates the GUI, repositions when needed
     * @memberof PageGuideItem
     */
    public update(): void {
        this.gui.update();
    }

    /**
     * @description fires a callback when the user closes the PageGuideItem
     * @param {(((this: HTMLElement, ev: MouseEvent) => any) | null)} callback 
     * @memberof PageGuideItem
     */
    public onExit( callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void {
        this.gui.onExit(callback);
    }

    /**
     * @description fires a callback when the user clicks the previous button
     * @param {(((this: HTMLElement, ev: MouseEvent) => any) | null)} callback 
     * @memberof PageGuideItem
     */
    public onPrevious( callback: ((this: HTMLElement, ev: MouseEvent) => any) | null ): void {
        this.gui.onPrevious(callback);
    }
    /**
     * @description fires a callback when the user clicks the next button
     * @param {(((this: HTMLElement, ev: MouseEvent) => any) | null)} callback 
     * @memberof PageGuideItem
     */
    public onNext( callback: ((this: HTMLElement, ev: MouseEvent) => any) | null ): void {
        this.gui.onNext(callback);
    }
}