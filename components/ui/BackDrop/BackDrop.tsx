import styles from './BackDrop.module.scss';
import { BackDropProps } from './BackDrop.props';
import { useDrawerStore } from '@/store/useDrawerStore';


export const BackDrop = ({ ...props }: BackDropProps): JSX.Element => {

	const setIsOpened = useDrawerStore((state) => state.setIsOpened);

	return (
		<div className={styles.backDrop} onClick={() => setIsOpened(false)} {...props}></div>
	);
};