import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {searchUsers} from "../actions/github";
import {Layout} from "../components/Layout";
import Link from "next/link";

const Users = ({repos: reposFromServer}) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const user = useSelector(state => state.github.user);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchUsers(searchValue))
  };

  return (
    <Layout title='Github Explorer'>
      <h1>Github Explorer</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text" value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Github user'
        />
        <button type='submit'>Explore</button>
      </form>
      <Link href={`users/${user.login}`}><a>{user.name}</a></Link>
    </Layout>
  )
};

export default Users
