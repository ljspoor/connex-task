import { useSelector } from 'react-redux';
import { selectComic, selectStatus } from './comicSlice';
import { Spinner } from '../../components/Spinner';
import { Error } from '../../components/Error';

export const Comic = () => {
  const status = useSelector(selectStatus);
  const currentComic = useSelector(selectComic);

  if (status === 'loading') {
    return <Spinner></Spinner>;
  }

  if (status === 'failed') {
    return <Error></Error>;
  }

  if (status === 'complete') {
    return (
      <div className="card text-white bg-dark w-100">
        <a
          href={'https://xkcd.com/' + currentComic.num}
          title={currentComic.alt}
          className="p-3 pb-0"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={currentComic.img}
            className="card-img-top rounded"
            alt={currentComic.alt}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{currentComic.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">ID: {currentComic.num}</h6>
          <a
            href={'https://xkcd.com/' + currentComic.num}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Comic
          </a>
        </div>
      </div>
    );
  }

  return <Spinner></Spinner>;
};
