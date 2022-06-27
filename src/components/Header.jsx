import classnames from 'classnames';
import h from '@/assets/styles/components/header.module.scss';

const Header = (props, { slots }) => (
  <header class={ classnames(h.header) }>
    <h1 class={ classnames(h.header__title) }>
      devfinder
    </h1>
    { slots.default && slots.default() }
  </header>
);

export default Header;
