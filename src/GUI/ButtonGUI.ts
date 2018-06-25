import { IButtonDefinition } from "../interfaces/IButtonDefinition";
import { PageGuide } from "../PageGuide";

export class ButtonGUI implements IButtonDefinition {
	public position: string = 'absolute';
	public top: number|string = 32;
	public right: number|string = 32;
	public bottom: number|string = 'initial';
	public left: number|string = 'initial';
	public content: string = 'i';
	public style: {[key: string]: string} = {
		'padding-right': '2px',
	};

	public markup: HTMLButtonElement;

	/*
	 * position: absolute;
	 * top: 32px;
	 * right: 32px;
	 */

	constructor(dto?: IButtonDefinition) {
		if (typeof dto !== 'undefined') {
			Object.keys(dto).forEach(key => this[key] = dto[key]);
		}

		this.markup = document.createElement('button');
		this.markup.innerHTML = this.content;
		this.markup.classList.add( `${PageGuide.CSS_PREFIX}-button-start` );
		this.markup.style.position = this.position;
		this.markup.style.top = this.toStyleString( this.top );
		this.markup.style.right = this.toStyleString( this.right );
		this.markup.style.bottom = this.toStyleString( this.bottom );
		this.markup.style.left = this.toStyleString( this.left );

		Object.keys(this.style).forEach(key => this.markup.style.setProperty(key, this.style[key]) );
	}

	private toStyleString( value:string|number ):string {
		return typeof value === 'number' ? `${value}px` : value;
	}
}
