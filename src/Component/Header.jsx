import { useSelector } from 'react-redux';
import Button from './Button';
import '../App.css'
const Header = () => {
    const selector = useSelector(state => state.counterReducer);

    return (
      <div style={styles.main}>
        <header  className='header'>
            <div style={styles.container}>
                <h1 style={styles.title}>Counter App</h1>
                <h2 style={styles.counter}>Count: {selector.counter}</h2>
            </div>
            <Button/>
        </header>
        </div>
    );
};

const styles = {
  main:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    // backgroundColor: '#f0f0f0',
  },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '0',
        paddingBottom: '10px',
    },
    counter: {
        fontSize: '2rem',
        color: '#61dafb',
    },
};

export default Header;
