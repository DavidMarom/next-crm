'use client'

import React from 'react'
import usePopupStore from '../store/popup';
import { Popup01 } from './Popup01';


export const PopupProvider = () => {
    const popId = usePopupStore((state) => state.popId);

    return (
        <>
            {(popId === 1) && <Popup01 />}
        </>
    )
}