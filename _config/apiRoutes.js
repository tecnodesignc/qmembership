const moduleName = 'membership';
const moduleVersion = 'v1';
const baseApiUrl = `${env('BASE_URL', 'http://localhost:8000')}/api`;
const urlBase = `${baseApiUrl}/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  categories: `${urlBase}/categories`,
  profiles: `${urlBase}/profiles`,
  schedules: `${urlBase}/schedules`,
}
