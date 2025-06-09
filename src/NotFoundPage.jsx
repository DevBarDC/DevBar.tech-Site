import { Link } from 'react-router-dom';
import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #23272a 0%, #181b20 100%)',
    color: '#fff',
    borderRadius: '16px',
    margin: '50px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
    padding: '48px 32px',
    width: 'calc(100vw - 100px)',
    maxWidth: 'none',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '2.5em',
    color: '#b5e853',
    marginBottom: '18px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textAlign: 'center',
  },
  code404: {
    fontSize: '2.5em',
    color: '#b5e853',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
    letterSpacing: '2px',
    textDecoration: 'underline',
  },
  paragraph: {
    fontSize: '1.2em',
    color: '#b5e853',
    marginBottom: '12px',
    textAlign: 'center',
  },
  button: {
    background: '#b5e853',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 28px',
    fontSize: '1em',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background 0.2s, color 0.2s',
    textDecoration: 'none',
    display: 'inline-block',
  }
};

const NotFoundPage = () => {
  const [isSmall, setIsSmall] = React.useState(false);

  React.useEffect(() => {
    const checkHeight = () => {
      setIsSmall(window.innerHeight < 500);
    };
    checkHeight();
    window.addEventListener('resize', checkHeight);
    return () => window.removeEventListener('resize', checkHeight);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.code404}>404</div>
      {!isSmall && (
        <>
          <h1 style={styles.heading}>Page Not Found</h1>
          <p style={styles.paragraph}>Sorry, the page you are looking for does not exist.</p>
        </>
      )}
      <Link to="/" style={styles.button}>Go to Homepage</Link>
    </div>
  );
}

export default NotFoundPage;