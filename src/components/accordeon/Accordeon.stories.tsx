// import type { Meta, StoryObj } from '@storybook/react';

// import {Accordeon} from './Accordeon';
// import { useState } from 'react';
// import { action } from '@storybook/addon-actions';

// const meta: Meta<typeof Accordeon> = {
//   component: Accordeon,
// };

// export default meta;

// type Story = StoryObj<typeof Accordeon>;

// export const FirstStory: Story = {
//   args: {
//     titleValue: 'Hello',
//     onClick: () => { },
//     collapsed: true,
//   }
// }

// const onClickHandler = action('onClick')

// export const CollapsedAccordeon = () => {
//   return (
//     <Accordeon titleValue={"Collapsed Accordeon"}
//       collapsed={true}
//       onClick={onClickHandler} />
//   )
// }
// export const OpenedAccordeon = () => {
//   return (
//     <Accordeon titleValue={"Opened Accordeon"}
//       collapsed={false}
//       onClick={() => { }} />
//   )
// }

// export const AccordeonDemo = () => {
//   const [collapsed, setCollapsed] = useState(false)
//   return (
//     <Accordeon titleValue={"Accordeon demo"}
//       collapsed={collapsed}
//       onClick={() => { setCollapsed(!collapsed) }} />
//   )
// }

import React, { useState } from "react";
import { action } from '@storybook/addon-actions'
import { Accordeon } from './Accordeon';

const itemsList = [
  { title: 'Alex', value: 1 },
  { title: 'Dmitry', value: 2 },
  { title: 'Valeriya', value: 3 }
]

export default {
  title: 'Accordeon',
  component: Accordeon
}

const callback = action('accordeon mode change event fired')
const onClickCallBack = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordeon titleValue={"Menu"} collapsed={true} onTitleClick={callback} items={[]} onClick={onClickCallBack} />
export const MenuUncollapsedMode = () => <Accordeon titleValue={"Users"} collapsed={false} onTitleClick={callback} items={itemsList} onClick={onClickCallBack} />

export const MenuClickable = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordeon titleValue={"Users"} collapsed={value} onTitleClick={() => setValue(!value)} items={itemsList} onClick={(value) => { alert(`user with id ${value} should be happy`) }} />
}