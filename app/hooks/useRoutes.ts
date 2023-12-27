import {useMemo} from 'react';
import { usePathname } from 'next/navigation';
import { HiChat } from 'react-icons/hi';
import { HiUsers } from 'react-icons/hi2';
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import { RiLogoutCircleRLine } from "react-icons/ri";

const useRoutes = () => {
    const pathname = usePathname();
    const {conversationId} = useConversation();
    const routes = useMemo(() => [
        { 
          label: 'Chat', 
          href: '/conversations', 
          icon: HiChat,
          active: pathname === '/conversations' || !!conversationId
        },
        { 
          label: 'Users', 
          href: '/users', 
          icon: HiUsers, 
          active: pathname === '/users'
        },
        {
          label: 'Logout', 
          onClick: () => signOut(),
          href: '#',
          icon: RiLogoutCircleRLine, 
        }
      ], [pathname, conversationId]);
    
      return routes;
    };
    
    export default useRoutes;