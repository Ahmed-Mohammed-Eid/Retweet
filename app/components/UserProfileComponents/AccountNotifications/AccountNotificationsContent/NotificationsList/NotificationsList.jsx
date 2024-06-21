"use client";
import React, {useState, useEffect} from 'react';


import classes from './NotificationsList.module.scss';
import NotificationItem from "@/app/components/UserProfileComponents/AccountNotifications/AccountNotificationsContent/NotificationsList/NotificationItem/NotificationItem";


export default function NotificationsList() {

    const [notifications, setNotifications] = useState([]);


    useEffect(() => {
        // GET THE TOKEN
        const token = localStorage.getItem("retweet-token");

        // GET THE NOTIFICATIONS
        fetch(`${process.env.BASE_URL}/user/notifications`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setNotifications(data.notifications);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    return (
        <div className={classes.NotificationsList}>
            {/*  NOTIFICATIONS  */}
            {Array.from({length: 50}, (_, i) => <NotificationItem key={i}/>)}
        </div>
    );
}