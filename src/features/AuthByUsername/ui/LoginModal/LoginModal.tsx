import { Modal } from 'shered/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import styles from './LoginModa.module.scss'
import { classNames } from 'shered/lib/classNames/classNames';

interface LoginModalProps {
   isOpen: boolean;
   onClose: () => void;
   className?: string;
}

export const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => {
   return (
      <Modal lazy={true} onClose={onClose} isOpen={isOpen} className={classNames(styles.FormModal, {}, [className])}>
         <LoginForm />
      </Modal>
   )
}
