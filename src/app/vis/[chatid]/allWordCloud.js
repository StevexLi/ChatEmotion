'use client'


export default function AllWordCloud(raw_data) {
    const data = raw_data.data
    let chat_data = [];
    for (let i=0; i<data.length; i++) {
        chat_data.push({ word: data[i][0], count: data[i][1]})
    }
    const commonSpec = {
        type: 'wordCloud',
        // 待申请新外网可访问的存储空间后更换
        // maskShape: 'cardioid',
        title: {
            visible: true,
            text: 'Top100热词',
        },
        nameField: 'word',
        valueField: 'count',
        seriesField: 'word',
        data:{
            name: 'data',
            values: chat_data,
        },
        tooltip: {
            mark: {
                title:{
                    value: datum => datum['word']
                },
                content: [
                    {
                        key: '提到',
                        value: datum => datum['count'] + '次'
                    }
                ]
            }
        }
    };

    return (
        commonSpec
    );
}
