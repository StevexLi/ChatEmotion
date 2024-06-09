'use client';

import { RecoilRoot } from 'recoil';
import React from 'react';

export default function ChatDataProvider({ children }) {
    return <RecoilRoot>{children}</RecoilRoot>;
}
