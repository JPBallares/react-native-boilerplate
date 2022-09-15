// stories/MySchoolList.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import SchoolList from '@/src/screens/Schools/components/SchoolList';
import {schoolData} from './data';

// TODO: add action for onPress
export default {
  title: 'screens/Schools',
  component: SchoolList,
  argTypes: {onPress: {action: 'onPress'}},
} as ComponentMeta<typeof SchoolList>;

const Template: ComponentStory<typeof SchoolList> = args => (
  <SchoolList {...args} />
);

export const List: ComponentStory<typeof SchoolList> = Template.bind({});

List.args = {
  data: [schoolData],
};
