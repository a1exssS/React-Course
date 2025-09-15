import { createSelector } from "@reduxjs/toolkit";
import { getAuthData } from "entities/User";
import { RoutePaths } from "shered/config/routeConfig/routeConfig";
import HomeIcon from 'shered/assets/icons/home.svg'
import AboutIcon from 'shered/assets/icons/file.svg'
import ProfileIcon from 'shered/assets/icons/profile.svg'
import ArticleIcon from 'shered/assets/icons/article.svg'
import { SidebarItemType } from "../types/sidebarLinks";

export const getSidebarLinks = createSelector(
   getAuthData,
   (userId) => {
      const sidebarItemList: SidebarItemType[] = [
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

      ];
      if (userId) {
         sidebarItemList.push(
            {
               path: RoutePaths.profile + userId.id,
               Icon: ProfileIcon,
               text: 'Профиль',
               authOnly: true,
            },
            {
               path: RoutePaths.articles,
               Icon: ArticleIcon,
               text: 'Статьи',
               authOnly: true,
            }
         )
      }
      return sidebarItemList
   }
)