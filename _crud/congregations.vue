<template></template>
<script>
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
                        name: 'slug',
                        label: this.$tr('qmembership.layout.form.slug'),
                        field: 'slug',
                        align: 'left'
                     },
                     {
                        name: 'address',
                        label: this.$tr('qmembership.layout.form.address.title'),
                        field: 'mainAddress',
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
                  requestParams: {include: 'address'},
                  filters: {
                     districtId: {
                        value: 0,
                        type: 'select',
                        loadOptions: {
                           apiRoute: 'apiRoutes.qmembership.districts',
                           select: {label: 'name', id: 'id'}
                        },
                        props: {
                           label: `${this.$tr('qmembership.layout.district.title')}:`,
                           options: [
                              {label: this.$tr('ui.label.all'), value: 0}
                           ],
                        }
                     },
                  },
               },
               update: {
                  to: 'qmembership.admin.congregation.edit',
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
                  slug: {
                     value: '',
                     type: 'input',
                     isTranslatable: true,
                     props: {
                        label: `${this.$tr('ui.form.slug')}*`,
                        vIf: (this.crudInfo.typeForm == 'update'),
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                     },
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
                     },
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
                  social: {
                     value: null,
                     type: 'input',
                     props: {
                        label: `${this.$trp('uqmembership.layout.social')}`,
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
