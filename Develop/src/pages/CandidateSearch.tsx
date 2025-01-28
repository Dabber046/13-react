import { searchGithubUser } from '../api/API';

import { useState } from 'react';

const CandidateSearch = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (username: string) => {
    const result = await searchGithubUser(username);
    setUser(result);
  };

  return (
    <div>
      <h1>CandidateSearch</h1>
      <button onClick={() => handleSearch('exampleUser')}>Search User</button>
      {user && <div>{JSON.stringify(user)}</div>}
    </div>
  );
};

export default CandidateSearch;
