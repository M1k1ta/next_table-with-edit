import { useAppDispatch, useAppSelector } from '@/app/GlobalRedux/hooks';
import './Pagination.scss';
import { actions as peopleActions } from '@/app/GlobalRedux/Features/people/peopleSlice';
import { getPeopleByUrl } from '@/api/people';

export const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const { next, previous } = useAppSelector(state => state.people);

  const loading = async (url: string) => {
    dispatch(peopleActions.setLoading(true));

    try {
      const { results, next, previous } = await getPeopleByUrl(url);

      dispatch(peopleActions.set({ people: results, next, previous }));
    } catch {
      dispatch(peopleActions.setError('Custom error'));
    } finally {
      dispatch(peopleActions.setLoading(false));
    }
  };

  return (
    <article className='pagination'>
      <button
        className='pagination__button'
        onClick={() => loading(previous || '')}
        disabled={!previous}
      >
        {'<'}
      </button>
 
      <button
        className='pagination__button'
        onClick={() => loading(next || '')}
        disabled={!next}
      >
        {'>'}
      </button>
    </article>
  );
}