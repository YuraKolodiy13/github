import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { END } from 'redux-saga'
import wrapper from '../store/store'
import {getEvents} from "../actions/github";
import Link from "next/link";
import {Layout} from "../components/Layout";

const Home = ({events: eventsFromServer}) => {
  const dispatch = useDispatch();

  const events = eventsFromServer || useSelector(state => state.github.events);

  useEffect(() => {
    if(eventsFromServer === null)  dispatch(getEvents())
  }, []);

  return (
    <Layout title='Events'>
      <div className='events'>
        {events && events.map(item =>
          <div className='events__item' key={item.id}>
            {console.log(item, 'item')}
            {console.log(item.actor, 'item.actor')}
            <div className="events__img--wrap">
              <div className="events__img" style={{backgroundImage: `url(${item.actor.avatar_url})`}}/>
            </div>
            <div className="events__info">
              <div className="events__title">
                <Link href={`/users/${item.actor.login}`}><a>{item.actor.login}</a></Link>
              </div>
              <p>{item.type}</p>
              <div className="events__repo">
                <span>Repository:</span>
                <Link href={`/users/${item.actor.login}/repos/${item.repo.name}`}><a>{item.repo.name}</a></Link>
              </div>
            </div>
          </div>
        )}
      </div>
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
