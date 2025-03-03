import { LogIn, UserCircle } from 'lucide-react';
import { Button } from '../shared/ui/building-blocks/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/shared/ui/building-blocks/avatar';

const AuthButton = () => {
  return (
    <>
      <Button className='hidden sm:flex' variant='outline'>
        <LogIn className='mr-2 h-4 w-4' /> Login
      </Button>

      <Avatar className='h-8 w-8 sm:hidden'>
        <AvatarImage src={''} alt='User Avatar Icon' />
        <AvatarFallback>
          <UserCircle />
        </AvatarFallback>
      </Avatar>
    </>
  );
};

export default AuthButton;
