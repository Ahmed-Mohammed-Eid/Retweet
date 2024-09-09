"use client";

import classes from "./Messages.module.scss";
import ChatUser from "@/app/components/UserProfileComponents/Messages/ChatUser";
import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SentMessage from "@/app/components/UserProfileComponents/Messages/SentMessage";
import ReceivedMessage from "@/app/components/UserProfileComponents/Messages/ReceivedMessage";
import {useEffect, useRef, useState} from "react";

// REDUX
import {useDispatch, useSelector} from "react-redux";
import {
    updateCreatorId,
    updateMessage,
    updateMessages,
    addMessage,
    updateSendersList,
    updateUserId
} from "@/redux/Slices/chatSlice";
import axios from "axios";
import toast from "react-hot-toast";
// NAVIGATION
import {useSearchParams} from "next/navigation";

export default function MessagesPage() {

    const chatBoxRef = useRef(null);

    // REDUX // REMEMBER THE LOGIC OF LOADING THE CREATOR ID
    const dispatch = useDispatch();
    const {message, creatorId, messages, sendersList, userId, selectedUser} = useSelector(state => state.chat);

    // NAVIGATION
    const searchParams = useSearchParams();

    // STATE
    const [isUsersMenuOpen, setIsUsersMenuOpen] = useState(false);

    // SEND MESSAGE HANDLER
    const sendMessageHandler = () => {
        // GET TOKEN
        const token = localStorage.getItem('retweet-token')

        if (!token) {
            return toast.error('You need to be logged in to send a message');
        }

        if (!message) {
            return toast.error('Please type a message');
        }

        if (!creatorId) {
            return toast.error('Please select a user to send a message to');
        }

        // SEND MESSAGE
        axios.post(`${process.env.BASE_URL}/send/message`, {
                message: message,
                receiverUserId: creatorId
            },
            {headers: {Authorization: `Bearer ${token}`}})
            .then(_ => {
                // CLEAR MESSAGE
                dispatch(updateMessage(''));
                // ADD MESSAGE
                dispatch(addMessage({
                    message: message,
                    senderUserId: userId,
                    createdAt: new Date()
                }));
                // SCROLL TO BOTTOM
                const timer = setTimeout(() => {
                    scrollToBottom();
                    clearTimeout(timer);
                }, 100);
            })
            .catch(error => {
                toast.error(error.response?.data?.message || 'An error occurred');
            });
    }

    // GET SENDERS LIST
    const getSendersList = () => {
        // GET TOKEN
        const token = localStorage.getItem('retweet-token')

        if (!token) {
            return toast.error('You need to be logged in to view messages');
        }

        axios.get(`${process.env.BASE_URL}/senders/list`, {headers: {Authorization: `Bearer ${token}`}})
            .then(response => {
                dispatch(updateSendersList(response?.data?.sendersList || []));
                dispatch(updateUserId(response?.data?.userId || ''));
            })
            .catch(error => {
                toast(error.response?.data?.message || 'An error occurred');
            });
    }

    useEffect(() => {
        getSendersList();

        // IF NO CREATOR ID IS SELECTED THEN GET THE SEARCH PARAMS creatorId AND SET IT TO THE REDUX STATE IF THE SEARCH PARAMS creatorId IS NOT EQUAL TO THE REDUX STATE creatorId
        // IF NO CREATOR ID IN SEARCH PARAMS THEN SET THE FIRST USER IN THE SENDERS LIST TO THE CREATOR ID
        if (!creatorId) {
            if (searchParams.get('creatorId') && searchParams.get('creatorId') !== creatorId) {
                dispatch(updateCreatorId(searchParams.get('creatorId')));
            } else {
                if (sendersList.length > 0) {
                    dispatch(updateCreatorId(sendersList[0]._id));
                    dispatch(updateMessages(sendersList[0].messages));
                }
            }
        }
    }, []);

    // SCROLL TO BOTTOM OF THE CHAT HANDLER
    function scrollToBottom() {
        //     MAKE THE SCROLL SMOOTH
        chatBoxRef.current.scrollTo({
            top: chatBoxRef.current.scrollHeight,
            behavior: "smooth"
        });
    }

    // EFFECT TO SCROLL TO BOTTOM OF THE CHAT WHEN SELECTED USER CHANGES
    useEffect(() => {
        const timer = setTimeout(() => {
            scrollToBottom();
            clearTimeout(timer);
        }, 1000);
    }, [creatorId]);

    return (
        <>
            <SecondaryNavigation
                arrayOfLinks={[
                    {
                        href: '/',
                        icon: '/assets/home/House.svg',
                        arrow: true
                    },
                    {
                        href: '/profile/messages',
                        text: 'Messages',
                        arrow: false
                    },
                ]}
            />
            <div className={"py-8"} id={"chat__box-hash"}>
                <div className={[classes.messages].join(' ')}>
                    <div className={[classes.messages_left, isUsersMenuOpen ? classes.active : ''].join(' ')}>
                        <div className={classes.messages_left_header}>
                            <button
                                className={"btn btn-primary flex items-center " + classes.Menu}
                                onClick={() => setIsUsersMenuOpen(!isUsersMenuOpen)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H13C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17C14 16.7348 13.8946 16.4804 13.7071 16.2929C13.5196 16.1054 13.2652 16 13 16ZM3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                                        fill="black"/>
                                </svg>
                            </button>
                        </div>
                        <div className={classes.messages_left_body}>
                            {sendersList && sendersList.map((sender, index) => {
                                return <ChatUser
                                    key={index}
                                    user={sender}
                                    onClick={() => {
                                        dispatch(updateCreatorId(sender._id));
                                        dispatch(updateMessages(sender.messages));
                                    }}
                                />
                            })}
                        </div>
                    </div>
                    <div className={classes.messages_right}>
                        <div className={classes.messages_right_header}>
                            <h3 className={"text-l font-bold uppercase"}>
                                <button
                                    className={"btn btn-primary flex items-center " + classes.Menu}
                                    onClick={() => setIsUsersMenuOpen(!isUsersMenuOpen)}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H13C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17C14 16.7348 13.8946 16.4804 13.7071 16.2929C13.5196 16.1054 13.2652 16 13 16ZM3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                                            fill="black"/>
                                    </svg>
                                </button>
                                {selectedUser?.fullName || ""}
                            </h3>
                            {/*<button className={"btn btn-primary flex items-center " + classes.Delete}>*/}
                            {/*    <svg width="24" height="24" viewBox="0 0 30 30" fill="none"*/}
                            {/*         xmlns="http://www.w3.org/2000/svg">*/}
                            {/*        <path*/}
                            {/*            d="M21.2711 7.47305H27.5431V9.98205H25.0341V26.2891C25.0341 26.6216 24.9019 26.9406 24.6668 27.1758C24.4316 27.4109 24.1126 27.5431 23.7801 27.5431H6.21905C5.88647 27.5431 5.56751 27.4109 5.33234 27.1758C5.09717 26.9406 4.96505 26.6216 4.96505 26.2891V9.98205H2.45605V7.47305H8.72806V3.71005C8.72806 3.37747 8.86017 3.05851 9.09534 2.82334C9.33051 2.58817 9.64947 2.45605 9.98205 2.45605H20.0171C20.1817 2.45605 20.3448 2.48849 20.4969 2.55151C20.6491 2.61453 20.7873 2.7069 20.9038 2.82334C21.0202 2.93979 21.1126 3.07803 21.1756 3.23017C21.2386 3.38231 21.2711 3.54538 21.2711 3.71005V7.47305ZM22.5261 9.98205H7.47305V25.0341H22.5261V9.98205ZM11.2361 13.7451H13.7451V21.2711H11.2361V13.7451ZM16.2531 13.7451H18.7621V21.2711H16.2561L16.2531 13.7451ZM11.2361 4.96505V7.47305H18.7621V4.96505H11.2361Z"*/}
                            {/*            fill="#FF1111"/>*/}
                            {/*    </svg>*/}
                            {/*    <span className={"ml-1 mr-2 font-bold"} style={{color: "#FF1111"}}>*/}
                            {/*    Delete*/}
                            {/*</span>*/}
                            {/*</button>*/}
                        </div>
                        <div className={classes.messages_right_body} ref={chatBoxRef}>
                            {messages && messages.map((message, index) => {
                                if (message.senderUserId === userId) {
                                    return <SentMessage key={index} message={message.message}
                                                        time={message?.createdAt}/>
                                } else {
                                    return <ReceivedMessage key={index} message={message.message}
                                                            time={message?.createdAt}/>
                                }
                            })}
                        </div>
                        {selectedUser?.id && (
                            <div className={classes.messages_right_footer}>
                                {/*<input type={"file"} id={"file"} style={{display: "none"}} />*/}
                                {/*<label className={"btn btn-primary cursor-pointer"} id={"file-label"} htmlFor={"file"}>*/}
                                {/*    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                                {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                {/*        <path*/}
                                {/*            d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.008 3C21.2712 3.00027 21.5235 3.105 21.7095 3.2912C21.8955 3.47739 22 3.72981 22 3.993V13H20V5H4V19L14 9L17 12V14.829L14 11.829L6.827 19H14V21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H21.008ZM8 7C8.39556 7 8.78224 7.1173 9.11114 7.33706C9.44004 7.55682 9.69638 7.86918 9.84776 8.23463C9.99913 8.60009 10.0387 9.00222 9.96157 9.39018C9.8844 9.77814 9.69392 10.1345 9.41421 10.4142C9.13451 10.6939 8.77814 10.8844 8.39018 10.9616C8.00222 11.0387 7.60009 10.9991 7.23463 10.8478C6.86918 10.6964 6.55682 10.44 6.33706 10.1111C6.1173 9.78224 6 9.39556 6 9C6 8.46957 6.21071 7.96086 6.58579 7.58579C6.96086 7.21071 7.46957 7 8 7Z"*/}
                                {/*            fill="#F4AC3C"/>*/}
                                {/*    </svg>*/}
                                {/*</label>*/}
                                <input
                                    type="text"
                                    className={"input input-primary"}
                                    placeholder={"Type a message"}
                                    onChange={(e) => dispatch(updateMessage(e.target.value))}
                                    value={message}
                                    // ON CLICK ENTER AND FOCUS THE INPUT FIELD RUN THE HANDLER
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            sendMessageHandler();
                                        }
                                    }}
                                />
                                <button className={"btn btn-primary flex items-center mr-2"}
                                        onClick={sendMessageHandler}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.00007 11H9.00007V13H3.00007V22.154C3.00008 22.2409 3.02274 22.3263 3.0658 22.4017C3.10887 22.4772 3.17085 22.5401 3.24565 22.5844C3.32044 22.6286 3.40547 22.6525 3.49234 22.6539C3.57922 22.6552 3.66494 22.6339 3.74107 22.592L22.2031 12.438C22.2815 12.3949 22.3468 12.3314 22.3924 12.2544C22.4379 12.1774 22.4619 12.0895 22.4619 12C22.4619 11.9105 22.4379 11.8227 22.3924 11.7456C22.3468 11.6686 22.2815 11.6052 22.2031 11.562L3.74107 1.40802C3.66494 1.36614 3.57922 1.34482 3.49234 1.34616C3.40547 1.34751 3.32044 1.37146 3.24565 1.41567C3.17085 1.45988 3.10887 1.52283 3.0658 1.59829C3.02274 1.67375 3.00008 1.75913 3.00007 1.84602L3.00007 11Z"
                                            fill="#00ACEE"/>
                                    </svg>
                                </button>
                            </div>)}
                    </div>
                </div>
            </div>
        </>
    );
}
