import { ButtonIconProps } from './ButtonIcon.props';
import styles from './ButtonIcon.module.scss';
import cn from 'classnames';

export const ButtonIcon = ({ appearance, className, ...props }: ButtonIconProps):JSX.Element => {


	return (
		<button
			className={cn(styles.button, className, {
				[styles.close]: appearance == 'close',
				[styles.change]: appearance == 'change' || appearance == 'remove'
			})}
			{...props}
		>
			{appearance === 'close' ? <span>&#10006;</span> : appearance === 'change' ? <span>&#9998;</span> : <span>&#10006;</span>}
		</button>
	);
};