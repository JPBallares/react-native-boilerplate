import Config from 'react-native-config';

export const BASE_URL = Config.API_BASE_URL || 'https://api-prod.8to18.com/v1/'
export const API_TOKEN = Config.API_TOKEN || 'eEpxrP4gXA3Jkb2gxLsw';
export const SCHOOLS_API_URL = `${BASE_URL}schools/`;
export const TEAMS_API_URL = `${BASE_URL}teams/`;
export const IMAGES_API_URL = `${BASE_URL}images/`;
export const EVENTS_API_URL = `${BASE_URL}events/`;

/* url with parameters */
export const SCHOOL_DETAILS_API_URL = (schoolId: number) =>
  `${Config.API_BASE_URL}schools/${schoolId}/`;
