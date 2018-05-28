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


    public cleanup(): void {
        document.body.removeChild( this.gui.markup );
    }
    public update(): void {
        this.gui.update();
    }

    public onExit( callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void {
        this.gui.onExit(callback);
    }
    public onPrevious( callback: ((this: HTMLElement, ev: MouseEvent) => any) | null ): void {
        this.gui.onPrevious(callback);
    }
    public onNext( callback: ((this: HTMLElement, ev: MouseEvent) => any) | null ): void {
        this.gui.onNext(callback);
    }
}