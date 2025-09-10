import React, { useCallback } from 'react'
import styles from './AddCommentForm.module.scss'
import { classNames } from 'shered/lib/classNames/classNames';
import { Input } from 'shered/ui/Input/Input';
import { DynamicModuleLoader, ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { Button, ThemeButton } from 'shered/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getError, getText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch';

interface AddCommentFormProps {
   className?: string;
   onSendComment: (text: string) => void;
}

const initialReducer: ReducersList = {
   addCommentForm: addCommentFormReducer
}

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {

   const error = useSelector(getError)
   const text = useSelector(getText)
   const dispatch = useAppDispatch()

   const onCommentText = useCallback((value: string) => {
      dispatch(addCommentFormActions.setText(value))
   }, [dispatch])

   const submitHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(addCommentFormActions.setText(''))
      onSendComment(text || '')
   }, [onSendComment, dispatch, text])

   return (
      <DynamicModuleLoader reducers={initialReducer}>
         <form className={classNames(styles.CommentForm, {}, [className])} onSubmit={submitHandler}>
            <Input
               value={text}
               onChange={onCommentText}
               placeholder='Оставить коментарий'
               className={styles.CommentInput}
            />
            <Button type='submit' theme={ThemeButton.OUTLINE}>Отправить</Button>
         </form>
      </DynamicModuleLoader>
   )
}
export default AddCommentForm