import type { Meta, StoryObj } from '@storybook/react';

import Accordeon from './Accordeon';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Accordeon> = {
  component: Accordeon,
};

export default meta;

type Story = StoryObj<typeof Accordeon>;

export const FirstStory: Story = {
  args: {
    titleValue: 'Hello',
    onClick: () => { },
    collapsed: true,
  }
}

const onClickHandler = action('onClick')

export const CollapsedAccordeon = () => {
  return (
    <Accordeon titleValue={"Collapsed Accordeon"}
      collapsed={true}
      onClick={onClickHandler} />
  )
}
export const OpenedAccordeon = () => {
  return (
    <Accordeon titleValue={"Opened Accordeon"}
      collapsed={false}
      onClick={() => { }} />
  )
}

export const AccordeonDemo = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Accordeon titleValue={"Accordeon demo"}
      collapsed={collapsed}
      onClick={() => { setCollapsed(!collapsed) }} />
  )
}