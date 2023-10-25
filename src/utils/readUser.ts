export const readUser = () => {
  const cookie = document.cookie;
  const user = cookie.split('; ').find(data => data.includes('user='))?.slice(5);

  if (!user) {
    return null;
  }

  return JSON.parse(user);
}
