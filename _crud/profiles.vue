<template></template>
<script>
   //Component
   import crud from '@imagina/qcrud/_components/crud'

   export default {
      data() {
         return {
            crudId: this.$uid()
         }
      },
      computed: {
         crudData() {
            return {
               crudId: this.crudId,
               apiRoute: 'apiRoutes.qmembership.profiles',
               permission: 'membership.profiles',
               create: {
                  title: this.$tr('qmembership.layout.profile.new'),
               },
               read: {
                  columns: [
                     {
                        name: 'id',
                        label: this.$tr('ui.form.id'),
                        field: 'id',
                        align: 'left'
                     },
                     {
                        name: 'name',
                        label: this.$tr('qmembership.layout.form.name'),
                        field: 'fullName',
                        align: 'left'
                     },
                     {
                        name: 'identification',
                        label: this.$tr('qmembership.layout.profile.identification'),
                        field: 'identification',
                        align: 'left'
                     },
                     {
                        name: 'email',
                        label: this.$tr('qmembership.layout.profile.email'),
                        field: 'email',
                        align: 'left'
                     },
                     {
                        name: 'created_at',
                        label: this.$tr('ui.form.createdAt'),
                        field: 'createdAt',
                        align: 'left',
                        format: val => val ? this.$trd(val) : '-',
                     },
                     {
                        name: 'updated_at',
                        label: this.$tr('ui.form.updatedAt'),
                        field: 'updatedAt',
                        align: 'left',
                        format: val => val ? this.$trd(val) : '-',
                     },
                     {name: 'actions', label: this.$tr('ui.form.actions'), align: 'right'},
                  ],
                  requestParams: {},
                  filters: {
                     congregationId: {
                        value: 0,
                        type: 'select',
                        loadOptions: {
                           apiRoute: 'apiRoutes.qmembership.congregations',
                           select: {label: 'name', id: 'id'}
                        },
                        props: {
                           label: `${this.$tr('qmembership.layout.congregation.title')}:`,
                           options: [
                              {label: this.$tr('ui.label.all'), value: 0}
                           ],
                        }
                     },
                     type: {
                        value: 0,
                        type: 'select',
                        loadOptions: {
                           apiRoute: 'apiRoutes.qmembership.type',
                           select: {label: 'name', id: 'id'}
                        },
                        props: {
                           label: `${this.$tr('qmembership.layout.profile.type')}:`,
                           options: [
                              {label: this.$tr('ui.label.all'), value: 0}
                           ],
                        }
                     }
                  },
               },
               update: {
                  to: 'qmembership.admin.profile.edit',
                  requestParams: {}
               },
               delete: true,
               formLeft: {
                  id: {value: ''},
                  firstName: {
                     value: null,
                     type: 'input',
                     isTranslatable: true,
                     props: {
                        label: `${this.$trp('ui.form.firstName')} *`,
                        name: 'user["first_name"]',
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ]
                     }
                  },
                  lastName: {
                     value: null,
                     type: 'input',
                     isTranslatable: true,
                     props: {
                        label: `${this.$trp('ui.form.lastName')} *`,
                        name: 'user["last_name"]',
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ]
                     }
                  },
                  docType: {
                     value: null,
                     type: 'select',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.documentType')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                     },
                     loadOptions: { //Async load options form request, only in types [select, multiSelect]
                        apiRoute: 'apiRoutes.qmembership.documentType', //apiRoute to request
                        select: {label: 'name', id: 'id'},
                     }
                  },
                  identification: {
                     value: '',
                     type: 'input',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.identification')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired'),
                           val => val.length >= 6 || this.$tr('ui.message.fieldMinLeng', {num: 6})
                        ],
                     }
                  },
                  address: {
                     value: [],
                     type: 'crud',
                     props: {
                        crudType: 'select',
                        crudData: import('@imagina/qmembership/_crud/address'),
                        crudProps: {
                           label: this.$trp('qmembership.layout.address.title'),
                           multiple: true,
                           useChips: true
                        },
                     },
                  },
                  email: {
                     value: null,
                     type: 'input',
                     props: {
                        label: `${this.$trp('ui.form.email')} *`,
                        name: 'user["eamil"]',
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired'),
                           val => this.$helper.validateEmail(val) || this.$tr('ui.message.fieldEmail')
                        ],
                     }
                  },
                  spouseId: {
                     value: null,
                     type: 'select',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.spouse')}*`,
                        config: {
                           select: {label: 'fullName', value: 'id'},
                           apiRoute: 'apiRoutes.quser.users',
                        },
                     },
                  },
                  children: {
                     value: null,
                     type: 'multiSelect',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.children')}*`,
                        config: {
                           select: {label: 'fullName', value: 'id'},
                           apiRoute: 'apiRoutes.qmembership.profiles',
                        },
                     },
                  },
                  notes: {
                     value: '',
                     type: 'input',
                     isTranslatable: true,
                     props: {
                        label: this.$tr('qmembership.layout.profile.notes'),
                        type: 'textarea',
                        rows: 3,
                     }
                  },
               },
               formRight: {
                  mediasSingle: {
                     value: {},
                     type: 'media',
                     props: {
                        label: this.$tr('ui.form.image'),
                        zone: 'mainimage',
                        entity: "Modules\\Membership\\Entities\\Profile",
                        enitityId: null
                     }
                  },
                  birthCountryId: {
                     value: null,
                     type: 'select',
                     noCrud: true,
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.birthCountry')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                     },
                     loadOptions: { //Async load options form request, only in types [select, multiSelect]
                        apiRoute: 'apiRoutes.qmembership.country', //apiRoute to request
                        select: {label: 'name', id: 'id'},
                     }
                  },
                  birthProvinceId: {
                     value: null,
                     type: 'select',
                     noCrud: true,
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.birthProvince')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                        vIf: (this.crudInfo.birthCountryId)
                     },
                     loadOptions: { //Async load options form request, only in types [select, multiSelect]
                        apiRoute: 'apiRoutes.qmembership.province', //apiRoute to request
                        requestParams: {filter: {country: this.crudInfo.birthCountryId}},
                        select: {label: 'name', id: 'id'},
                     }
                  },
                  birthplace: {
                     value: null,
                     type: 'select',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.birthCity')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                        vIf: (this.crudInfo.birthProvinceId)
                     },
                     loadOptions: { //Async load options form request, only in types [select, multiSelect]
                        apiRoute: 'apiRoutes.qmembership.city', //apiRoute to request
                        requestParams: {filter: {province: this.crudInfo.birthProvinceId}},
                        select: {label: 'name', id: 'id'},
                     }
                  },
                  birthday: {
                     value: null,
                     type: 'date',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.birthday')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                     }
                  },
                  studyId: {
                     value: null,
                     type: 'crud',
                     props: {
                        crudType: 'select',
                        crudData: import('@imagina/qmembership/_crud/studies'),
                        crudProps: {
                           label: `${this.$tr('qmembership.layout.study.title')}*`,
                           rules: [
                              val => !!val || this.$tr('ui.message.fieldRequired')
                           ],
                        },
                     },
                  },
                  professionId: {
                     value: null,
                     type: 'crud',
                     props: {
                        crudType: 'select',
                        crudData: import('@imagina/qmembership/_crud/professions'),
                        crudProps: {
                           label: `${this.$tr('qmembership.layout.profession.title')}*`,
                           rules: [
                              val => !!val || this.$tr('ui.message.fieldRequired')
                           ],
                        },
                     },
                  },
                  civilStatus: {
                     value: null,
                     type: 'select',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.civilStatus')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                     },
                     loadOptions: { //Async load options form request, only in types [select, multiSelect]
                        apiRoute: 'apiRoutes.qmembership.civilStatus', //apiRoute to request
                        select: {label: 'name', id: 'id'},
                     }
                  },
                  ecclesiasticalCourt: {
                     value: null,
                     type: 'select',
                     isFakeField: true,
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.ecclesiasticalCourt')}*`,
                        vIf: this.crudInfo.civilStatus == 2,
                        options: [
                           {label: this.$tr('ui.label.yes'), value: '1'},
                           {label: this.$tr('ui.label.no'), value: '0'},
                        ],
                     }
                  },
                  ecclesiasticalAnswer: {
                     value: null,
                     type: 'select',
                     isFakeField: true,
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.ecclesiasticalAnswer.label')}*`,
                        vIf: this.crudInfo.ecclesiasticalCourt == 1,
                        options: [
                           {
                              label: this.$tr('qmembership.layout.profile.ecclesiasticalAnswer.favorable'),
                              value: 'favorable'
                           },
                           {
                              label: this.$tr('qmembership.layout.profile.ecclesiasticalAnswer.unfavorable'),
                              value: 'desfavorable'
                           },
                        ],
                     }
                  },
                  mediasSingle2: {
                     value: {},
                     type: 'media',
                     props: {
                        label: this.$tr('ui.form.image'),
                        vIf: this.crudInfo.ecclesiasticalCourt == 1,
                        zone: 'ecclesiasticalanswer',
                        entity: "Modules\\Membership\\Entities\\Profile",
                        enitityId: null
                     }
                  },
                  baptismCountryId: {
                     value: null,
                     type: 'select',
                     noCrud: true,
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.baptismCountry')}*`,
                     },
                     loadOptions: { //Async load options form request, only in types [select, multiSelect]
                        apiRoute: 'apiRoutes.qmembership.country', //apiRoute to request
                        select: {label: 'name', id: 'id'},
                     }
                  },
                  baptismProvinceId: {
                     value: null,
                     type: 'select',
                     noCrud: true,
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.baptismProvince')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                        vIf: (this.crudInfo.baptismCountryId)
                     },
                     loadOptions: { //Async load options form request, only in types [select, multiSelect]
                        apiRoute: 'apiRoutes.qmembership.province', //apiRoute to request
                        requestParams: {filter: {country: this.crudInfo.baptismCountryId}},
                        select: {label: 'name', id: 'id'},
                     }
                  },
                  baptismCity: {
                     value: null,
                     type: 'select',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.baptismCity')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                        vIf: (this.crudInfo.bbaptismProvinceId)
                     },
                     loadOptions: { //Async load options form request, only in types [select, multiSelect]
                        apiRoute: 'apiRoutes.qmembership.city', //apiRoute to request
                        requestParams: {filter: {province: this.crudInfo.baptismProvinceId}},
                        select: {label: 'name', id: 'id'},
                     }
                  },
                  baptismDate: {
                     value: null,
                     type: 'date',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.baptismDate')}*`,
                     }
                  },
                  ministerId: {
                     value: null,
                     type: 'crud',
                     props: {
                        type: 'select',
                        crudData: import('@imagina/quser/_crud/users'),
                        crudProps: {
                           label: `${this.$tr('qmembership.layout.profile.minister')}`,
                        },
                        config: {
                           options: {label: 'fullName', value: 'id'},
                           requestParams: {filter: {roleSlug: 'minister'}}
                        },
                     },
                  },
                  holySpiritDate: {
                     value: null,
                     type: 'date',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.holySpiritDate')}*`,
                     }
                  },
               },
            }
         },
         crudInfo() {
            return this.$store.state.qcrudComponent.component[this.crudId] || {}
         }
      },
   }
</script>
