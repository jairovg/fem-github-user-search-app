import classnames from 'classnames';
import u from '@/assets/styles/components/user-info.module.scss';

const NOT_AVAILABLE = 'Not available';

const UserInfo = ({ user }) => {
  const blog = user.blog
    ? (
      <a
        class={ classnames(u.info__link) }
        href={ user.blog }
      >
        { user.blog }
      </a>
    )
    : NOT_AVAILABLE;
  const twitter = user.twitter
    ? (
      <a
        class={ classnames(u.info__link) }
        href={ `https://twitter.com/${user.twitter}` }
      >
        { user.twitter }
      </a>
    )
    : NOT_AVAILABLE;

  return (
    <section class={ classnames(u.info) }>
      <header class={ classnames(u.info__header) }>
        <img
          class={ classnames(u.info__avatar) }
          src={ user.avatar }
          alt=""
        />
        <h2 class={ classnames(u.info__name) }>
          { user.name }
          <span class={ classnames(u.info__username) }>
            { user.username }
          </span>
        </h2>
        <span class={ classnames(u.info__date) }>
          { user.joined }
        </span>
      </header>
      <p class={ classnames(u.info__bio) }>
        { user.bio }
      </p>
      <dl class={ classnames(u['info__stats-list']) }>
        <dt class={ classnames(u['info__stats-info']) }>
          Repos
        </dt>
        <dd class={ classnames(u['info__stats-counter']) }>
          { user.repos }
        </dd>
        <dt class={ classnames(u['info__stats-info']) }>
          Followers
        </dt>
        <dd class={ classnames(u['info__stats-counter']) }>
          { user.followers }
        </dd>
        <dt class={ classnames(u['info__stats-info']) }>
          Following
        </dt>
        <dd class={ classnames(u['info__stats-counter']) }>
          { user.following }
        </dd>
      </dl>
      <ul class={ classnames(u.info__links) }>
        <li class={ classnames(u['info__link-item'], u.info__icon, u['info__icon-location']) }>
          { user.location || NOT_AVAILABLE }
        </li>
        <li class={ classnames(u['info__link-item'], u.info__icon, u['info__icon-website'], !user.blog && u['info__link-item--disabled']) }>
          { blog }
        </li>
        <li class={ classnames(u['info__link-item'], u.info__icon, u['info__icon-twitter'], !user.twitter && u['info__link-item--disabled']) }>
          { twitter }
        </li>
        <li class={ classnames(u['info__link-item'], u.info__icon, u['info__icon-company']) }>
          { user.company || NOT_AVAILABLE }
        </li>
      </ul>
    </section>
  );
};

export default UserInfo;
