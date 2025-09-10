import React from 'react'
import { classNames } from 'shered/lib/classNames/classNames';
import styles from './CommentList.module.scss'
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
   comments?: Comment[];
   isLoading?: boolean;
   className?: string;
}

export const CommentList = ({ comments, isLoading, className }: CommentListProps) => {

   if (isLoading) {
      return (
         <div className={classNames(styles.CommentList, {}, [className])}>
            <CommentCard isLoading={true} />
            <CommentCard isLoading={true} />
            <CommentCard isLoading={true} />
         </div>
      )
   }

   return (
      <div className={classNames(styles.CommentList, {}, [className])}>
         {
            comments?.length ?
               comments.map((comment) => {
                  return <CommentCard comment={comment} isLoading={isLoading} key={comment.id} />
               }) :
               <span>Коментариев нет D:</span>
         }
      </div>
   )
}
