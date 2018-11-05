export interface INumbersOnly {
    [key: string]: number;
};

export interface IStringsOnly {
    [key: string]: string;
};

export interface IAction {
    type: string,
    payload: any
}