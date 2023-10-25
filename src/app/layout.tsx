import './index.scss';

export const metadata = {
  title: 'Table',
};

interface Props {
  children: React.ReactNode,
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
