import styles from './ProfileCard.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'
import { Input } from 'shered/ui/Input/Input'
import { Profile } from '../modal/types/profileSchema'
import { Spiner } from 'shered/ui/Spiner/Spiner'
import { Avatar } from 'shered/ui/Avatar/Avatar'
import { CurrencyList, CurrencySelect } from 'entities/Currency'
import { CountryList, CountrySelect } from 'entities/Country'

interface ProfileOnChangeProps {
   onChangeFirstName?: (value: string) => void;
   onChangeLastName?: (value: string) => void;
   onChangeAge?: (value: string) => void;
   onChangeCountry?: (country: CountryList) => void;
   onChangeCity?: (value: string) => void;
   onChangeCurrency?: (currency: CurrencyList) => void;
   onChangeUsername?: (value: string) => void;
   onChangeAvatar?: (value: string) => void;
}

interface ProfileCardProps {
   className?: string;
   data?: Profile;
   isLoading?: boolean;
   readonly?: boolean;
   error?: string;
   onChangeEvents?: ProfileOnChangeProps
}

const ProfileCard = (props: ProfileCardProps) => {

   const { className, data, error, isLoading, onChangeEvents, readonly } = props

   if (isLoading) {
      return (
         <div className={classNames(styles.ProfileCard)}>
            <Spiner className={styles.ProfileLoader} />
         </div>
      )
   }

   if (error) {
      return (
         <div className={classNames(styles.ProfileCard)}>
            <h2 className={styles.ProfileError}>
               Произошла ошибка при загрузки профиля D:
            </h2>
         </div>
      )
   }

   return (
      <div className={classNames(styles.ProfileCard, { [styles.edditing]: !readonly }, [className])}>

         <div className={styles.CardItem}>
            {data?.avatar &&
               <div className={styles.AvatarWrapper}>
                  <Avatar src={data?.avatar} alt="Профиль" />
               </div>
            }
            <Input
               value={data?.firstname}
               readonly={readonly}
               placeholder='Имя'
               className={styles.CardItemText}
               onChange={onChangeEvents?.onChangeFirstName}
            />
            <Input
               value={data?.lastname}
               readonly={readonly}
               placeholder='Фамилия'
               className={styles.CardItemText}
               onChange={onChangeEvents?.onChangeLastName}
            />
            <Input
               value={data?.username}
               readonly={readonly}
               placeholder='Никнейм'
               className={styles.CardItemText}
               onChange={onChangeEvents?.onChangeUsername}
            />
            <Input
               value={data?.age}
               readonly={readonly}
               placeholder='Возраст'
               className={styles.CardItemText}
               onChange={onChangeEvents?.onChangeAge}
            />
            <Input
               value={data?.city}
               readonly={readonly}
               placeholder='Город'
               className={styles.CardItemText}
               onChange={onChangeEvents?.onChangeCity}
            />
            <Input
               value={data?.avatar}
               readonly={readonly}
               placeholder='Ссылка на аватар'
               className={styles.CardItemText}
               onChange={onChangeEvents?.onChangeAvatar}
            />
            <CurrencySelect
               value={data?.currency}
               onChange={onChangeEvents?.onChangeCurrency}
               readonly={readonly}
               className={styles.CardItemText}
            />
            <CountrySelect
               value={data?.country}
               onChange={onChangeEvents?.onChangeCountry}
               readonly={readonly}
               className={styles.CardItemText}
            />
         </div>
      </div>
   )
}

export default ProfileCard