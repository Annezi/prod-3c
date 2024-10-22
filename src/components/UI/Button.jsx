import { useState } from 'react';
import './Button.css'

export default function SubscribeButton() {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleClick = () => {
        setIsSubscribed(!isSubscribed);
    };

    return (
        <button 
            className={`subscribe-button ${isSubscribed ? 'subscribed' : ''}`}
            onClick={handleClick}
        >
            <div className='text-subtitle-s'>
				{isSubscribed ? 'Аригато!' : 'Коничива'}
			</div>
        </button>
    );
}