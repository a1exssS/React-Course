import { Counter } from "entities/Counter";
import { memo } from "react";
import { Page } from "shered/ui/Page/Page";

const MainPage = memo(() => {
   return (
      <Page>
         MainPage
         <Counter />
      </Page>
   );
})

export default MainPage;
