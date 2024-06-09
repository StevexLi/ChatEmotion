import { atom } from 'recoil';

export const chatData = atom({
    key: 'chatData', // 唯一的ID
    default: null, // 默认值
});
