import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { END } from 'redux-saga'
import {getGists} from "../actions/github";
import Link from "next/link";
import {Layout} from "../components/Layout";
import {Loader} from "../components/Loader";

const Gists = ({gists: gistsFromServer}) => {
  const dispatch = useDispatch();

  const gists = gistsFromServer || useSelector(state => state.github.gists);
  const loading = useSelector(state => state.github.loading);

  useEffect(() => {
    if(gistsFromServer === null)  dispatch(getGists())
  }, []);

  return (
    <Layout title='Events'>
      {loading
        ? <Loader/>
        : <div className='events'>
          {gists && gists.map(item =>
            <div className='events__item' key={item.id}>
              <div className="events__img--wrap">
                <div className="events__img" style={{backgroundImage: `url(${item.owner.avatar_url})`}}/>
              </div>
              <div className="events__info">
                <div className="events__title">
                  <Link href={`/users/${item.owner.login}`}><a>{item.owner.login}</a></Link>
                </div>
                <div className="events__files">
                  <h4>Files:</h4>
                  {Object.values(item.files).map(item =>
                    <div className='events__file' key={item.filename}>
                      <p>{item.filename} <Link href={item.raw_url}><a target="_blank">Open file</a></Link></p>
                    </div>
                  )}
                </div>
                <div className="events__add-info">
                  <p>Event time: {('0' + new Date(item.created_at + '').getHours()).slice(-2)}:
                    {('0' + new Date(item.created_at + '').getMinutes()).slice(-2)}:
                    {('0' + new Date(item.created_at + '').getSeconds()).slice(-2)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      }

    </Layout>
  )
};

Gists.getInitialProps = async ({req, store}) => {

  if(!req) return {gists: null};
  else {
    store.dispatch(getGists());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
};

export default Gists
