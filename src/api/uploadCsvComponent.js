'use client'


import {Button, Upload} from "@douyinfe/semi-ui";
import {
    IconBolt,
} from "@douyinfe/semi-icons";
import {useRouter} from "next/navigation";

export default function UploadCsvComponent() {
    const router = useRouter()
    let action = 'http://8.130.25.189:8080/api/csv/upload'
    let limit = 1;

    let chat_id = null;
    const redirect = (id) => {
        router.push(`/vis/${id}`)
    }
    return (
        <div style={{width:'100%'}}>
            <Upload
                action={action}
                dragIcon={<IconBolt />}
                draggable={true}
                accept=".csv"
                dragMainText={'点击上传文件或拖拽文件到这里'}
                dragSubText="仅支持.csv文件"
                style={{ marginTop: 10 }}
                limit={limit}
                onSuccess={(...v) => console.log(...v)}
            ></Upload>
        </div>

    );
}
