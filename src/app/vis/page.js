'use client'
import {Button, Input, Typography} from "@douyinfe/semi-ui";
import {
    IconLink,
    IconSearch
} from "@douyinfe/semi-icons";
import UploadCsvComponent from "@/api/uploadCsvComponent";
import {IconUpload} from "@douyinfe/semi-icons-lab";
import React, {useState} from "react";
import {useRouter} from "next/navigation";


export default function Page() {
    const {Title, Text} = Typography;
    const router = useRouter();
    const redirect = (id) => {
        router.push(`/vis/${id}`)
    }
    const [value, setValue] = useState('');
    const onChange = (value, e) => {
        setValue(value);
    }
    const onEnterPress = () => {
        redirect(value)
    }
    return (
        <div style={{
            minHeight: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <Title style={{margin: '8px 0'}}>上传.csv聊天记录<IconUpload size={"extra-large"}/></Title>
            <UploadCsvComponent></UploadCsvComponent>
            <Text link={{href: 'https://memotrace.cn/doc/posts/deploy/install.html', target: '_blank'}}
                  icon={<IconLink/>} underline style={{margin: '8px 0'}}>使用MemoTrace获取.csv格式的微信聊天记录</Text>
            <Title style={{margin: '8px 0'}}>或搜索ChatID</Title>
            <Input prefix="ChatID: " showClear style={{width: '61%', spellCheck: "false"}} size={"large"}
                   placeholder='ChatID与聊天记录一一对应' value={value} onChange={onChange} onEnterPress={onEnterPress}
                   suffix={<Button onClick={onEnterPress} icon={<IconSearch style={{color: 'white'}}/>} theme="solid"
                                   type={'secondary'}>搜索</Button>}></Input>
        </div>
    );
}