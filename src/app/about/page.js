'use client'
import {Divider, Radio, RadioGroup, Typography} from "@douyinfe/semi-ui";
import {VChart} from "@visactor/react-vchart";
import RelativeEnthusiasmGraph from "@/app/vis/[chatid]/relativeEnthusiasmGraph";
import {IconFaq} from "@douyinfe/semi-icons-lab";


export default function Page() {
    const {Title, Paragraph} = Typography;

    return (
        <div>
            <div style={{
                minHeight: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Title style={{margin: '0'}}>关于ChatEmotion</Title>
                <Divider margin='12px'>
                    <IconFaq size="extra-large"/>
                </Divider>
            </div>
            <Title heading={5}>为什么要开发ChatEmotion？</Title>
            <Paragraph spacing="extended">
                当然是因为数据可视化课程要求有一个小组设计。
            </Paragraph>
            <Paragraph spacing="extended">
                至于为什么选择了做一个微信聊天记录的可视化软件，是因为当时苦苦找不到选题，受到网上一些帖子的启发，大家都觉得这很有趣，就做了。
            </Paragraph>
            <Divider margin='12px'>
            </Divider>
            <Title heading={5}>开发人员有谁？</Title>
            <Paragraph spacing="extended">
                BUAA软院的3名学生。
            </Paragraph>
            <Paragraph spacing="extended">
                策划：Stevex🚀
            </Paragraph>
            <Paragraph spacing="extended">
                前端：Stevex🚀、苏云鹤
            </Paragraph>
            <Paragraph spacing="extended">
                后端：叶子午安
            </Paragraph>
            <Divider margin='12px'>
            </Divider>
            <Title heading={5}>版本</Title>
            <Paragraph spacing="extended">
                2024.6.13 v0.2
            </Paragraph>
        </div>
    );
}