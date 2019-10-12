import store from 'src/store'

class Gmaps {

  constructor() {

  }
  initializeGoogleApi(){
    let autocompleteGoogle = document.querySelector("script[rel=apiGmaps]")
    if(!autocompleteGoogle)
      autocompleteGoogle= document.createElement('script')
    let apiKey = store.getters['qsiteSettings/getSettingValueByName']('isite::api-maps')
    autocompleteGoogle.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key='+apiKey+'&extension=.js&output=embed')
    autocompleteGoogle.setAttribute('rel', 'apiGmaps')
    document.head.appendChild(autocompleteGoogle)
  }
}

export default ({ app, router, Vue }) => {

}

const gmaps = new Gmaps();

export {gmaps};
