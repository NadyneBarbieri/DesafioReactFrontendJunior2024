import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import { observer } from 'mobx-react-lite';
import useStore from '../tools';

import './index.css';

function TodoListView() {
  const { todoListStore } = useStore();
  const hasItems = todoListStore.todos.length > 0;

  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoList />
      {hasItems && <TodoFooter />}
    </section>
  );
}

export default observer(TodoListView);
