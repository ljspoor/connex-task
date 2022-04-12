import { useSelector } from 'react-redux';
import { selectError } from '../features/comic/comicSlice';

export const Error = () => {
  const errorMessage = useSelector(selectError);

  return (
    <div className="alert alert-danger w-100 text-center" role="alert">
      {errorMessage}
    </div>
  );
};
