import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { END } from 'redux-saga'
import {getUserRep} from "../../../../actions/github";
import {Layout} from "../../../../components/Layout";
import { useRouter } from 'next/router'
import Link from "next/link";

const Rep = ({rep: repFromServer}) => {

  const dispatch = useDispatch();
  const router = useRouter();

  const rep = repFromServer || useSelector(state => state.github.rep);

  useEffect(() => {
    if(repFromServer === null)  dispatch(getUserRep(router.query))
  }, []);

  return (
    <Layout title={router.query.name}>
      <div className='repos'>
        <h1>{router.query.name}</h1>
        <p>User: <Link href={`/users/${router.query.id}`}><a>{router.query.id}</a></Link></p>
        <ul>{rep && rep.map(item =>
          <li key={item.sha}>{item.name}</li>
        )}</ul>
      </div>
    </Layout>
  )
};

Rep.getInitialProps = async ({req, store, query}) => {

  if(!req) return {rep: null};
  else {
    store.dispatch(getUserRep(query));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
};

export default Rep
