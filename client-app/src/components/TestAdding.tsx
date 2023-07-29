import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

interface TestProps {
    path: string,
}

const TestAdding = observer(({path}: TestProps) => {

    const [test, setTest] = useState();


    return (
        <div className='admin__form__test'>
            <div>
                <span>1.</span>
                <input type="text" placeholder='Питання'/>
            </div>
            <input type="text" placeholder='1. Правильна відповідь'/>
            <input type="text" placeholder='2. Неправильна відповідь'/>
            <input type="text" placeholder='3. Неправильна відповідь'/>
            <input type="text" placeholder='4. Неправильна відповідь'/>           
        </div> 
    );
});

export default TestAdding;