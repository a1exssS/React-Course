import { Modal } from 'shered/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
   isOpen: boolean;
   onClose: () => void;
   className?: string;
}

export const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => {
   return (
      <Modal lazy={true} onClose={onClose} isOpen={isOpen} className={className}>
         <LoginForm />
      </Modal>
   )
}
