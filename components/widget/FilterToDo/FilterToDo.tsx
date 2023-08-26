'use client';

import { FilterToDoProps } from './FilterToDo.props';
import styles from './FilterToDo.module.scss';
import cn from 'classnames';
import { Button } from '@/components/ui';
import { useFilter } from '@/store/useFilter';


export const FilterToDo = ({ className, ...props }: FilterToDoProps): JSX.Element => {

	const [ filterCompleted, setFilter ]  = useFilter(state => [state.filterCompleted, state.setFilter]);

	return (
		<div 
			className={cn(className, styles.filterToDo)}
			{...props}
		>
			
			<Button 
				appearance='primary'
				disabled={filterCompleted === 'all'} 
				onClick={() => setFilter('all')}
				tabIndex={0}
			>
				All
			</Button>
			
			<Button 
				appearance='primary'
				disabled={filterCompleted === 'completed'} 
				onClick={() => setFilter('completed')}
				tabIndex={0}
			>
				Completed
			</Button>
			
			<Button 
				appearance='primary' 
				disabled={filterCompleted === 'uncompleted'} 
				onClick={() => setFilter('uncompleted')}
				tabIndex={0}
			>
				Not completed
			</Button>
		
		</div>
	);
};