import { getCsrfHeader } from '../../utils/get_csrf_header';

const SESSIONS_ENDPOINT_URL = '/api/sessions';

const USERS_ENDPOINT_URL = '/api/users';

export async function sendGetOtpRequest(phoneNumber) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const url = new URL(SESSIONS_ENDPOINT_URL, window.location.origin);
  const urlParams = new URLSearchParams({ for: phoneNumber });
  url.search = urlParams.toString();

  const response = await fetch(url, requestOptions);
  const { accountExists } = await response.json();
  return accountExists;
}

export async function sendSignInRequest(phoneNumber, otp) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = new URL(SESSIONS_ENDPOINT_URL, window.location.origin);
  const body = JSON.stringify({ phoneNumber, otp });
  const requestOptions = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const user = await response.json();
  return user;
}

export async function sendSignUpRequest(phoneNumber, otp) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = new URL(USERS_ENDPOINT_URL, window.location.origin);
  const body = JSON.stringify({ phoneNumber, otp });
  const requestOptions = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const user = await response.json();
  return user;
}

export async function sendSignOutRequest() {
  // CSRF header is needed since this is a privileged DELETE operation.
  const headers = getCsrfHeader();
  headers.append('Content-Type', 'application/json');

  const url = new URL(SESSIONS_ENDPOINT_URL, window.location.origin);
  const requestOptions = {
    method: 'DELETE',
    headers,
    redirect: 'follow',
  };

  await fetch(url, requestOptions);
}

export async function sendUserPreferencesUpdateRequest(userId, preferences) {
  // CSRF header is needed since this is a privileged PUT operation.
  const headers = getCsrfHeader();
  headers.append('Content-Type', 'application/json');

  const url = new URL(
    `${USERS_ENDPOINT_URL}/${userId}/preferences`,
    window.location.origin
  );
  const body = JSON.stringify({ preferences });
  const requestOptions = {
    method: 'PUT',
    headers,
    body,
    redirect: 'follow',
  };

  await fetch(url, requestOptions);
}
