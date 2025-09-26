import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'

const ArticlesDetailsEdditPage = memo(() => {

   const { id } = useParams<{ id: string }>()

   return (
      <Page>ArticlesDetailsEdditPage</Page>
   )
})

export default ArticlesDetailsEdditPage