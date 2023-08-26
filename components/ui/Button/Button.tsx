import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';


export const Button = ({ appearance,  children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.add]: appearance == 'add',
			})}
			{...props}
		>	
			{children}
		</button>
	);
};