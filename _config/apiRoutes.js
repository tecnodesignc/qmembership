const moduleName = 'membership';
const moduleVersion = 'v1';
const baseApiUrl = `${env('BASE_URL', 'http://localhost:8000')}/api`;
const urlBase = `${baseApiUrl}/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  professions: `${urlBase}/professions`,
  districts: `${urlBase}/distric`,
  congregations: `${urlBase}/congregation`,
  committee: `${urlBase}/committee`,
  workstations: `${urlBase}/workstation`,
  profiles: `${urlBase}/profiles`,
  address: `${urlBase}/address`,
  studies: `${urlBase}/studies`,
  civilStatus: `${urlBase}/civil-status`,
  documentType: `${urlBase}/document-type`,
}
