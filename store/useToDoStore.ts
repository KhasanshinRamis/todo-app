import { create } from 'zustand';
import { nanoid } from 'nanoid';

interface Task {
	id: string;
	title: string;
	completed: boolean;
}

interface ToDoStore {
	tasks: Task[];
	toggleTodo: (taskId: string) => void;
	addTask: (todoTitle: string) => void;
	updateTask: (taskId: string, todoTitle: string) => void;
	removeTask: (taskId: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
	tasks: [
		{ id: nanoid() ,title: 'Learn JS', completed: true },
		{ id: nanoid(), title: 'Learn TS', completed: false }
	],
	toggleTodo: (taskId: string) => set({
		tasks: get().tasks.map(
			task => task.id === taskId
			? { ...task, completed: !task.completed }
			: task
		)
	}),
	addTask: (todoTitle: string) => {
		const newTask = { id: nanoid(), title: todoTitle, completed: false };

		set({ 
			tasks: [...get().tasks, newTask]
		});
	},
	updateTask: (taskId: string, todoTitle: string) => set({
		tasks: get().tasks.map(
			task => task.id === taskId 
			? { ...task, title: todoTitle} 
			: task
		)
	}),
	removeTask: (taskId: string) => {
		set({
			tasks: get().tasks.filter((task => task.id !== taskId))
		});
	},
}));