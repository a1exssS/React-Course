import { Counter } from "entities/Counter";
import { memo } from "react";

const MainPage = memo(() => {
   return (
      <div>
         MainPage
         <Counter />
      </div>
   );
})

export default MainPage;
