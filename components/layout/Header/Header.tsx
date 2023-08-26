import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={styles.header} { ...props }>
			<h1 className={styles.headerTitle}>To Do List</h1>
		</header>
	);
};