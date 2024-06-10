'use client'
import {Radio, RadioGroup, Typography} from "@douyinfe/semi-ui";
import {useCallback, useMemo, useState} from "react";
import {VChart} from "@visactor/react-vchart";
import {initVChartSemiTheme} from "@visactor/vchart-semi-theme";


export default function Page() {
    const { Title } = Typography;
    initVChartSemiTheme({
        // /** 初始亮暗色模式 */
        // defaultMode: 'light',
        /** 是否监听亮暗色模式自动更改图表主题，默认为 true */
        isWatchingMode: true,
        /** 是否监听主题变化自动更改图表主题，默认为 false（适用于 semi 官方主题切换接口：https://semi.design/dsm/install_switcher）*/
        isWatchingThemeSwitch: true,
    });
    const commonSpec = {
        type: 'bar',
        data: [
            {
                id: 'barData',
                values: [
                    { type:'Date', month: 'Monday', sales: 22 },
                    { type:'Date', month: 'Tuesday', sales: 13 },
                    { type:'Date', month: 'Wednesday', sales: 25 },
                    { type:'Date', month: 'Thursday', sales: 29 },
                    { type:'Date', month: 'Friday', sales: 38 }
                ]
            }
        ],
        title: {
            visible: true,
            text: 'Bar chart',
            subtext: 'This is a bar chart',
        },
        legends: {
            visible: true,
        },
        xField: 'month',
        yField: 'sales',
        seriesField: 'type',
    };

    return (
        <div>
            <div style={{color:'red', minHeight:'100%',display: 'flex',alignItems: 'center',justifyContent:'center'}}>
                <Title style={{ margin: '8px 0' }} >苏云币 💗 黄霄云</Title>
            </div>
            <div>
                <div style={{ height: 440 }}>
                    <VChart
                        spec={commonSpec}
                    />
                </div>
            </div>
        </div>
    );
}