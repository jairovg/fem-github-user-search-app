import classnames from 'classnames';
import s from '~/assets/styles/components/search-input.module.scss';

const Search = (props) => (
  <form
    action=""
    role="search"
    class={ classnames(s.search) }
  >
    <input
      id="search-user"
      type="text"
      name="username"
      class={ classnames(s.search__input) }
      placeholder={ props.placeholder || 'Search GitHub username…' }
    />
    <button
      type="submit"
      class={ classnames(s.search__button) }
    >
      Search
    </button>
  </form>
);

Search.props = ['placeholder'];

export default Search;
