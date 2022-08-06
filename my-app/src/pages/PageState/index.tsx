import React, { useState } from 'react'
import { FramePage } from '../FramePage'

export const PageState = () => {
  // I want to hold the state of each page here, I can keep track of what page is being rendered here by using react hooks and everytime the user clicks on the lower nav bar the state will display a different page.
  // I also want to keep track of progress here to make sure the user knows what pages to follow
  // I can do so by using new Set() on the types of my items, this way I know when companions or archwings are also available so I can make new pages depending on that
  // Need to see how I can integrate Forma as a page perhaps?
  //

  // I need to keep track of what items were chosen for the relic api data to work, I can probably make a filter of relics based on what rewards the user chose

  const [framePageOpen, setFramePageOpen] = useState<boolean>(true)

  return (
    <>
      {framePageOpen && 
        <FramePage />
      }
    </>
  )
}