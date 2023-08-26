'use client';

import { CreateTaskProps } from './CreateTask.props';
import styles from './CreateTask.module.scss';
import { Button, Drawer, BackDrop } from '@/components/ui';
import { useDrawerStore } from '@/store/useDrawerStore';


export const CreateTask = ({ ...props }: CreateTaskProps): JSX.Element => {


	const [ isOpened, setIsOpened, setWhichElement] = useDrawerStore((state) => [state.isOpened, state.setIsOpened, state.setWhichElement]);


	return (
		<div
			className={styles.createTask}
			{...props}
		>
			<Button
				appearance='add'
				className={styles.createTaskButton}
				onClick={() => {
					setIsOpened(true);
					setWhichElement('add');
				}}
			>
				Add new task
			</Button>
			{isOpened ? <> <BackDrop /> <Drawer /> </> : ''}
		</div>
	);
};