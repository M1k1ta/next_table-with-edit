import './Header.scss';
import { Button } from '../Button';
import { Pagination } from '../Pagination';
import { useRouter } from 'next/navigation';

export const Header: React.FC = () => {
  const router = useRouter();

  const logout = () => {
    document.cookie = 'user=; Max-Age=0; path=/; domain=' + location.hostname;
    router.push('/login');
  };

  return (
    <header className='header'>
      <Pagination />

      <Button
        type='button'
        onClick={logout}
      >
        Logout
      </Button>
    </header>
  );
}