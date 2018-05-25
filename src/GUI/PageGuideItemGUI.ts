import { PageGuideItem } from "../PageGuideItem";
import { PageGuide } from "../PageGuide";

import Popper, { PopperOptions } from 'popper.js';
import { Placement } from 'popper.js';

export class PageGuideItemGUI {
    public markup: HTMLElement;
    private btnExit: HTMLButtonElement;
    private btnPrevious: HTMLButtonElement;
    private btnNext: HTMLButtonElement;
    private buttons: HTMLElement;
    private content: HTMLElement;
    private counter: HTMLElement;
    private title: HTMLElement;
    private arrow: HTMLElement;

    private popper: Popper;
    private popperShifts: any = {
        top: [ 'bottom', 'left', 'right' ],
        right: [ 'left', 'top', 'bottom' ],
        bottom: [ 'top', 'left', 'right' ],
        left: [ 'right', 'top', 'bottom' ],
    }

    constructor(private pageGuideItem: PageGuideItem) {
        this.markup = document.createElement('article');
        this.btnExit = document.createElement('button');
        this.btnPrevious = document.createElement('button');
        this.btnNext = document.createElement('button');
        this.buttons = document.createElement('section');
        this.content = document.createElement('section');
        this.title = document.createElement('h1');
        this.counter = document.createElement('section');
        this.arrow = document.createElement('div');

        this.markup.className = `${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}`;
        this.arrow.className = `${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}-arrow`;
        this.content.className = `${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}-content`;
        this.counter.className = `${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}-counter`;
        this.buttons.className = `${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}-buttons`;
        this.btnExit.className = `${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}-button ${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}-button-exit`;
        this.btnPrevious.className = `${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}-button ${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}-button-previous`;
        this.btnNext.className = `${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}-button ${PageGuide.CSS_PREFIX}-${PageGuideItem.CSS_PREFIX}-button-next`;

        this.buttons.appendChild(this.btnPrevious);
        this.buttons.appendChild(this.btnNext);

        this.markup.appendChild(this.arrow);
        this.markup.appendChild(this.btnExit);
        this.markup.appendChild(this.title);
        this.markup.appendChild(this.counter);
        this.markup.appendChild(this.content);
        this.markup.appendChild(this.buttons);

        this.title.innerHTML = this.pageGuideItem.title;
        this.content.innerHTML = this.pageGuideItem.content;
        this.btnExit.innerHTML = '&times;';
        this.btnPrevious.innerHTML = '&laquo;';
        this.btnNext.innerHTML = '&raquo;';
        this.counter.innerHTML = `${this.pageGuideItem.index + 1} / ${this.pageGuideItem.collentionLength}`;

        if (this.pageGuideItem.index === 0) {
            this.btnPrevious.setAttribute('disabled', 'disabled');
        }
        if (this.pageGuideItem.index === this.pageGuideItem.collentionLength - 1) {
            this.btnNext.setAttribute('disabled', 'disabled');
        }
    }

    public position() {
        const popupBox = this.markup.getBoundingClientRect();
        const popupCenter: {x: number, y: number } = {
            x: popupBox.left + popupBox.width / 2,
            y: popupBox.top + popupBox.height / 2,
        };

        let left: number = 0;
        let top: number = 0;
        let position = this.pageGuideItem.position;

        this.arrow.style.top = '';
        this.arrow.style.right = '';
        this.arrow.style.bottom = '';
        this.arrow.style.left = '';

        if (typeof this.pageGuideItem.targets === 'undefined' || this.pageGuideItem.targets.length === 0 || position === 'center') {
            left = (window.innerWidth - popupBox.width) / 2;
            top = (window.innerHeight - popupBox.height) / 2;
            this.pageGuideItem.position = 'center';

            this.markup.setAttribute('x-placement', this.pageGuideItem.position);
            this.markup.style.left = `${ left >> 0 }px`;
            this.markup.style.top = `${ top >> 0 }px`;
        } else {
            const target: HTMLElement = this.pageGuideItem.targets[0];
            const targetBox = target.getBoundingClientRect();

            this.popper = new Popper(target, this.markup, {
                placement: position as Placement,                
                modifiers: {
                    arrow: { element: this.arrow },
                    flip: {
                        behavior: this.popperShifts[position]
                    },
                },
            });
        }
    }
    public update() {
        if (typeof this.popper !== 'undefined') {
            this.popper.update();
        } else {
            this.position();
        }
    }


    public onExit(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void { this.btnExit.onclick = callback; }
    public onPrevious(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void { this.btnPrevious.onclick = callback; }
    public onNext(callback: ((this: HTMLElement, ev: MouseEvent) => any) | null): void { this.btnNext.onclick = callback; }
}
