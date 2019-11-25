<template>
  <div id="adminPlacesFrom">
    <!--Content-->
    <div class="relative-position q-mb-lg backend-page">
      <!--Form-->
      <div class="text-center">
        <h5>Registro de miembros</h5>
      </div>
      <div class="box">
        <div class="row gutter-x-sm">

          <div class="col-12 col-md-12 text-center">
            <div class="input-title">{{$tr('ui.form.image')}}</div>
            <upload-media
              v-model="form.mediasSingle"
              entity="Modules\Membership\Entities\Profile"
              :entity-id="itemId ? itemId : null"
              zone='mainimage'
            />
          </div>

          <div class="col-12 col-md-6">
            <q-select
            v-model="form.districtId"
            float-label="Distrito"
            @input="val => { getCongregations() }"
            filter
            :options="districtsOptions"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-select
            v-model="form.congregationId"
            float-label="Congregación"
            filter
            :disable="congregationsOptions.length>0 ? false : true"
            :options="congregationsOptions"
            />
          </div>

          <!-- first row -->
          <div class="col-12 col-md-4" >
            <!--Name-->
            <q-field>
              <q-input :stack-label="`${$tr('ui.form.name')}*`"
                       type="text" v-model="form.user.firstName"/>
            </q-field>
          </div>
          <div class="col-12 col-md-4" >
            <!--lastName-->
            <q-field>
              <q-input :stack-label="`${$tr('ui.form.lastName')}*`"
                       type="text" v-model="form.user.lastName"/>
            </q-field>
          </div>
          <div class="col-12 col-md-4" >
            <!-- email -->
            <q-field>
              <q-input :stack-label="`${$tr('ui.form.email')}*`"
                       type="email" v-model="form.user.email"/>
            </q-field>
          </div>

          <!-- second row -->
          <div class="col-12 col-md-4" >
            <!-- Type identification -->
            <q-select
            v-model="form.docType"
            float-label="Tipo de identificación"
            radio
            :options="typeIdentificationOptions"
            />
          </div>
          <div class="col-12 col-md-4" >
            <!-- identification -->
            <q-field>
              <q-input stack-label="Documento de identidad"
                       type="text" v-model="form.identification"/>
            </q-field>
          </div>

          <div class="col-12 col-md-4" >
            <!-- civilStatus -->
            <q-select
            v-model="form.civilStatus"
            float-label="Estado civil"
            radio
            :options="civilStatusOptions"
            />
          </div>

          <div class="col-12 col-md-4 text-center" v-if="form.civilStatus==2">
            <label>¿Pasó por el Tribunal Eclesiástico de la IPUC?</label>
            <br>
            <q-radio v-model="form.options.ipuc" val="true" label="Sí" />
            <q-radio v-model="form.options.ipuc" val="false" label="No" />
          </div>

          <div class="col-12 col-md-4 text-center" v-if="form.options.ipuc">
            <label>¿Que concepto le dieron?</label>
            <br>
            <q-radio v-model="form.options.ipucFavorable" val="true" label="Favorable" />
            <q-radio v-model="form.options.ipucFavorable" val="false" label="Desfavorable" />
          </div>

          <!-- <div class="col-12 col-md-4 text-center" v-if="form.options.ipuc">
            <label>Adjuntar</label>
            <q-uploader url="https://ipuc.upload/api" />
          </div> -->
          <!-- end second row -->

          <!-- third row -->

          <!-- Birthday -->
          <div class="col-12 col-md-4" >
            <q-datetime stack-label="Fecha de nacimiento" header-label="Fecha de nacimiento" v-model="form.birthday" type="date" />
          </div>

          <!-- Birthplace -->
          <div class="col-12 col-md-8" >
            <q-field>
              <q-input stack-label="Lugar de nacimiento"
                       type="text" v-model="form.birthplace"/>
            </q-field>
          </div>

          <!-- end third row -->

          <!-- four row -->

          <!-- Studies -->
          <div class="col-12 col-md-4" >
            <q-select
            v-model="form.studyId"
            float-label="Nivel de escolaridad"
            radio
            :options="studiesOptions"
            />
          </div>

          <!-- Ocupación actual -->
          <div class="col-12 col-md-4" >
            <q-select
            v-model="form.professionId"
            float-label="Ocupación actual"
            filter
            :options="professionsOptions"
            />
          </div>
          <!-- Phone -->
          <div class="col-12 col-md-4" >
            <q-field>
              <q-input stack-label="Teléfono"
                       type="text" v-model="form.address[0].phone"/>
            </q-field>
          </div>

          <!-- end four row -->

          <!-- five row -->

          <!-- Dirección de residencia -->
          <div class="col-12 col-md-12" >
            <q-field>
              <q-input stack-label="Dirección de residencia"
                       type="text" v-model="form.address[0].address"/>
            </q-field>
          </div>

          <!-- end five row -->

          <!-- six row -->

          <!-- baptism date  -->

          <div class="col-12 col-md-4" >
            <q-datetime stack-label="Fecha de bautismo" header-label="Fecha de bautismo" v-model="form.baptismDate" type="date" />
          </div>

          <div class="col-12 col-md-4">
            <q-select
            v-model="form.ministerId"
            float-label="Pastor que lo bautizó"
            filter
            :options="usersOptions"
            />
          </div>

          <div class="col-12 col-md-4" >
            <q-datetime stack-label="Fecha recepción espíritu santo" header-label="Fecha recepción espíritu santo" v-model="form.holySpiritDate" type="date" />
          </div>

          <!-- end six row -->

          <div class="col-12 col-md-12">
             <q-input stack-label="Observaciones" v-model="form.observations" type="textarea" />
          </div>

        </div>
      </div>

      <!--Buttons Actions-->
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <!--Update button-->
        <q-btn
          v-if="itemId"
          color="positive" :loading="loading.page"
          icon="fas fa-edit" :label="$tr('ui.label.update')" @click="updateItem()"
        />
        <!--Save button-->
        <q-btn-dropdown :label="buttonActions.label" split v-else :loading="loading.app"
                        content-style="min-width: 250px !important"
                        color="positive" icon="fas fa-save" @click="createItem()" rounded align="right">
          <q-list link>
            <q-item @click.native="buttonActions = {label : optionsFields.btn.saveAndReturn, value : 1}"
                    v-close-overlay>
              {{optionsFields.btn.saveAndReturn}}
            </q-item>
            <q-item @click.native="buttonActions = {label : optionsFields.btn.saveAndCreate, value : 3}"
                    v-close-overlay>
              {{optionsFields.btn.saveAndCreate}}
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-page-sticky>

      <!--Loading-->
      <inner-loading :visible="loading.page"/>
    </div>
  </div>
