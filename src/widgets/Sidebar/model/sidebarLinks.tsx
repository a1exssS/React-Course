import { RoutePaths } from "shered/config/routeConfig/routeConfig";
import HomeIcon from 'shered/assets/icons/home.svg'
import AboutIcon from 'shered/assets/icons/file.svg'
import ProfileIcon from 'shered/assets/icons/profile.svg'

export interface SidebarItemType {
   path: string;
   text: string;
   Icon: React.VFC<React.SVGProps<SVGSVGElement>>
   authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
   {
      path: RoutePaths.main,
      Icon: HomeIcon,
      text: 'Главная'
   },
   {
      path: RoutePaths.about,
      Icon: AboutIcon,
      text: 'О сайте'
   },
   {
      path: RoutePaths.profile,
      Icon: ProfileIcon,
      text: 'Профиль',
      authOnly: true,
   }
]