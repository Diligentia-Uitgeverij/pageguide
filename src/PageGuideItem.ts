import { PageGuideItemGUI } from "./GUI/PageGuideItemGUI";
import { IPageGuideItem } from "./interfaces/IPageGuideItem";

export class PageGuideItem implements IPageGuideItem {
    public static readonly CSS_PREFIX: string = 'item';

    private gui: PageGuideItemGUI;
    public targets: NodeListOf<HTMLElement>;

    /**
     * Creates a new PageGuideItem
     * @param { string } content Contents of the popup, can be plaintext or HTML
     * @param { number } index Index of the item in the collection
     * @param { number } collentionLength Length of the collection
     * @param { string } element [OPTIONAL] element query selector
     * @param { string } title [OPTIONAL] title of the popup
     * @param { string } position [OPTIONAL] position, defaults to right
     */
    constructor(
        public content: string, 
        public index: number,
        public collentionLength: number,
        public element?: string, 
        public title: string = '', 
        public position: string = 'bottom',
    ) {
        if (typeof this.element !== 'undefined' && this.element !== '') {
            this.targets = document.querySelectorAll(this.element);
        }

        this.gui = new PageGuideItemGUI( this );
    }

    /**
     * draw
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
     * cleanup
     * @description removes the PageGuideItem from the document.body
     * @memberof PageGuideItem
     */
    public cleanup(): void {
        document.body.removeChild( this.gui.markup );
    }
    /**
     * update
     * @description updates the GUI, repositions when needed
     * @memberof PageGuideItem
     */
    public update(): void {
        this.gui.update();
    }

    /**
     * onExit
     * @description fires a callback when the user closes the PageGuideItem
     * @param {(((this: HTMLElement, ev: MouseEvent) => any) | null)} callback 
     * @memberof PageGuideItem
     */
    public onExit( callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void {
        this.gui.onExit(callback);
    }

    /**
     * onPrevious
     * @description fires a callback when the user clicks the previous button
     * @param {(((this: HTMLElement, ev: MouseEvent) => any) | null)} callback 
     * @memberof PageGuideItem
     */
    public onPrevious( callback: ((this: HTMLElement, ev: MouseEvent) => any) | null ): void {
        this.gui.onPrevious(callback);
    }
    /**
     * onNext
     * @description fires a callback when the user clicks the next button
     * @param {(((this: HTMLElement, ev: MouseEvent) => any) | null)} callback 
     * @memberof PageGuideItem
     */
    public onNext( callback: ((this: HTMLElement, ev: MouseEvent) => any) | null ): void {
        this.gui.onNext(callback);
    }
}