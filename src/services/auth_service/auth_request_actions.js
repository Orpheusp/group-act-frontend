const SESSIONS_ENDPOINT_URL = '/api/sessions';

const USERS_ENDPOINT_URL = '/api/users';

export async function sendGetOtpRequest(phoneNumber) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const url = new URL(SESSIONS_ENDPOINT_URL);
  const urlParams = new URLSearchParams({ for: phoneNumber });
  url.search = urlParams.toString();

  await fetch(url, requestOptions);
}

export async function sendSignInRequest(phoneNumber, otp) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({ phoneNumber, otp });

  const requestOptions = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
  };

  const response = await fetch(SESSIONS_ENDPOINT_URL, requestOptions);
  const user = await response.json();
  return user;
}

export async function sendSignUpRequest(phoneNumber, otp) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({ phoneNumber, otp });

  const requestOptions = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
  };

  const response = await fetch(USERS_ENDPOINT_URL, requestOptions);
  const user = await response.json();
  return user;
}

export async function sendSignOutRequest() {
  const headers = getCsrfHeader();
  headers.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers,
    redirect: 'follow',
  };

  await fetch(SESSIONS_ENDPOINT_URL, requestOptions);
}

export function getCsrfHeader() {
  const headers = new Headers();
  const csrfAccessToken = getCookie('csrf_access_token');
  headers.append(`X-CSRF-TOKEN=${csrfAccessToken}`);

  return headers;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
