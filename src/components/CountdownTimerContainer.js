import './CountdownTimerContainer.css';
import CountdownTime from './CountdownTime';

const CountdownTimerContainer = () => {
    return (
        <div className='countdown-container'>
            <h1>Countdown Until My Birthday</h1>
            <CountdownTime />
        </div>
    )
};

export default CountdownTimerContainer;