import { PageGuideItem } from './PageGuideItem';
import { PageGuideGui } from './GUI/PageGuideGUI';

import './PageGuide.scss';
import { IButtonDefinition } from './interfaces/IButtonDefinition';

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
     * @param { any[] } dtoItems a list of dtoItems to be converted into PageGuideItems
     */
    constructor(dtoItems: any[], buttonDefinition: boolean|IButtonDefinition = true) {
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

    public start(): void {
        this.isActive = true;
        this.gui.start();

        this.step();

        if (typeof this.onStartCallback !== 'undefined') {
            this.onStartCallback();
        }
    }

    public step(): void {
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

    public cleanActiveItem(): void {
        if (typeof this.activeItem === 'undefined') {
            return
        }
        
        this.activeItem.cleanup();
        this.activeItem = undefined;
    }

    public stop(): void {
        this.isActive = false;
        this.gui.stop();
        this.cleanActiveItem();
        this.activeIndex = 0;

        if (typeof this.onEndCallback !== 'undefined') {
            this.onEndCallback();
        }
    }

    public onStart(cb: Function) {
        this.onStartCallback = cb;
    }

    public onEnd(cb: Function) {
        this.onEndCallback = cb;
    }
}