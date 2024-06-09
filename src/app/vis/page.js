'use client'
import {Input, Typography} from "@douyinfe/semi-ui";
import {
    IconSearch
} from "@douyinfe/semi-icons";


export default function Page() {
    const { Title } = Typography;
    return (
        <div style={{color:'red', minHeight:'100%',display: 'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
            <Title style={{ margin: '8px 0' }} >上传.csv聊天记录</Title>
            <Title style={{ margin: '8px 0' }} >或搜索ChatID</Title>
            {/*<Input suffix={<IconSearch />} showClear></Input>*/}
        </div>
    );
}