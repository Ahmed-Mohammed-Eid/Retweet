import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AccountSettings from "@/app/components/UserProfileComponents/AccountSettings/AccountSettings";
import axios from "axios";
import {cookies} from "next/headers";

// GET THE USER DATA FROM THE SERVER
const getUserData = async () => {

    // GET THE TOKEN
    const token = cookies().get('retweet-token')?.value;

    console.log(token);

    return await axios.get(`${process.env.BASE_URL}/user/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            // GET THE DATA
            const data = res.data;
            // CHECK IF THE REQUEST IS SUCCESSFUL
            if (data.success) {
                return data.user
            }
        })
        .catch((error) => {
            console.log(error);
        })
}



export default async function Settings({params: {lang}}) {
    // GET THE USER DATA FROM THE SERVER
    const user = await getUserData();

    return (
        <div className={'w-full min-h-screen'}>
            <SecondaryNavigation arrayOfLinks={[
                {
                    href: '/',
                    icon: '/assets/home/House.svg',
                    arrow: true
                },
                {
                    href: '/profile/account',
                    text: 'My Account',
                    arrow: false
                },
            ]}/>
            {/*  CONTENT  */}
            <AccountSettings user={user} lang={lang}/>
        </div>
    )
}
