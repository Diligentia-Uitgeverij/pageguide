export interface IButtonDefinition {
    position?: string;
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
    content?: string;
    style?: {
        [key: string]: string;
    };
}
