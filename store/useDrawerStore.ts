import { create } from 'zustand';

interface DrawerStore {
	idTask?: string | undefined;
	isOpened: boolean;
	whichElement?: 'add' | 'change';
	setIsOpened: (newIsOpened: boolean) => void;
	setWhichElement: (newWhichElement: 'add' | 'change') => void;
	setSaveId: (newId: string) => void;
}


export const useDrawerStore = create<DrawerStore>((set) => ({
	isOpened: false,
	setIsOpened: (newIsOpened: boolean) => {
		set({isOpened: newIsOpened});
	},
	setWhichElement: (newWhichElement: 'add' | 'change') => {
		set({whichElement: newWhichElement});
	},
	setSaveId: (newId: string | undefined) => {
		set({idTask: newId});
	}
}));