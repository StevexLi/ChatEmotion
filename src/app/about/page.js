'use client'
import {Typography} from "@douyinfe/semi-ui";


export default function Page() {
    const { Title } = Typography;
    return (
            <div style={{color:'red', minHeight:'100%',display: 'flex',alignItems: 'center',justifyContent:'center'}}>
                <Title style={{ margin: '8px 0' }} >苏云币 💗 黄霄云</Title>
            </div>
    );
}