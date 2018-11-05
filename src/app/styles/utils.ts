import { INumbersOnly } from 'app/utils/interfaces';

const SIZE: INumbersOnly = {
  PHONE: 480,
  TABLET: 900
}

interface IMedia {
  phone: (extraStyles: string) => string;
  tablet: (extraStyles: string) => string;
}

export const media: IMedia = {
  phone: (extraStyles: string): string => {
    return `@media (max-width: ${SIZE.PHONE-1}px) {
      ${extraStyles}
    }`
  },
  tablet: (extraStyles: string): string => {
    return `@media (min-width: ${SIZE.PHONE}px) and (max-width: ${SIZE.TABLET}px) {
      ${extraStyles}
    }`
  },
};

interface IState {
  active: (extraStyles: string) => string;
}

export const state: IState = {
  active: (extraStyles: string): string => {
    return `&:active {
      ${extraStyles}
    }`
  }
};
