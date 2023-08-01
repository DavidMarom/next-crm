'use client'

import React from 'react'
import { Popup, Card01 } from '../components/index'
import usePopupStore from '../store/popup';

export const PopupProvider = () => {
    const popId = usePopupStore((state) => state.popId);
    const setId = usePopupStore((state) => state.setId);
    return (
        <Popup >
            <Card01 width='500px' height='500px'>
                <div className='popup-text'>
                    <p>id: {popId}</p>
                </div>
            </Card01>
        </Popup>
    )
}