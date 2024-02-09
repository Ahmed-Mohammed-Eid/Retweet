"use client";
import {useEffect} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import RedirectAndReload from "@/helpers/redirectAndReload";

export default function SaveGoogleToken() {

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const redirected = searchParams.get('redirected');
        if (redirected === 'true') {
            window.location.href = '/';
        }
    }, [searchParams])

    useEffect(() => {
        const token = searchParams.get('token');
        const userId = searchParams.get('userId');
        const hasProfile = searchParams.get('hasProfile');

        if (token && userId) {
            axios.post(`/api/setLoginCookies`, {
                token,
                userId,
                hasProfile: hasProfile === 'true',
                formType: 'google'
            })
                .then(res => {
                    // SAVE THE USER ID IN LOCAL STORAGE AND COOKIES
                    localStorage.setItem('retweet-token', token);
                    localStorage.setItem('retweet-user-id', userId);
                    localStorage.setItem('retweet-has-profile', hasProfile);

                    // GET THE DATA
                    axios.get(`${process.env.BASE_URL}/user/profile`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                        .then(async response => {
                            // Handle the response here
                            const {data} = response;
                            // CHECK IF THE REQUEST IS SUCCESSFUL
                            if (data.success) {
                                await axios.post(`/api/setLoginCookies`, {
                                    token,
                                    userId,
                                    userEmail: data.user?.email,
                                    userName: data.user?.fullName,
                                    userPhone: data.user?.phoneNumber,
                                    formType: 'login'
                                })
                                    .then(response => {
                                        // SAVE THE USER ID IN LOCAL STORAGE AND COOKIES
                                        localStorage.setItem('retweet-user-id', data.user?._id);
                                        // SAVE THE USER EMAIL IN LOCAL STORAGE AND COOKIES
                                        localStorage.setItem('retweet-user-email', data.user?.email);
                                        // SAVE THE USER NAME IN LOCAL STORAGE AND COOKIES
                                        localStorage.setItem('retweet-user-name', data.user?.fullName);
                                        // SAVE THE USER PHONE IN LOCAL STORAGE AND COOKIES
                                        localStorage.setItem('retweet-user-phone', data.user?.phoneNumber);

                                        setTimeout(() => {
                                            // REDIRECT TO HOME AFTER 1 SECOND
                                            if (hasProfile === 'true') {
                                                console.log('BEFORE REDIRECT TO HOME');
                                                router.push('/?redirected=true');
                                            } else {
                                                console.log('BEFORE REDIRECT TO PROFILE');
                                                router.push('/profile/settings?redirected=true');
                                            }
                                            // SHOW A SUCCESS MESSAGE
                                            toast.success('Logging you in...');
                                        }, 1000);
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    })
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [searchParams]);

    return null
} 