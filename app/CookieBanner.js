'use client';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function CookieBanner() {
  const [areCookieTermsAccepted, setAreCookieTermsAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('areCookieTermsAccepted');
    const initialState =
      localStorageValue === undefined ? false : localStorageValue;
    setAreCookieTermsAccepted(initialState);
  }, []);
  return (
    !areCookieTermsAccepted && (
      <>
        <div>We use Cookies to make your experience better</div>
        <button
          onClick={() => {
            setAreCookieTermsAccepted(true);
            setLocalStorage('areCookieTermsAccepted', true);
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
