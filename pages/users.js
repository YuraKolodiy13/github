import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers, searchUsers} from "../actions/github";
import {Layout} from "../components/Layout";
import Link from "next/link";
import {END} from "redux-saga";

const Users = ({users: usersFromServer}) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const user = useSelector(state => state.github.user);
  const users = usersFromServer || useSelector(state => state.github.users);

  useEffect(() => {
    if(usersFromServer === null)  dispatch(getUsers())
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchUsers(searchValue))
  };

  return (
    <Layout title='Users'>
      <div className="users">
        <div className="users__search">
          <form onSubmit={onSubmit}>
            <input
              type="text" value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Github user'
            />
            <button type='submit'>Explore</button>
          </form>
          <Link href={`users/${user.login}`}><a>{user.name}</a></Link>
        </div>
        <div className="users__list">
          {users && users.map(item =>
            <div className='users__item' key={item.id}>
              <div className="users__img--wrap">
                <div className="users__img" style={{backgroundImage: `url(${item.avatar_url})`}}/>
              </div>
              <div className="users__info">
                <div className="users__title">
                  <Link href={`/users/${item.login}`}><a>{item.login}</a></Link>
                </div>
                <div className="users__type">
                  <span>Type:</span>
                  <span>{item.type}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
};

Users.getInitialProps = async ({req, store}) => {

  if(!req) return {users: null};
  else {
    store.dispatch(getUsers());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
};

export default Users
