'use client'


export default function MonthlyChatDistributionGraph(raw_data, raw_data2) {
    const data = raw_data.data;
    let chat_data = [];
    for (let i=0; i<data.length; i++) {
        chat_data.push({ type:'消息数', time: data[i].date, messages: data[i].number, name: '全部'})
    }

    const data2 = raw_data2.data;
    for (let i=0; i<data2.length; i++) {
        let p_data = data2[i].data;
        let p_name = data2[i].name;
        for(let j=0; j<p_data.length; j++) {
            chat_data.push({ type:'消息数', time: p_data[j].date, messages: p_data[j].number, name: p_name});
        }
    }

    const commonSpec = {
        type: 'line',
        data: [
            {
                id: 'lineData',
                values: chat_data,
            }
        ],
        title: {
            visible: true,
            text: '逐月聊天分布',
        },
        line: {
            style: {
                curveType: 'monotone'
            }
        },
        xField: 'time',
        yField: 'messages',
        seriesField: 'name',
        legends: { visible: true },
        point:{
            visible: false,
        }
    };


    return (
        commonSpec
    );
}