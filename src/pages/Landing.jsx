import Header from '~/components/Header';
import DarkModeToggle from '~/components/DarkModeToggle';
import '~/assets/styles/global.scss';

const App = () => (
  <>
    <Header>
      <DarkModeToggle />
    </Header>
    Search GitHub username...
    Search

    Joined

    Repos
    Followers
    Following
  </>
);

export default App;
