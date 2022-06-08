import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import { activeNavLinkType } from '../Navbar'

const usersList = [ 'Ivan', 'Vlad', 'Denis', 'Viktor', 'Vadim', 'Kolya' ]

const activeDialog = {
    fontSize: '22px',
    color: 'rgba(117, 149, 231, 0.91)'
}

const Dialogs = () => {
    return <div className={s.dialogsWrapper}>
        <div className={s.dialogsList}>
            {usersList.map( ( user, i ) => <NavLink to={`${i + 1}`}
                                                    className={s.userItem}
                                                    style={( { isActive }: activeNavLinkType ) => isActive
                                                        ? activeDialog
                                                        : {}}>{user}</NavLink> )}
        </div>
        <div className={s.messageBlock}>
            <div className={s.messageItem}>Hello !</div>
            <div className={s.messageItem}>How are you!</div>
            <div className={s.messageItem}>Fine!</div>
        </div>
    </div>
}

export default Dialogs
