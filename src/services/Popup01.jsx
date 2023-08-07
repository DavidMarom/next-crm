'use client'

import React from 'react'
import { Popup, Card01 } from '../components/index'
import usePopupStore from '../store/popup';

export const Popup01 = () => {
    const setId = usePopupStore((state) => state.setId);
    const popId = usePopupStore((state) => state.popId);

    return (
        <Popup >
            <Card01 width='500px' height='500px'>
                <div className='popup-text'>
                    <p>id: {popId}</p>
                    <button onClick={() => {setId(0)}}>close</button>
                </div>
            </Card01>
        </Popup>
    )
}