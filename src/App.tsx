import { useState, useEffect } from 'react';
import AppRouter from './routing/AppRouter';
import LoadingScreen from './components/LoadingScreen';
// import { ThemeInit } from '../.flowbite-react/init';
function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

            return () => clearTimeout(timer);
    }, []);

    if (loading) return <LoadingScreen />;

    return <AppRouter />;

  // return (
  //   <>
  //     <ThemeInit />
  //     <AppRouter />
  //   </>
  // );
}

export default App;
