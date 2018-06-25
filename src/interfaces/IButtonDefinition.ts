export interface IButtonDefinition {
	/**
	 * @default 'absolute'
	 * @type {string}
	 */
	position?: string;
	top?: number|string;
	right?: number|string;
	bottom?: number|string;
	left?: number|string;
	content?: string;
	style?: {[key: string]: string};
}
