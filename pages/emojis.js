import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { END } from 'redux-saga'
import {getEmojis} from "../actions/github";
import Link from "next/link";
import {Layout} from "../components/Layout";
import {Loader} from "../components/Loader";

const Emojis = ({emojis: emojisFromServer}) => {
  const dispatch = useDispatch();

  const emojis = emojisFromServer || useSelector(state => state.github.emojis);
  const loading = useSelector(state => state.github.loading);

  useEffect(() => {
    if(emojisFromServer === null)  dispatch(getEmojis())
  }, []);

  return (
    <Layout title='Events'>
      {loading
        ? <Loader/>
        : <div className='emojis'>
          {emojis && Object.entries(emojis).map(([key, value]) =>
            <div className='emojis__item' key={key}>
              <Link href={value}><a target="_blank"><img src={value} alt=""/></a></Link>
              <p>{key}</p>
            </div>
          )}
        </div>
      }

    </Layout>
  )
};

Emojis.getInitialProps = async ({req, store}) => {

  if(!req) return {emojis: null};
  else {
    store.dispatch(getEmojis());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
};

export default Emojis
