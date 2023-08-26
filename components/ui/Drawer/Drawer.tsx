import { ButtonIcon, Input, Button } from '@/components/ui';
import styles from './Drawer.module.scss';
import { DrawerProps } from './Drawer.props';
import { useToDoStore } from '@/store/useToDoStore';
import { useDrawerStore } from '@/store/useDrawerStore';
import { useCallback, useState } from 'react';


export const Drawer = ({ ...props }: DrawerProps): JSX.Element => {

	const [ idTask , setIsOpened, whichElement ] = useDrawerStore((state) => [ state.idTask, state.setIsOpened, state.whichElement ]);

	const [ addTask, updateTask ] = useToDoStore((state) => [ state.addTask, state.updateTask]);

	const [inputValue, setInputValue] = useState<string>('');

	const onAdd = useCallback(() => {
		if (!inputValue) return;
		addTask(inputValue);
		setInputValue('');
	}, [inputValue]);

	const onUpdate = useCallback(() => {
		if (!inputValue) return;
		updateTask(idTask, inputValue);
		setInputValue('');
	}, [inputValue]);

	return (
		<div className={styles.drawer} {...props}>
		{whichElement === 'add' 
		? 
			<div className={styles.drawerAddTask}>
				<div className={styles.drawerHeader}>
					<span className={styles.drawerHeaderTitle}>Create new task</span>
					<ButtonIcon appearance='close' onClick={() => setIsOpened(false)} />
				</div>

				<div className={styles.drawerBody}>
					<Input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
				</div>

				<div className={styles.drawerFooter}>
					<Button appearance='primary' onClick={() => setIsOpened(false)}>Cancel</Button>
					<Button appearance='add' onClick={onAdd}>Save</Button>
				</div>
			</div>
		: 
			<div className={styles.drawerChangeTask}>

				<div className={styles.drawerHeader}>
					<span className={styles.drawerHeaderTitle}>Change title task</span>
					<ButtonIcon appearance='close' onClick={() => setIsOpened(false)} />
				</div>

				<div className={styles.drawerBody}>
					<Input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
				</div>

				<div className={styles.drawerFooter}>
					<Button appearance='primary' onClick={() => setIsOpened(false)}>Cancel</Button>
					<Button appearance='add' onClick={onUpdate}>Save</Button>
				</div>

			</div>
		}
		</div>
	);
};