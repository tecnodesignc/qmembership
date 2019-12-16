<template></template>
<script>
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
               apiRoute: 'apiRoutes.qmembership.congregations',
               permission: 'membership.congregations',
               create: {
                  title: this.$tr('qmembership.layout.congregation.new'),
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
                        field: 'name',
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
                  filters: {},
               },
               update: {
                  requestParams: {include: 'district'}
               },
               delete: true,
               formLeft: {

                  name: {
                     value: null,
                     type: 'input',
                     isTranslatable: true,
                     props: {
                        label: `${this.$trp('qmembership.layout.form.name')} *`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ]
                     }
                  },
                  description: {
                     value: '',
                     type: 'html',
                     isTranslatable: true,
                     props: {
                        label: `${this.$tr('ui.form.description')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                     }
                  },
               },
               formRight: {
                  districtId: {
                     value: null,
                     type: 'crud',
                     props: {
                        crudType: 'select',
                        crudData: import('@imagina/qmembership/_crud/districts'),
                        crudProps: {
                           label: `${this.$tr('qmembership.layout.district.title')}*`,
                           rules: [
                              val => !!val || this.$tr('ui.message.fieldRequired')
                           ],
                        },
                        config: {
                           options: {label: 'name', value: 'id'},
                        }
                     },
                  },
                  address: {
                     value: null,
                     type: 'input',
                     props: {
                         label: `${this.$trp('qmembership.layout.form.address')} *`,
                         rules: [
                             val => !!val || this.$tr('ui.message.fieldRequired')
                         ]
                     },
                  },
                   phone: {
                       value: null,
                       type: 'input',
                       props: {
                           mask:"(###) ### - ####",
                           label: `${this.$trp('qmembership.layout.form.phone')}`,
                       },
                   },
                   city: {
                       value: null,
                       type: 'input',
                       props: {
                           label: `${this.$trp('qmembership.layout.form.city')} *`,
                           rules: [
                               val => !!val || this.$tr('ui.message.fieldRequired')
                           ]
                       },
                   },
                  social: {
                     value: null,
                     type: 'input',
                     props: {
                        label: `${this.$trp('qmembership.layout.form.social')}`,
                        type: 'textarea',
                        rows: 2,
                     }
                  }
               }
            }
         },
         crudInfo() {
            return this.$store.state.qcrudComponent.component[this.crudId] || {}
         }
      }
   }
</script>
