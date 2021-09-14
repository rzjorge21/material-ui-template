import React from "react";

export default function UserProfilePage({ match }) {
  return <div>User Profile for user: {match.params.userId}</div>;
}
