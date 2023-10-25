/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { login } from '@/utils/loginUser';
import { readUser } from '@/utils/readUser';
import { verificationPassword, verificationUser, verificationUsername } from '@/utils/verification';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const user = await readUser();

      if (user) {
        router.push('/');
      }
    } catch {
      console.error('Custom Error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = { username, password };
    const error = verificationUser(user);

    if (error) {
      setErrorUsername(error);
      return;
    }

    login(user);

    router.push('/');
  };

  const handleChangeUsername = (username: string) => {
    setUsername(username);
    setErrorUsername(verificationUsername(username));
  };

  const handleChangePassword = (password: string) => {
    setPassword(password);
    setErrorPassword(verificationPassword(password));
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <main className='login-page'>
      <h1 className='login-page__title'>Login</h1>

      <form
        className='login-page__form'
        onSubmit={handleSubmit}
      >

        <Input
          name='Username or email address'
          placeholder='Misha'
          error={errorUsername}
          value={username}
          onChange={handleChangeUsername}
        />

        <Input
          name='Password'
          type='password'
          placeholder='***********'
          error={errorPassword}
          value={password}
          onChange={handleChangePassword}
        />

        <Button
          type='submit'
          disabled={username === '' || password === ''}
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export default Login;
