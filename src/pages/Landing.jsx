import Header from '~/components/Header';
import DarkModeToggle from '~/components/DarkModeToggle';
import SearchInput from '~/components/SearchInput';
import '~/assets/styles/global.scss';

const App = () => (
  <>
    <Header>
      <DarkModeToggle />
    </Header>
    <SearchInput />

    Joined

    Repos
    Followers
    Following
  </>
);

export default App;
