import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

//наследуем у DetailedHTMLProps атрибуты ButtonHTMLAttributes, а именно HTMLButtonElement
export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'close' | 'change' | 'remove';
}