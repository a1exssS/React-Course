import styles from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from '../modal/selectors/getProfileData/getProfileData'
import { getError } from '../modal/selectors/getError/getError'
import { getIsLoading } from '../modal/selectors/getIsLoading/getIsLoading'
import { getReadonly } from '../modal/selectors/getReadonly/getReadonly'
import { classNames } from 'shered/lib/classNames/classNames'
import { Button, ThemeButton } from 'shered/ui/Button/Button'
import { Input } from 'shered/ui/Input/Input'

const ProfileCard = () => {

   const data = useSelector(getProfileData)
   const error = useSelector(getError)
   const isLoading = useSelector(getIsLoading)
   const readonly = useSelector(getReadonly)

   return (
      <div className={classNames(styles.ProfileCard)}>
         <div className={styles.CardItem}>
            <h1>Профиль</h1>
            <Button theme={ThemeButton.OUTLINE}>
               Редактировать
            </Button>
         </div>
         <div className={styles.CardItem}>
            <Input value={data?.firstname} placeholder='Ваше имя' className={styles.CardItemText} />
            <Input value={data?.lastname} placeholder='Ваша фамилия' className={styles.CardItemText} />
            <Input value={data?.username} placeholder='Ваш никнейм' className={styles.CardItemText} />
         </div>
      </div>
   )
}

export default ProfileCard