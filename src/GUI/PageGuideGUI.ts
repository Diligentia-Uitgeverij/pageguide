import { PageGuide } from '../PageGuide';
import { IButtonDefinition } from '../interfaces/IButtonDefinition';
import { ButtonGUI } from './ButtonGUI';

export class PageGuideGui {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private btnStart: ButtonGUI;
    private targets: NodeListOf<HTMLElement>;

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
        this.targets = undefined;
        
        this.update();
        this.canvas.style.display = 'block';
        this.canvas.classList.add('active');
    };

    public update():void {
        this.renderBackdrop();

        if ( typeof this.targets === 'undefined') {
            return;
        }
        for (var i=0; i<this.targets.length; i++) {
            var element = this.targets.item(i);
            var elementRect = element.getBoundingClientRect();
            
            this.ctx.clearRect(
                elementRect.left,
                elementRect.top,
                elementRect.width,
                elementRect.height,
            );
        }
    }

    public stop(): void {
        this.canvas.classList.remove('active');
        setTimeout(() => this.canvas.style.display = '', 500);
    }

    public highlight(elements: NodeListOf<HTMLElement>): void {
        this.targets = elements;
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