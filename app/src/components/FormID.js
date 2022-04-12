import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadComicById, selectID, setID } from '../features/comic/comicSlice';

export const FormID = () => {
  const dispatch = useDispatch();
  const currentID = useSelector(selectID);
  const [validation, setValidation] = useState(true);

  const handleOnChange = (e) => {
    dispatch(setID(e.target.value));
  };

  const handleOnKeyPress = (e) => {
    setValidation(true);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const isNumber = /[0-9]/.test(currentID);

    if (isNumber) {
      dispatch(loadComicById(currentID));
    } else {
      setValidation(false);
    }
  };

  return (
    <div className="row mb-4">
      <div className="col">
        <h6>Get comic by ID</h6>

        <form onSubmit={handleOnSubmit} className="needs-validation" noValidate>
          <div className="row">
            <div className="col">
              <div className="input-group has-validation">
                <input
                  type="text"
                  className={validation ? 'form-control' : 'form-control is-invalid'}
                  placeholder="Comic ID"
                  onChange={handleOnChange}
                  onKeyPress={handleOnKeyPress}
                  required
                />
                <div className="invalid-tooltip">Please enter a number</div>
              </div>
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
