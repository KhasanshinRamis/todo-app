import { Header } from '@/components/layout';
import { FilterToDo ,ToDoList, CreateTask } from '@/components/widget';


export default function Home() {
	return (
		<>
			<Header />
			<FilterToDo/>
			<ToDoList/>
			<CreateTask />
		</>
	);
}
