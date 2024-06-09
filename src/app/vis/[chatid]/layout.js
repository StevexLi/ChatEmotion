"use client"
import getData from "@/api/getData";
import React from "react";
import { useSetRecoilState } from 'recoil';
import {chatData} from "@/recoil/chatData";
import ChatDataProvider from "@/recoil/chatDataProvider";

const LayoutComponent = ({children, params}) => {
    const setChatData = useSetRecoilState(chatData)

    React.useEffect(() => {
        async function fetchData() {
            const data = await getData(params.chatid);
            console.log('Fetched data:', data);
            setChatData(data);
        }
        fetchData();
    }, [params.chatid, setChatData]);

    return (
        <div>
            {children}
        </div>
    );
}

export default function Layout(props) {

    return (
        <ChatDataProvider>
            <LayoutComponent {...props} />
        </ChatDataProvider>
    )
}
