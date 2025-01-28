import { searchGithubUser } from '../api/API';
import { useState } from 'react';

const CandidateSearch = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    if (username.trim() === '') {
      alert('Please enter a username.');
      return;
    }

    const result = await searchGithubUser(username);
    setUser(result);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Candidate Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: '0.5em',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginRight: '1rem',
            width: '300px',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '0.5em 1em',
            fontSize: '1rem',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#646cff',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Search User
        </button>
      </div>
      {user && (
        <div style={{ marginTop: '2rem', color: '#fff' }}>
          <h2>Search Result:</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
