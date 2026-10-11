import React, { useState } from 'react';
// import { ChatSession } from '../types/chat';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
import {
    Plus,
    Search,
    MessageSquare,
    Trash2,
    Edit2,
    Check,
    X,
    Settings,
    } from 'lucide-react';

// interface chatsidebarprobs {
//     chats: chatsession [];
//     activechatid?: string;
//     onselectchat: (id: string) => void;
//     onnewchat: () => void;
//     ondeletechat: (id: string) => void;
//     onrenamechat: (id: string, newtitle: string) => void;
//     onopensettings: () => void;
//     ongohome: () => void;
// }

// export const chatsidebar: React.fc<chatsidebarprobs> = ({
//     chats,
//     activechatid,
//     onselectchat,
//     onNewchat,
//     ondeletechat,
//     onrenamechat,
//     onopensettings,
//     ongohome,
// }) => {
//     const [search, setsearch] = usestate('');
//     const [editingid, seteditingid] = useState,string
// )


export default function () {
    return (
        <aside className='flex h-full w-full  bg-card border-r border-border select-none'>
          {/* top brand & newchat */}
        <div className="p-3 border-b border-border space-y-2">
          <div className="flex item-center justify-between">
            <button

              className="flex items-center gap-2.5 text-left group transition-opacity hover:opacity-80"
              ></button>
              </div>
              </div>
              </aside>
    )

}