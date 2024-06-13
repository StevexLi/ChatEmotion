'use client'


import {VChart} from "@visactor/react-vchart";
import {Col, Row} from "@douyinfe/semi-ui";

export default function WordFrequencyComponent({raw_data}) {
    const data = raw_data.data
    let chat_data = [];
    for (let i=0; i<data.length; i++) {
        chat_data.push([])
        for (let j=0; j<data[i].data.length; j++) {
            chat_data[i].push({word: data[i].data[j][0], count: data[i].data[j][1], sender:data[i].name})
        }
    }
    // TODO: 群聊
    let commonSpec = [];
    for (let i=0; i<chat_data.length; i++) {
        commonSpec.push({
            type: 'bar',
            data: [
                {
                    id: 'barData'+i,
                    values: chat_data[i],
                }
            ],
            title: {
                visible: true,
                text: data[i].name+'的Top20词',
                // align: 'center',
                align: (i % 2)!==0 ? 'left' : 'right',
            },
            // legends: {
            //     visible: true,
            // },
            xField: 'count',
            yField: 'word',
            seriesField: 'word',
            direction: 'horizontal',
            tooltip: {
                dimension: {
                    title:{
                        value: datum => datum['word']
                    },
                    content: [
                        {
                            key: '提到',
                            value: datum => datum['count'] + '次'
                        }
                    ]
                },
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
            },
            axes: [
                {
                    orient: (i%2!==0) ? 'left' : 'right',
                },
                {
                    orient: 'bottom',
                    inverse: (i%2===0),
                }
            ],
            padding: 0,
        })
    }

    return (
        <Row gutter={10}>
            <Col span={12}>
                <VChart spec={commonSpec[0]}></VChart>
            </Col>
            <Col span={12}>
                <VChart spec={commonSpec[1]}></VChart>
            </Col>
        </Row>
    );
}
