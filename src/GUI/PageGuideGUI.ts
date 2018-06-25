import { PageGuide } from '../PageGuide';
import { IButtonDefinition } from '../interfaces/IButtonDefinition';
import { ButtonGUI } from './ButtonGUI';
import { PageGuideItem } from '../PageGuideItem';
import { IRect } from '../interfaces/IRect';

export class PageGuideGui {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private btnStart: ButtonGUI;
    private target: PageGuideItem;

    /**
     * PageGuideGui
     * @description adds a canvas as backdrop, from which the gui will clear shapes to show the underlying highlighted element.
     * @param { boolean } hasButton
     */
    constructor(private buttonDefinition: boolean|IButtonDefinition = true) {
        this.canvas = document.createElement('canvas');
        this.canvas.className = `${PageGuide.CSS_PREFIX}-backdrop`;
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        if ( ! this.buttonDefinition ) {
            return;
        } else if ( this.buttonDefinition === true ) {
            this.btnStart = new ButtonGUI();
        } else {
            this.btnStart = new ButtonGUI( this.buttonDefinition );
        }

        document.body.appendChild(this.btnStart.markup);
    }

    /**
     * onStart
     * @description function that is called upon when clicking the start button.
     * @param { (this: HTMLElement, ev: MouseEvent): any } callback
     */
    public onStart(callback: (this: HTMLElement, ev: MouseEvent) => any ): void {
        this.btnStart.markup.onclick = callback;
    }

    /**
     * onEnd
     * @description function that is called upon when clicking the canvas.
     * @param { (this: HTMLElement, ev: MouseEvent): any } callback
     */
    public onEnd(callback: (this: HTMLElement, ev: MouseEvent) => any ): void {
        this.canvas.onclick = callback;
    }

    /**
     * start
     * @description Sizes the canvas and sizes it to fully cover either the window, either the contents.
     * @returns { void }
     * @memberof PageGuideGui
     */
    public start(): void {
        this.update();
        this.canvas.style.display = 'block';
        this.canvas.classList.add('active');
    };

    public update():void {
        this.renderBackdrop();

        if ( typeof this.target === 'undefined' || typeof this.target.targets === 'undefined') {
            return;
        }
        for (let i=0; i<this.target.targets.length; i++) {
            const element = this.target.targets.item(i);
            const tmpRect = element.getBoundingClientRect();
            const elementRect: IRect = {
                top: tmpRect.top - this.target.padding,
                left: tmpRect.left - this.target.padding,
                width: tmpRect.width + this.target.padding * 2,
                height: tmpRect.height + this.target.padding * 2,
            }
            const maskingRect: IRect = {
                top: elementRect.top,
                left: elementRect.left,
                width: elementRect.width,
                height: elementRect.height,
            }
            const radius = Math.max(elementRect.width, elementRect.height) / 2;
            const radiusX = elementRect.width / 2;
            const radiusY = elementRect.height / 2;

            this.ctx.save();
            this.ctx.beginPath();
            switch ( this.target.shape ) {
                case PageGuideItem.CIRCLE:
                    this.ctx.arc(
                        elementRect.left + elementRect.width / 2,
                        elementRect.top + elementRect.height / 2,
                        radius,
                        0,
                        2 * Math.PI,
                        false
                    );
                    maskingRect.top = (elementRect.top + elementRect.height / 2) - radius;
                    maskingRect.left = (elementRect.left + elementRect.width / 2) - radius;
                    maskingRect.width = radius * 2;
                    maskingRect.height = radius * 2;
                    break;
                case PageGuideItem.ELLIPSE:
                    this.ctx.ellipse(
                        elementRect.left + radiusX,
                        elementRect.top + radiusY,
                        radiusX,
                        radiusY,
                        0,
                        0,
                        2 * Math.PI,
                    );
                    break;
                case PageGuideItem.ROUNDED_RECT:
                    this.roundRect(
                        this.ctx,
                        elementRect.left,
                        elementRect.top,
                        elementRect.width,
                        elementRect.height,
                        5,
                        true,
                        false
                    );
                    break;
                default:
                    this.ctx.rect(
                        elementRect.left,
                        elementRect.top,
                        elementRect.width,
                        elementRect.height,
                    );
            }
            this.ctx.clip();
            this.ctx.clearRect(
                maskingRect.left,
                maskingRect.top,
                maskingRect.width,
                maskingRect.height,
            );
            this.ctx.restore();
        }
    }

    private roundRect(ctx, x, y, width, height, radius, fill, stroke): void {
        if (typeof stroke == 'undefined') {
          stroke = true;
        }
        if (typeof radius === 'undefined') {
          radius = 5;
        }
        if (typeof radius === 'number') {
          radius = {tl: radius, tr: radius, br: radius, bl: radius};
        } else {
          var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
          for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
          }
        }
        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }

    }

    public stop(): void {
        this.canvas.classList.remove('active');
        setTimeout(() => this.canvas.style.display = '', 500);
    }

    public highlight(target: PageGuideItem): void {
        this.target = target;
        this.update();
    }

    private renderBackdrop(): void {
        const stageWidth: number = window.innerWidth;
        const stageHeight: number = window.innerHeight;

        this.canvas.setAttribute('width', `${stageWidth}px`);
        this.canvas.setAttribute('height', `${stageHeight}px`);

        const gradient = this.ctx.createRadialGradient(
            stageWidth/2,
            stageHeight/2,
            0,
            stageWidth / 2,
            stageHeight/2,
            Math.max(stageWidth, stageHeight)
        );
        gradient.addColorStop(0, 'rgba(0,0,0,0.5)');
        gradient.addColorStop(1, 'rgba(0,0,0,0.85)');

        this.ctx.clearRect(0, 0, stageWidth, stageHeight);
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, stageWidth, stageHeight);
    }
}
