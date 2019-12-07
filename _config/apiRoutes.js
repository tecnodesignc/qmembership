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
  dsitrict: `${urlBase}/district`,
  study: `${urlBase}/study`,
  profession: `${urlBase}/profession`,
  civilStatus: `${urlBase}/profile/civil-status`,
  type: `${urlBase}/profile/type`,
  documentType: `${urlBase}/profile/document-type`,
  committee: `${urlBase}/committee`,
  profile: `${urlBase}/profile`,
  workstation: `${urlBase}/workstation`
}
