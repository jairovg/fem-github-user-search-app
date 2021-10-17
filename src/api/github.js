import { format } from 'date-fns';

const BASE_URL = 'https://api.github.com';

const getAUser = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  const user = await response.json();

  return {
    avatar: user.avatar_url,
    name: user.name,
    username: `@${user.login}`,
    joined: `Joined ${format(new Date(user.created_at), 'd LLL yyyy')}`,
    bio: user.bio || 'This profile has no bio',
    repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    location: user.location,
    blog: user.blog,
    twitter: user.twitter_username,
    company: user.company,
  };
};

export default getAUser;
