import { ArticleDitailsCommentsSchema } from "./ArticleDitailsCommentsSchema";
import { ArticleDitailsRecomendationSchema } from "./ArticleDitailsRecomendationSchema";

export interface ArticlesDetailsPageShema {
   comments: ArticleDitailsCommentsSchema;
   recomendations: ArticleDitailsRecomendationSchema
}