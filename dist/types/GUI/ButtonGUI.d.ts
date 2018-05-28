import { IButtonDefinition } from "../interfaces/IButtonDefinition";
export declare class ButtonGUI implements IButtonDefinition {
    position: string;
    top: number | string;
    right: number | string;
    bottom: number | string;
    left: number | string;
    content: string;
    style: {
        [key: string]: string;
    };
    markup: HTMLButtonElement;
    constructor(dto?: IButtonDefinition);
    private toStyleString(value);
}
