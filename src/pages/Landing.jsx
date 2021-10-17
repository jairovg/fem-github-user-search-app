import { onMounted, reactive } from 'vue';
import Header from '~/components/Header';
import DarkModeToggle from '~/components/DarkModeToggle';
import SearchInput from '~/components/SearchInput';
import UserInfo from '~/components/UserInfo';
import getAUser from '~/api/github';
import '~/assets/styles/global.scss';

let DEFAULT_USER;

const Landing = {
  name: 'Landing',
  setup() {
    const user = reactive({
      avatar: '',
      name: '',
      username: '',
      joined: '',
      bio: '',
      repos: '',
      followers: '',
      following: '',
      location: '',
      blog: '',
      twitter: '',
      company: '',
    });

    onMounted(async () => {
      DEFAULT_USER = await getAUser('octocat');
      Object.assign(user, DEFAULT_USER);
    });

    const searchUser = async (username) => {
      if (username === 'octocat') {
        Object.assign(user, DEFAULT_USER);
      } else {
        const result = await getAUser(username);
        Object.assign(user, result);
      }
    };

    return () => (
      <>
        <Header>
          <DarkModeToggle />
        </Header>
        <SearchInput
          onSubmit={ searchUser }
        />
        <UserInfo
          user={user}
        />
      </>
    );
  },
};

export default Landing;
