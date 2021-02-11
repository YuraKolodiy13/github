import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { END } from 'redux-saga'
import {getUserRepos} from "../../../actions/github";
import {Layout} from "../../../components/Layout";
import Link from "next/link";
import {useRouter} from "next/router";

const Repos = ({repos: reposFromServer}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const repos = reposFromServer || useSelector(state => state.github.repos);

  useEffect(() => {
    if(reposFromServer === null)  dispatch(getUserRepos(router.query.id))
  }, []);

  return (
    <Layout title='YuraKolodiy13'>
      <div className='repos'>
        <ul>
          {repos && repos.map(item =>
            <li key={item.id}>
              <Link href={`/users/${router.query.id}/repos/${item.name}`}>
                <a>
                  <h3>{item.name}</h3>
                  <p>{item.language} <span>{item.updated_at}</span></p>
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  )
};

Repos.getInitialProps = async ({req, store, query}) => {

  if(!req) return {repos: null};
  else {
    store.dispatch(getUserRepos(query.id));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
};

export default Repos
