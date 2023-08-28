'use client';

import { CreateTaskProps } from './CreateTask.props';
import styles from './CreateTask.module.scss';
import { Button, Drawer, BackDrop } from '@/components/ui';
import { useDrawerStore } from '@/store/useDrawerStore';
import { motion } from 'framer-motion';


export const CreateTask = ({ ...props }: CreateTaskProps): JSX.Element => {


	const [ isOpened, setIsOpened, setWhichElement] = useDrawerStore((state) => [state.isOpened, state.setIsOpened, state.setWhichElement]);

	const variants = {
		visible: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			x: '0%',
			top: 0,
			right:0,
			left: 0,
			bottom: 0,
			opacity: 1,
			transition: {
			duration: 0.3,
			ease: 'easeInOut',
			},
		},
		hidden: {
			position: 'absolute',
			width: '0%',
			height: '0%',
			top: 0,
			right:0,
			left: 0,
			bottom: 0,
			x: '100%',
			opacity: 1,
			transition: {
			duration: 0.3,
			ease: 'easeInOut',
			},
		},
	};

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
			<motion.div
				variants={variants}
				initial={isOpened ? 'visible' : 'hidden'}
				animate={isOpened ? 'visible' : 'hidden'}
			>
				{isOpened ? <> <BackDrop /> <Drawer /> </> : ''}
			</motion.div>
		</div>
	);
};