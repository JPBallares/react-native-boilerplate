// stories/MySchoolItem.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import SchoolItem from '@/src/screens/Schools/components/SchoolItem';
import {schoolData} from './data';

// TODO: add action for onPress
export default {
  title: 'screens/Schools',
  component: SchoolItem,
  argTypes: {onPress: {action: 'onPress'}},
} as ComponentMeta<typeof SchoolItem>;

const Template: ComponentStory<typeof SchoolItem> = args => (
  <SchoolItem {...args} />
);

export const Item: ComponentStory<typeof SchoolItem> = Template.bind({});

Item.args = {
  school: schoolData,
};
