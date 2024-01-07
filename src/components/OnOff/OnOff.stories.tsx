import React, { useState } from "react";
import { action } from '@storybook/addon-actions'
import { OnOff } from "./OnOff";

export default {
  title: 'OnOff stories',
  component: OnOff
}

const callback = action('on off clicked')

export const OnMode = () => <OnOff on={true} onChange={callback} />
export const OffMode = () => <OnOff on={false} onChange={callback} />
export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(false)
  return <OnOff on={value} onChange={setValue} />
}