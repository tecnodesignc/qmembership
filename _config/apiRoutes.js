const moduleName = 'membership'
const moduleVersion = 'v1'
const urlBase = `/${moduleVersion}/${moduleName}`

export default {
  urlBase : urlBase,
  version: moduleVersion,
  country:`/v2/ilocations/countries`,
  province:`/v2/ilocations/provinces`,
  city:`/v2/ilocations/cities`,
  congregations: `${urlBase}/congregation`,
  districts: `${urlBase}/district`,
  studies: `${urlBase}/study`,
  professions: `${urlBase}/profession`,
  civilStatus: `${urlBase}/profile/civil-status`,
  type: `${urlBase}/profile/type`,
  documentType: `${urlBase}/profile/document-type`,
  committees: `${urlBase}/committee`,
  address: `${urlBase}/address`,
  profiles: `${urlBase}/profile`,
  workstations: `${urlBase}/workstation`
}
