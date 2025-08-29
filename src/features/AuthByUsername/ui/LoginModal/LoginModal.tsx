import { Modal } from 'shered/ui/Modal/Modal'
// import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async'
import LoginForm from '../LoginForm/LoginForm'
import { Suspense } from 'react';
import { Spiner } from 'shered/ui/Spiner/Spiner';

interface LoginModalProps {
   isOpen: boolean;
   onClose: () => void;
   className?: string;
}

export const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => {


   return (
      <Modal lazy={true} onClose={onClose} isOpen={isOpen} className={className}>
         <Suspense fallback={<Spiner />}>
            <LoginForm onSuccess={onClose} />
         </Suspense>
      </Modal>
   )
}
