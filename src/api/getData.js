// import {headers} from "next/headers";

import {NextResponse} from "next/server";

async function get1Data(api, uid) {
    const res = await fetch(`http://8.130.25.189:8080/analysis/${api}?uuid=${uid}`,
        {headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                'Content-Type': 'text/html; charset=utf-8',
            },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.


    if (!res.ok) {
        console.log('failed to get data', api, uid)
        throw new Error('Failed to fetch data')
    }
    // console.log(res)
    return res.json()
}


export default async function getData(uid) {
    const apis = ["hour_chat","daily_chat","heat_map","monthly_total","monthly_person"];
    const data = [];
    for (let i=0;i<apis.length;i++){
        data.push(get1Data(apis[i],uid))
    }
    const [hour_chat, daily_chat,heat_map, monthly_total, monthly_person] = await Promise.all(data)
    return [hour_chat, daily_chat, heat_map, monthly_total, monthly_person]
}