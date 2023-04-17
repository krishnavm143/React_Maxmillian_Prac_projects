import UserFinder from './components/UserFinder';
import userContext from './store/user-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];
function App() {
  const usersContext = {
    users: DUMMY_USERS
  }
  return (
    <userContext.Provider value={usersContext}>

      <UserFinder />

    </userContext.Provider>
  );
}

export default App;
