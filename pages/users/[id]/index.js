import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { END } from 'redux-saga'
import {searchUsers} from "../../../actions/github";
import Link from "next/link";
import {Layout} from "../../../components/Layout";
import {useRouter} from "next/router";

const User = ({user: userFromServer}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = userFromServer || useSelector(state => state.github.user);

  useEffect(() => {
    if(userFromServer === null)  dispatch(searchUsers(router.query.id))
  }, []);

  return (
    <Layout title={user.name}>
      <div className="left">
        <img src={user.avatar_url} alt=""/>
        <h1>{user.name}</h1>
        <h2>{user.login}</h2>
        <p>followers: {user.followers}</p>
        <p>following: {user.following}</p>
      </div>
      <div className="right">
        <ul className='container'>
          <li>
            <Link href={'/'}><a>Overview</a></Link>
          </li>
          <li>
            <Link href={`/users/${user.login}/repos`}><a>Repositories ({user.public_repos})</a></Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
};

User.getInitialProps = async ({req, store, query}) => {

  if(!req) return {user: null};
  else {
    store.dispatch(searchUsers(query.id));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
};

export default User
