'use client'


export default function RelativeEnthusiasmGraph(raw_data, raw_data2) {
    // 仅支持双人聊天
    // TODO：支持群聊
    const data = raw_data.data;
    const data2 = raw_data2.data;
    let chat_data = [];
    let flag = false;
    let min = 1;
    let max = -1
    for (let i = 0; i < data.length; i++) {
        let total_message = data[i].number;
        for (let j = 0; j < data2.length; j++) {
            let p_data = data2[j].data;
            let p_name = data2[j].name;
            let rei = null;
            if (total_message !== 0) {
                rei = (p_data[i].number - (total_message - p_data[i].number)) / total_message;
            }
            if (rei!==null){
                min = min>rei ? rei : min;
                max = max<rei ? rei : max;
                rei = rei.toFixed(3)
            }
            chat_data.push({
                time: p_data[i].date,
                messages: p_data[i].number,
                name: p_name,
                REI: rei,
            });
        }
        if (total_message === 0) {
            flag = true;
            chat_data.push({time: data[i].date, messages: 0, name: '无记录', REI: ((0).toFixed(3))});
        } else {
            if(flag){
                chat_data.push({time: data[i].date, messages: 0, name: '无记录', REI: null});
            }
        }
    }

    console.log(chat_data)
    console.log(min,max)


    const commonSpec = {
        type: 'area',
        xField: 'time',
        yField: 'REI',
        seriesField: 'name',
        // sizeField: 'REI',
        // direction: 'horizontal',
        title: {
            visible: true,
            text: '相对热情指数月度分布',
            subtext: '根据收发消息条数计算的反应聊天情绪的指标'
        },
        data: [
            {
                id: 'data',
                values: chat_data
            }
        ],
        axes: [
            {
                orient: 'left',
                type: 'linear',
                title: {
                    visible: true,
                    text: 'Relative Enthusiasm Index'
                },
                domainLine: {
                    visible: true
                },
                // min: min,
                // max: max,
            },
            {
                orient: 'bottom',
                type: 'band',
                title: {
                    visible: true,
                    text: 'Time'
                },
                domainLine: {
                    visible: true
                },
            }
        ],
        legends: [
            {
                visible: true,
                orient: 'right'
            }
        ],
        invalidType: 'break',
        line: {
            style: {
                curveType: 'monotone'
            }
        },
        point:{
            visible: true,
        },
    };


    return (
        commonSpec
    );
}