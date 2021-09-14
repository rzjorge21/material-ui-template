import React from 'react'
import { Link } from 'react-router-dom'

export default function BrowseUserPage({ match }) {
  return (
    <div>
      Browse Users
      <ul>
        <li>
          <Link to={`${match.path}/1`}>Brad</Link>
        </li>
        <li>
          <Link to={`${match.path}/2`}>Chris</Link>
        </li>
        <li>
          <Link to={`${match.path}/3`}>Michael</Link>
        </li>
        <li>
          <Link to={`${match.path}/4`}>Ryan</Link>
        </li>
      </ul>
    </div>
  );
}
