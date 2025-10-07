import { TodoState } from '../feature/todoList';
import { RootState } from '../store';

interface PreloadedState {
  todoList: TodoState;
}

export const saveToLocalStorage = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem('appState', appState);
  } catch (e) {
    console.warn(e);
  }
};

export const loadFromLocalStorage = (): PreloadedState | undefined => {
  try {
    const appState = localStorage.getItem('appState');
    if (!appState || appState === null) return undefined;
    return JSON.parse(appState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};
