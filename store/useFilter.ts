import { create } from 'zustand';



interface Filter {
	filterCompleted: 'completed' | 'uncompleted' | 'all';
	setFilter: (newFilter: 'completed' | 'uncompleted' | 'all') => void;
}


export const useFilter = create<Filter>(set => ({
	filterCompleted: 'all',
	setFilter: (newFilter: 'completed' | 'uncompleted' | 'all') => set({ filterCompleted: newFilter }),
  }));