</template>
<script>
  //Components
  import locales from '@imagina/qsite/_components/locales'
  import mediaForm from '@imagina/qmedia/_components/form'
  import recursiveList from 'src/components/master/recursiveListSelect'
  import schedulesForm from 'src/components/master/schedules'
  import uploadMedia from '@imagina/qmedia/_components/form'

  export default {
    props: {},
    components: {locales, mediaForm, recursiveList, schedulesForm,uploadMedia},
    mounted() {
      this.$nextTick(function () {
        this.init()
      })
    },
    data() {
      return {
        loading: {
          page: false
        },
        configName: 'apiRoutes.qmembership.profiles',
        itemId: false,
        civilStatusOptions:[],
        typeIdentificationOptions:[],
        professionsOptions:[],
        studiesOptions:[],
        usersOptions:[],
        congregationsOptions:[],
        districtsOptions:[],
        form:{
          user:{
            firstName:'',
            lastName:'',
            email:''
          },
          mediasSingle: {},
          civilStatus:0,
          identification:'',
          docType:0,
          birthday:'',
          birthplace:'',
          studyId:0,
          professionId:0,
          congregationId:0,
          districtId:0,
          address:[
            {
              address:'',
              phone:''
            }
          ],
          baptismDate:'',
          ministerId:0,
          holySpiritDate:'',
          observations:'',
          options:{
            ipuc:false,
            ipucFavorable:'',
            ipucFile:''
          }

        },
        buttonActions: {}
      }
    },
    computed: {
      //Options translatables
      optionsFields() {
        return {
          btn: {
            saveAndReturn: this.$tr('ui.message.saveAndReturn'),
            saveAndCreate: this.$tr('ui.message.saveAndCreate'),
          }
        }
      },
    },
    methods: {
      //Init
      async init() {
        //Search id in params URL
        if (this.$route.params.id) this.itemId = this.$route.params.id
        if (this.itemId) await this.getData()//Get data if is edit
        this.getCivilStatus()//Get categories
        this.getTypeIdentifications()//Get categories
        this.getStudies()//Get categories
        this.getProfessions()//Get categories
        this.getUsers()//Get categories
        // this.getCongregations()//Get categories
        this.getDistricts()//Get categories
        //Set default button action
        this.buttonActions = {label: this.optionsFields.btn.saveAndReturn, value: 1}
      },
      //Get data item
      getData() {
        return new Promise((resolve, reject) => {
          this.loading.page = true
          const itemId = this.$clone(this.itemId)
          if (itemId) {
            //Params
            let params = {
              refresh: true,
              params: {
                include: 'user,study',
                filter: {allTranslations: true}
              }
            }
            //Request
            this.$crud.show(this.configName, itemId, params).then(response => {

              //Replace categories to response
              this.form = this.$clone(response.data)
              //Set response to form
              // this.locale.form = this.$clone(response.data)
              this.loading.page = false
              resolve(true)//Resolve
            }).catch(error => {
              this.$alert.error({message: this.$tr('ui.message.errorRequest'), pos: 'bottom'})
              this.loading.page = false
              reject(false)//Resolve
            })
          } else {
            resolve(true)//Resolve
          }
        })
      },

      //Get civil status
      getCivilStatus() {
        this.loading.page = true
        let configName = 'apiRoutes.qmembership.civilStatus'
        let params = {//Params to request
          refresh: true,
          params: {include: ''},
        }
        //Request
        this.$crud.index(configName, params).then(response => {
          for(var i=0;i<response.data.length;i++){
            this.civilStatusOptions.push({id:i,value:i,label:response.data[i]});
          }
          // this.civilStatus = this.$helper.array.tree(response.data)
          this.loading.page = false
        }).catch(error => {
          this.$alert.error({message: this.$tr('ui.message.errorRequest'), pos: 'bottom'})
          this.loading.page = false
        })
      },
      //Get type identification
      getTypeIdentifications() {
        this.loading.page = true
        let configName = 'apiRoutes.qmembership.documentType'
        let params = {//Params to request
          refresh: true,
          params: {include: ''},
        }
        //Request
        this.$crud.index(configName, params).then(response => {
          for(var i=0;i<response.data.length;i++){
            this.typeIdentificationOptions.push({id:i,value:i,label:response.data[i]});
          }
          // this.civilStatus = this.$helper.array.tree(response.data)
          this.loading.page = false
        }).catch(error => {
          this.$alert.error({message: this.$tr('ui.message.errorRequest'), pos: 'bottom'})
          this.loading.page = false
        })
      },
      //Get studies
      getStudies() {
        this.loading.page = true
        let configName = 'apiRoutes.qmembership.studies'
        let params = {//Params to request
          refresh: true,
          params: {include: ''},
        }
        //Request
        this.$crud.index(configName, params).then(response => {
          for(var i=0;i<response.data.length;i++){
            this.studiesOptions.push({id:response.data[i].id,value:response.data[i].id,label:response.data[i].name});
          }
          // this.civilStatus = this.$helper.array.tree(response.data)
          this.loading.page = false
        }).catch(error => {
          this.$alert.error({message: this.$tr('ui.message.errorRequest'), pos: 'bottom'})
          this.loading.page = false
        })
      },
      //Get studies
      getProfessions() {
        this.loading.page = true
        let configName = 'apiRoutes.qmembership.professions'
        let params = {//Params to request
          refresh: true,
          params: {include: ''},
        }
        //Request
        this.$crud.index(configName, params).then(response => {
          for(var i=0;i<response.data.length;i++){
            this.professionsOptions.push({id:response.data[i].id,value:response.data[i].id,label:response.data[i].name});
          }
          // this.civilStatus = this.$helper.array.tree(response.data)
          this.loading.page = false
        }).catch(error => {
          this.$alert.error({message: this.$tr('ui.message.errorRequest'), pos: 'bottom'})
          this.loading.page = false
        })
      },
      //Get users
      getUsers() {
        this.loading.page = true
        let configName = 'apiRoutes.quser.users'
        let params = {//Params to request
          refresh: true,
          params: {include: ''},
        }
        //Request
        this.$crud.index(configName, params).then(response => {
          for(var i=0;i<response.data.length;i++){
            this.usersOptions.push({id:response.data[i].id,value:response.data[i].id,label:response.data[i].firstName+' '+response.data[i].lastName});
          }
          // this.civilStatus = this.$helper.array.tree(response.data)
          this.loading.page = false
        }).catch(error => {
          this.$alert.error({message: this.$tr('ui.message.errorRequest'), pos: 'bottom'})
          this.loading.page = false
        })
      },
      //Get congregations
      getCongregations() {
        this.loading.page = true
        let configName = 'apiRoutes.qmembership.congregations'
        let params = {//Params to request
          refresh: true,
          params: {
            filter:{
              district:this.form.districtId
            }
          },
        }
        //Request
        this.$crud.index(configName, params).then(response => {
          for(var i=0;i<response.data.length;i++){
            this.congregationsOptions.push({id:response.data[i].id,value:response.data[i].id,label:response.data[i].name});
          }
          // this.civilStatus = this.$helper.array.tree(response.data)
          this.loading.page = false
        }).catch(error => {
          this.$alert.error({message: this.$tr('ui.message.errorRequest'), pos: 'bottom'})
          this.loading.page = false
        })
      },
      //Get districts
      getDistricts() {
        this.loading.page = true
        let configName = 'apiRoutes.qmembership.districts'
        let params = {//Params to request
          refresh: true,
          params: {include: ''},
        }
        //Request
        this.$crud.index(configName, params).then(response => {
          for(var i=0;i<response.data.length;i++){
            this.districtsOptions.push({id:response.data[i].id,value:response.data[i].id,label:response.data[i].name});
          }
          // this.civilStatus = this.$helper.array.tree(response.data)
          this.loading.page = false
        }).catch(error => {
          this.$alert.error({message: this.$tr('ui.message.errorRequest'), pos: 'bottom'})
          this.loading.page = false
        })
      },
      //Create Product
      createItem() {
        // this.$refs.localeComponent.vTouch()//Validate component locales
        //Check validations
        // if (!this.$v.$error) {
          this.loading.page = true
          this.$crud.create(this.configName, this.form).then(response => {
            this.$alert.success({message: `${this.$tr('ui.message.recordCreated')}`})
            this.actionAfterCreated()
          }).catch(error => {
            this.$alert.error({message: this.$tr('ui.message.recordNoCreated'), pos: 'bottom'})
            this.loading.page = false
          })
        // } else {
        //   this.$alert.error({message: this.$tr('ui.message.formInvalid'), pos: 'bottom'})
        // }
      },
      //Action after created
      actionAfterCreated(id) {
        setTimeout(() => {
          let action = this.buttonActions.value
          switch (action) {
            case 1://redirect to index products
              this.$router.push({name: 'membership.places.index'})
              break;
            case 3://Reset and init form
              this.$refs.localeComponent.vReset()
              this.loading.page = false
              break;
          }
        }, 500)
      },
      //Update Product
      updateItem() {
        this.$refs.localeComponent.vTouch()//Validate component locales
        //Check validations
        if (!this.$v.$error) {
          this.loading.page = true
          this.$crud.update(this.configName, this.itemId, this.locale.form).then(response => {
            this.$alert.success({message: `${this.$tr('ui.message.recordUpdated')}`})
            this.$router.push({name: 'membership.places.index'})//Redirect to index
            this.loading.page = false
          }).catch(error => {
            this.loading.page = false
            this.$alert.error({message: this.$tr('ui.message.recordNoUpdated'), pos: 'bottom'})
          })
        } else {
          this.$alert.error({message: this.$tr('ui.message.formInvalid'), pos: 'bottom'})
        }
      },
    }
  }
</script>
<style lang="stylus">
  @import "~variables";
</style>
