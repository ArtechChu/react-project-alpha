import React from 'react';

function FocusInput (){
    return (
        <div>
            <label htmlFor="focusInput">点我光标自动聚焦到输入框</label>
            <input type="text" id="focusInput" />
        </div>
    );
}

export default FocusInput