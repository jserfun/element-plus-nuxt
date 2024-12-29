const ACCESS_TOKEN = 'access_token';

export function useToken() {
  const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

  const setAccessToken = (accessToken: string) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
  };

  return {
    getAccessToken,
    setAccessToken,
  };
}
