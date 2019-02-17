import React from 'react';
import Header from '../Header/ActiveHeader';
import Waiting from '../Waiting/Waiting';

const Active = () => (
    <div>
        <Header />
        <div hidden>
            <Waiting />
        </div>
    </div>
);

export default Active;
