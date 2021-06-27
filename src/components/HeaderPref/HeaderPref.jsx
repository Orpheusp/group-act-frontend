import React from 'react';
import './HeaderPref.css';

export function HeaderPref() {
  return (
    <div>
      <p className="user">USER: DISPLAY NAME</p>
      <h1 className="header1">PERSONAL</h1>
      <h1 className="header2">PREFERENCE</h1>
      <button className="join_button">Join Group</button>
      <button className="create_button">Create Group</button>
    </div>
  );
}
