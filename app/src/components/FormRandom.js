import { useDispatch } from 'react-redux';
import { loadRandomComic } from '../features/comic/comicSlice';

export const FormRandom = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(loadRandomComic());
  };

  return (
    <div className="row mb-4">
      <div className="col">
        <h6>Get random comic</h6>

        <form onSubmit={handleOnSubmit}>
          <div className="row">
            <div className="col d-grid">
              <button type="submit" className="btn btn-primary fw-bold">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
