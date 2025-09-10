import { Comment } from '../../model/types/comment';
import React, { memo } from 'react'
import styles from './CommentCard.module.scss'
import { classNames } from 'shered/lib/classNames/classNames';
import { Avatar } from 'shered/ui/Avatar/Avatar';
import { Skeleton } from 'shered/ui/Skeleton/Skeleton';
import { AppLink } from 'shered/ui/AppLink/AppLink';
import { RoutePaths } from 'shered/config/routeConfig/routeConfig';

interface CommentProps {
   comment?: Comment;
   isLoading?: boolean;

}

export const CommentCard = memo(({ comment, isLoading }: CommentProps) => {

   if (isLoading) {
      return (
         <div className={classNames(styles.CommentCard, {}, [])}>
            <div className={styles.CommentUser}>
               <Skeleton width={40} height={40} borderRadius='50%' />
               <Skeleton width={100} height={20} />
            </div>
            <Skeleton width={"100%"} height={50} />
         </div>
      )
   }

   if (!comment) {
      return null
   }

   return (
      <div className={classNames(styles.CommentCard, {}, [])}>
         <AppLink to={RoutePaths.profile + comment.user.id} className={styles.CommentUser}>
            {comment.user?.avatar &&
               <Avatar size={40} src={comment.user.avatar} />
            }
            <span>
               {comment.user.username}
            </span>
         </AppLink>
         <p className={styles.CommentBody}>
            {comment.comment}
         </p>
      </div>
   )
})
