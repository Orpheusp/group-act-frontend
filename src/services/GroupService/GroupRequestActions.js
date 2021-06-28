import { getCsrfHeader } from '../../utils/get_csrf_header';

const GROUPS_ENDPOINT_URL = '/api/groups';

export async function sendGetGroupRequest(groupId) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const url = new URL(
    `${GROUPS_ENDPOINT_URL}/${groupId}`,
    window.location.origin
  );

  const response = await fetch(url, requestOptions);
  const group = await response.json();
  return group;
}

export async function sendJoinGroupRequest(inviteCode, password) {
  // CSRF header is needed since this is a privileged PATCH operation.

  const headers = getCsrfHeader();
  headers.append('Content-Type', 'application/json');

  const url = new URL(GROUPS_ENDPOINT_URL, window.location.origin);
  const body = JSON.stringify({ inviteCode, password });
  const requestOptions = {
    method: 'PATCH',
    headers,
    body,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const group = await response.json();
  return group;
}

export async function sendCreateGroupRequest(displayName, password) {
  // CSRF header is needed since this is a privileged PATCH operation.

  const headers = getCsrfHeader();
  headers.append('Content-Type', 'application/json');

  const url = new URL(GROUPS_ENDPOINT_URL, window.location.origin);
  const body = JSON.stringify({ displayName, password });
  const requestOptions = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const group = await response.json();
  return group;
}
