import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadComicById, selectID, setID } from '../features/comic/comicSlice';

export const FormID = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectID);
  const [validation, setValidation] = useState(true);

  const handleOnChange = (e) => {
    dispatch(setID(e.target.value));
  };

  const handleOnKeyPress = (e) => {
    setValidation(true);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const isNumber = /[0-9]/.test(id);

    if (isNumber) {
      dispatch(loadComicById(id));
    } else {
      setValidation(false);
    }
  };

  return (
    <div className="row mb-4">
      <div className="col">
        <h6>Get comic by ID</h6>

        <form onSubmit={handleOnSubmit} noValidate>
          <div className="row">
            <div className="col position-relative">
              <input
                type="text"
                className={validation ? 'form-control' : 'form-control is-invalid'}
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Comic ID"
                value={id}
                onChange={handleOnChange}
                onKeyPress={handleOnKeyPress}
                required
              />
              <div className="invalid-tooltip">Please enter a number</div>
            </div>
            <div className="col-auto">
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
