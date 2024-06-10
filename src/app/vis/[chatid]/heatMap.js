'use client'


export default function HeatMap(raw_data) {
    const data = raw_data.data
    const chat_data = [];
    let chat_num = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].data.length; j++) {
            chat_data.push({
                var1: data[i].weekday,
                var2: j+'时',
                value: data[i].data[j]
            });
            chat_num += data[i].data[j];
        }
    }

    const commonSpec = {
        type: 'common',
        data: [
            {
                id: 'data0',
                values: chat_data
            }
        ],
        series: [
            {
                type: 'heatmap',
                regionId: 'region0',
                xField: 'var1',
                yField: 'var2',
                valueField: 'value',
                cell: {
                    style: {
                        fill: {
                            field: 'value',
                            scale: 'color'
                        }
                    }
                }
            }
        ],
        color: {
            type: 'linear',
            domain: [
                {
                    dataId: 'data0',
                    fields: ['value']
                }
            ],
            range: ['#feedde', '#fdbe85', '#fd8d3c', '#e6550d', '#a63603']
        },
        axes: [
            {
                orient: 'top',
                type: 'band',
                grid: {
                    visible: false
                },
                domainLine: {
                    visible: false
                },
                label: {
                    space: 1,
                    style: {
                        textAlign: 'center',
                        textBaseline: 'center',
                        // angle: 90,
                        fontSize: 12
                    }
                },
                bandPadding: 0,
            },
            {
                orient: 'left',
                type: 'band',
                grid: {
                    visible: false
                },
                domainLine: {
                    visible: false
                },
                label: {
                    space: 1,
                    style: {
                        fontSize: 12
                    }
                },
                bandPadding: 0
            }
        ],
        legends: {
            visible: true,
            orient: 'right',
            position: 'start',
            type: 'color',
            field: 'value',
            padding: [0],
        },
        title: {
            visible: true,
            text: `聊天时段热力图`
        },
        tooltip: {
            mark: {
                title:{
                    value: datum => datum['var1']+'-'+datum['var2']
                },
                content: [
                    {
                        key: '消息数',
                        value: datum => datum['value']
                    },
                    {
                        key: '占比',
                        value: datum => ((datum['value']/chat_num)*100).toFixed(2)+'%',
                    }
                ]
            }
        }
    };

    return (
        commonSpec
    );
}