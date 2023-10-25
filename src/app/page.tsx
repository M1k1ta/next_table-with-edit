import { readUser } from '@/utils/readUser';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Providers } from './GlobalRedux/provider';
import { PeopleTable } from '@/components/PeopleTable';
import { Header } from '@/components/Header';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const user = await readUser();

      if (!user) {
        router.push('/login');
      }
    } catch {
      console.error('Custom Error');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Providers>
      <Header />
      <main className='home-page'>
        <PeopleTable />
      </main>
    </Providers>
  );
};
