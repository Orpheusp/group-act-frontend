export const CSRF_ACCESS_TOKEN_COOKIE_NAME = 'csrf_access_token';

export const CSRF_ACCESS_TOKEN_HEADER_NAME = 'X-CSRF-TOKEN';

export function getCsrfHeader() {
  const headers = new Headers();
  const csrfAccessToken = getCookie(CSRF_ACCESS_TOKEN_COOKIE_NAME);
  headers.append(CSRF_ACCESS_TOKEN_HEADER_NAME, csrfAccessToken);

  return headers;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
