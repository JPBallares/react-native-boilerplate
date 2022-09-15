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

export const ListWithData: ComponentStory<typeof SchoolList> = Template.bind(
  {},
);

ListWithData.args = {
  data: [schoolData],
};

export const ListWithError: ComponentStory<typeof SchoolList> = Template.bind(
  {},
);

ListWithError.args = {
  data: [],
  error: true,
};

export const FetchingList: ComponentStory<typeof SchoolList> = Template.bind(
  {},
);

FetchingList.args = {
  data: [],
  fetching: true,
};
