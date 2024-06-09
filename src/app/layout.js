'use client'

import {Avatar, Breadcrumb, Button, Layout, Nav, Skeleton} from "@douyinfe/semi-ui";
import {
    IconBell,
    IconBytedanceLogo,
    IconHelpCircle,
    IconHistogram,
    IconHome,
    IconInfoCircle,
} from "@douyinfe/semi-icons";
import {IconFaq} from "@douyinfe/semi-icons-lab";
import Link from "next/link";


export default function RootLayout({children}) {
    const {Header, Footer, Sider, Content} = Layout;
    const commonStyle = {
        height: 64,
        lineHeight: '64px',
        background: 'var(--semi-color-fill-0)'
    };
    return (
        <html lang="en">
        <head>
            <title>ChatEmotion 信情</title>
            <meta name="description" content="ChatEmotion是一款微信聊天记录可视化分析软件。"/>
        </head>
        <body style={{
            margin: '0',
            height: '100vh',
            color: 'var(--semi-color-text-0)',
            backgroundColor: 'var( --semi-color-bg-0)'
        }}>
        <Layout style={{border: '1px solid var(--semi-color-border)', height: '100%'}}>
            <Sider style={{backgroundColor: 'var(--semi-color-bg-1)'}}>
                <Nav
                    renderWrapper={({itemElement, isSubNav, isInSubNav, props}) => {
                        const routerMap = {
                            Home: "/",
                            Vis: "/vis",
                            About: "/about",
                        };
                        return (
                            <Link
                                style={{textDecoration: "none"}}
                                href={routerMap[props.itemKey]}
                            >
                                {itemElement}
                            </Link>
                        );
                    }} // 自定义渲染，使用nextjs的link
                    defaultSelectedKeys={['Home']}
                    style={{maxWidth: 220, height: '100%'}}
                    items={[
                        {itemKey: 'Home', text: '首页', icon: <IconHome size="large"/>},
                        {itemKey: 'Vis', text: '聊天记录可视化', icon: <IconHistogram size="large"/>},
                        {itemKey: 'About', text: '关于', icon: <IconInfoCircle size="large"/>},
                    ]}
                    header={{
                        logo: <IconFaq style={{fontSize: 36}}/>,
                        text: 'ChatEmotion\n信情',
                    }}
                    footer={{
                        collapseButton: true,
                    }}
                />
            </Sider>
            <Layout>
                <Header style={{backgroundColor: 'var(--semi-color-bg-1)', height: '56px'}}>
                    <Nav
                        mode="horizontal"
                        style={{height: '100%'}}
                        footer={
                            <>
                                <Button
                                    theme="borderless"
                                    icon={<IconBell size="large"/>}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                />
                                <Button
                                    theme="borderless"
                                    icon={<IconHelpCircle size="large"/>}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                />
                                <Avatar color="orange" size="small">
                                    YJ
                                </Avatar>
                            </>
                        }
                    ></Nav>
                </Header>
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                    }}
                >
                    <Layout
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            height: '100%',
                            padding: '32px',
                            overflow: 'scroll',
                            maxHeight: 'calc(100vh - 146px)',
                        }}
                        className={'semi-light-scrollbar'}
                    >
                        {children}
                    </Layout>
                </Content>
                <Footer
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '20px',
                        color: 'var(--semi-color-text-2)',
                        backgroundColor: 'rgba(var(--semi-grey-0), 1)',
                        height: '40px',
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconBytedanceLogo size="large" style={{marginRight: '8px'}}/>
                        <span>Copyright © 2024 Data Visualization Group 6. All Rights Reserved. </span>
                    </span>
                    <span
                        style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <span>反馈建议</span>
                    </span>
                </Footer>
            </Layout>
        </Layout>
        </body>
        </html>
    );
}
