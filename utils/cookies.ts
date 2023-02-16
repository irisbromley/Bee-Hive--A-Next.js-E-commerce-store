import Cookies from 'js-cookie';

export function getParsedCookie(key: string) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
  } catch (error) {
    return undefined;
  }
}

export function setStringifiedCookie(key: string, value: any) {
  Cookies.set(key, JSON.stringify(value));
}

