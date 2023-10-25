import './login.scss';

export const metadata = {
  title: 'Login',
};

interface Props {
  children: React.ReactNode,
};

const LoginLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
};

export default LoginLayout;
