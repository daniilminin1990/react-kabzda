import React, { useState } from "react";
import { action } from '@storybook/addon-actions'
import UncontrolledAccordeon from './UncontrolledAccordeon';

export default {
  title: 'UncontrolledAccordeon',
  component: UncontrolledAccordeon
}

const callback = action('accordeon mode change event fired')

export const MenuClickable = () => {
  const [value, setValue] = useState<boolean>(true)
  return <UncontrolledAccordeon titleValue={"Users"} />
}