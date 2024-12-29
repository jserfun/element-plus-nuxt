import { ACCESS_TOKEN } from '~/constants';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};
