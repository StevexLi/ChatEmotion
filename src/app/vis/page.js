'use client'
import {Typography} from "@douyinfe/semi-ui";


export default function Page() {
    const { Title } = Typography;
    return (
        <div style={{color:'red', minHeight:'100%',display: 'flex',justifyContent:'center'}}>
            <Title style={{ margin: '8px 0' }} >聊天记录分析结果📊</Title>
        </div>
    );
}