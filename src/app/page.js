'use client'
import {Avatar, Button, Highlight, List, Typography} from '@douyinfe/semi-ui';
import React from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const {Title, Text, Paragraph} = Typography;
    const router = useRouter();
    const sourceString = '欢迎使用ChatEmotion';
    const searchWords = ['ChatEmotion'];
    const data = [
        {
            avtr: '简',
            title: '简单',
            color: 'light-blue',
            text: '上传你的聊天记录，剩下的ChatEmotion帮你搞定。'
        },
        {
            avtr: '强',
            title: '强大',
            color: 'grey',
            text: '提供多种分析维度，帮助你全面了解你和TA的聊天模式。'
        },
        {
            avtr: 'free',
            title: '自由',
            color: 'light-green',
            text: '响应式布局，自定义明暗，图表支持交互，用你的方式寻找答案。'
        },
    ];
    const toVis = () =>{
        router.push('/vis')
    }
    return (
        <div style={{
            minHeight: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontSize: '64px'
        }}>
            <Title heading={1}>
                <Highlight
                    sourceString={sourceString}
                    searchWords={searchWords}
                    highlightStyle={{
                        borderRadius: 6,
                        marginLeft: 4,
                        marginRight: 4,
                        paddingLeft: 4,
                        paddingRight: 4,
                        backgroundColor: 'var(--semi-color-primary)',
                        color: 'rgba(var(--semi-white), 1)'
                    }}
                />
            </Title>
            <Title heading={5} type="secondary">可能会是你最喜欢的微信聊天记录可视化软件。</Title>
            <Button onClick={toVis} theme="solid"
                    type={'secondary'} style={{margin: '8px'}}>快速开始🚀</Button>
            <div style={{padding: 12, border: '1px solid var(--semi-color-border)', margin: 12}}>
                <List
                    dataSource={data}
                    layout="horizontal"
                    renderItem={item => (
                        <List.Item
                            header={<Avatar color={item.color}>{item.avtr}</Avatar>}
                            main={
                                <div>
                                    <span style={{color: 'var(--semi-color-text-0)'}}>
                                    <h2>{item.title}</h2></span>
                                    <p style={{color: 'var(--semi-color-text-2)', margin: '4px 0'}}>
                                        {item.text}
                                    </p>
                                </div>
                            }
                        />
                    )}
                />
            </div>
        </div>
    );
}
