'use client';

import { useToDoStore } from '@/store/useToDoStore';
import { useDrawerStore } from '@/store/useDrawerStore';
import { ToDoListProps } from './ToDoList.props';
import styles from './ToDoList.module.scss';
import cn from 'classnames';
import { ButtonIcon } from '@/components/ui';
import { useFilter } from '@/store/useFilter';


export const ToDoList = ({ className, ...props }: ToDoListProps): JSX.Element => {

	
	const [ toggleTodo, removeTask ]  = useToDoStore(state => [state.toggleTodo, state.removeTask]);
	
	const [ setIsOpened, setWhichElement, setSaveId ] = useDrawerStore((state) => [ state.setIsOpened, state.setWhichElement, state.setSaveId ]);

	const filterCompleted = useFilter((state) => state.filterCompleted);

	const tasks = useToDoStore((state) => {
		switch (filterCompleted){
			case 'completed':
				return state.tasks.filter((task) => task.completed);
			case 'uncompleted':
				return state.tasks.filter((task) => !task.completed);
			default: 
				return state.tasks;
		}	
	});
	

	return (
		<div 
			className={cn(className, styles.toDoList)}
			{...props}
		>
			<ul>
				{tasks.map((task) => 
					<li key={task.id}>
						<input 
							type="checkbox" 
							checked={task.completed} 
							onChange={() => toggleTodo(task.id)}
						/>
						<p>{task.title}</p>
						<ButtonIcon 
							appearance='change'
							onClick={() => {
								setIsOpened(true);
								setWhichElement('change');
								setSaveId(task.id);
							}}
						/>
						<ButtonIcon 
							appearance='remove'
							onClick={() => removeTask(task.id)}
						/>
					</li>
				)}
			</ul>
		</div>
	);
};