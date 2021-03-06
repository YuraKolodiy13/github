import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { END } from 'redux-saga'
import {getEvents} from "../actions/github";
import Link from "next/link";
import {Layout} from "../components/Layout";
import {Loader} from "../components/Loader";

const Home = ({events: eventsFromServer}) => {
  const dispatch = useDispatch();

  const events = eventsFromServer || useSelector(state => state.github.events);
  const loading = useSelector(state => state.github.loading);

  useEffect(() => {
    if(eventsFromServer === null)  dispatch(getEvents())
  }, []);

  return (
    <Layout title='Events'>
      {loading
        ? <Loader/>
        : <div className='events'>
          {events && events.map(item =>
            <div className='events__item' key={item.id}>
              <div className="events__img--wrap">
                <div className="events__img" style={{backgroundImage: `url(${item.actor.avatar_url})`}}/>
              </div>
              <div className="events__info">
                <div className="events__title">
                  <Link href={`/users/${item.actor.login}`}><a>{item.actor.login}</a></Link>
                </div>
                <div className="events__add-info">
                  <p>Repository: <Link href={`/users/${item.actor.login}/repos/${/[^/]*$/.exec(item.repo.name)[0]}`}><a>{/[^/]*$/.exec(item.repo.name)[0]}</a></Link></p>
                  <p>Event type: {item.type}</p>
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

Home.getInitialProps = async ({req, store}) => {

  if(!req) return {events: null};
  else {
    store.dispatch(getEvents());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
};

export default Home
