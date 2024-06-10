'use client'


export default function DailyChatDistributionGraph(raw_data) {
    const data = raw_data.data
    let chat_data = [];
    for (let i=0; i<data.length; i++) {
        chat_data.push({ type:'消息数', time: data[i].date, messages: data[i].number})
    }
    const commonSpec = {
        type: 'bar',
        data: [
            {
                id: 'barData',
                values: chat_data,
            }
        ],
        title: {
            visible: true,
            text: '逐日聊天分布',
        },
        // legends: {
        //     visible: true,
        // },
        xField: 'time',
        yField: 'messages',
        seriesField: 'type',
    };

    return (
        commonSpec
    );
}