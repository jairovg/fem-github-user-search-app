import { defineComponent, ref } from 'vue';
import classnames from 'classnames';
import s from '~/assets/styles/components/search-input.module.scss';

const Search = defineComponent({
  name: 'SearchInput',
  props: {
    placeholder: {
      type: String,
      default: 'Search GitHub username…',
    },
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const placeholder = ref(props.placeholder);
    const username = ref('');

    const submithHandler = (e) => {
      e.preventDefault();
      emit('submit', username.value);
    };

    return () => (
      <form
        novalidate
        role="search"
        class={ classnames(s.search) }
        onSubmit={ submithHandler }
      >
        <input
          id="search-user"
          type="text"
          name="username"
          class={ classnames(s.search__input) }
          placeholder={ placeholder.value }
          v-model={ username.value }
        />
        <button
          type="submit"
          class={ classnames(s.search__button) }
        >
          Search
        </button>
      </form>
    );
  },
});

export default Search;
