import React, { useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { useDispatch } from 'react-redux';
import './App.scss';
import { Header } from './components/Header';
import { FormID } from './components/FormID';
import { FormRandom } from './components/FormRandom';
import { loadLatestComic } from './features/comic/comicSlice';
import { Comic } from './features/comic/Comic';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLatestComic());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container my-3 my-sm-5">
        <div className="row justify-content-center">
          <div className="col col-sm-8 col-md-6 col-lg-4 col-xl-3">
            <Header />
            <FormID />
            <FormRandom />

            <FadeIn>
              <Comic />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
