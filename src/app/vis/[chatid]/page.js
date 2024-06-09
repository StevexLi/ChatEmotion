'use client'
import {Input, Typography, Col, Row, Skeleton} from "@douyinfe/semi-ui";
import {
    IconLink
} from "@douyinfe/semi-icons";
import React from 'react';
import {useRecoilValue} from "recoil";
import {chatData} from "@/recoil/chatData";


export default function Page({params}) {
    const {Title, Text} = Typography;
    const data = useRecoilValue(chatData)
    console.log(1)
    console.log(params)
    console.log(data);
    const skeleton_style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginBottom: '10px',
    };

    const placeholder = (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '25vw'}}>
            <Skeleton.Button style={{width:'61%', marginBottom:'10px'}}/>
            <Skeleton.Paragraph style={{width:'100%',marginBottom: '5px'}} rows={1}/>
            <Skeleton.Paragraph style={{width:'40%',marginBottom: '10px'}} rows={1}/>
        </div>
    );

    const placeholder1 = (
        <div>
            <Skeleton.Image style={{ width: '100%', height: 150 }} />
            <Skeleton.Title style={{ width: '30%', marginTop: 10 , marginBottom: 10 }} />
        </div>
    );
    const placeholder2 = (
        <div>
            <Skeleton.Image style={{ width: '100%', height: 344 }} />
            <Skeleton.Title style={{ width: '30%', marginTop: 10 , marginBottom: 10 }} />
        </div>
    );

    if (!data) {
        return (
            <div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Skeleton placeholder={placeholder} loading={true} style={{textAlign: 'center'}} active>
                    </Skeleton>
                </div>
                <div className="grid">
                    <Row gutter={20}>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <Skeleton placeholder={placeholder1} loading={true} style={{textAlign: 'center'}} active>
                                    </Skeleton>
                                </Col>
                            </Row>
                            <Row>
                                <Skeleton placeholder={placeholder1} loading={true} style={{textAlign: 'center'}} active>
                                </Skeleton>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Skeleton placeholder={placeholder2} loading={true} style={{textAlign: 'center'}} active>
                            </Skeleton>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Title style={{margin: '0 0 8px 0'}}>聊天记录分析结果📊</Title>
                <Input prefix="ChatID: " disabled={true} defaultValue={params.chatid} style={{width: '370px'}}></Input>
                <Text icon={<IconLink/>} copyable={{content: params.chatid}}>分享链接</Text>
                {data[1].data[0].date}
            </div>
            <div className={'grid'}>
                <Row>
                    <Col span={24}><Title heading={2} style={{margin: '8px 0'}} underline>Part1: Daily Chat
                        Distribution</Title></Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Row>
                            <Title heading={2} style={{margin: '8px 0'}} underline>Part1: Daily Chat
                                Distribution</Title>
                        </Row>
                        <Row>
                            <Title heading={2} style={{margin: '8px 0'}} underline>Part1: Daily Chat
                                Distribution</Title>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Title heading={2} style={{margin: '8px 0'}} underline>Part1: Daily Chat Distribution</Title>
                    </Col>
                </Row>
            </div>
        </div>
    );
}