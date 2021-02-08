import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { END } from 'redux-saga'
import wrapper from '../store/store'
import {searchUsers} from "../actions/github";
import Link from "next/link";

const Home = ({user: userFromServer}) => {
  const dispatch = useDispatch();

  const user = userFromServer || useSelector(state => state.github.user);
  const repos = useSelector(state => state.github.repos);

  useEffect(() => {
    console.log(user, 'user')
    console.log(userFromServer, 'userFromServer')
    if(userFromServer === null)  dispatch(searchUsers('YuraKolodiy13'))
  }, []);

  return (
    <div>gfdagdf
      <h1>{user.name}</h1>
      <ul>
        {repos && repos.map(item =>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
      <Link href='/other'><a>other</a></Link>
    </div>
  )
};

Home.getInitialProps = async ({req, store}) => {

  if(!req) return {user: null};
  else {
    store.dispatch(searchUsers('YuraKolodiy13'));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
};

export default Home
