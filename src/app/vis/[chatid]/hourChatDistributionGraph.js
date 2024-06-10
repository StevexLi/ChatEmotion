'use client'

export default function HourChatDistributionGraph(raw_data) {
    const data = raw_data.data
    let chat_data = [];
    let chat_num = 0;
    for (let i=0; i<data.length; i++) {
        chat_data.push({ type:'消息数', time: i+'时', messages: data[i]})
        chat_num += data[i];
    }

    const commonSpec = {
        type: 'pie',
        data: [
            {
                id: 'id0',
                values: chat_data,
            }
        ],
        valueField: 'messages',
        categoryField: 'time',
        label: {
            visible: true
        },
        tooltip: {
            mark: {
                content: [
                    {
                        key: datum => datum['type'],
                        value: datum => datum['messages']
                    },
                    {
                        key: '占比',
                        value: datum => ((datum['messages']/chat_num)*100).toFixed(2)+'%',
                    }
                ]
            }
        }
    };

    const donutWithIndicator = {
        title: {
            visible: true,
            text: '单日聊天分布',
        },
        legends: {
            visible: true,
            orient: 'bottom',
            maxRow: 1,
            pager: {
                // type: 'scrollbar',
            }
        },
        indicator: {
            visible: true,
            trigger: 'select',
            title: {
                visible: true,
                style: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    text: data => {
                        if (data) {
                            const value = data['time'];
                            return value ? value : null;
                        }
                        return '消息总条数';
                    }
                }
            },
            content: [
                {
                    visible: true,
                    fontWeight: 'bold',
                    style: {
                        fontSize: 20,
                        text: data => {
                            if (data) {
                                const value = data['messages'];
                                return value ? (value/chat_num*100).toFixed(2)+'%' : null;
                            }
                            return chat_num;
                        }
                    }
                }
            ]
        }
    }

    // 条形图
    // const commonSpec1 = {
    //     type: 'bar',
    //     data: [
    //         {
    //             id: 'barData',
    //             values: chat_data,
    //         }
    //     ],
    //     title: {
    //         visible: true,
    //         text: '单日聊天分布',
    //     },
    //     // legends: {
    //     //     visible: true,
    //     // },
    //     xField: 'time',
    //     yField: 'messages',
    //     seriesField: 'type',
    // };


    return (
        {...commonSpec, ...donutWithIndicator}
    );
}