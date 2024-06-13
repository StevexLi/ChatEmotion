"use client"
import getData from "@/api/getData";
import React from "react";
import {RecoilRoot, useSetRecoilState} from 'recoil';
import {chatData} from "@/recoil/chatData";

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
        <RecoilRoot>
            <LayoutComponent {...props} />
        </RecoilRoot>
    )
}
