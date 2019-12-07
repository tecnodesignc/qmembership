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
               apiRoute: 'apiRoutes.qmembership.workstations',
               permission: 'membership.workstations',
               create: {
                  title: this.$tr('qmembership.layout.workstation.new'),
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
                        name: 'committee',
                        label: this.$tr('qmembership.layout.committee.title'),
                        field: 'committee',
                        align: 'left'
                     },
                     {
                        name: 'profile',
                        label: this.$tr('qmembership.layout.profile.title'),
                        field: 'fullName',
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
                  requestParams: {include: 'committee,profile'},
                  filters: {
                     committeeId: {
                        value: null,
                        type: 'select',
                        loadOptions: {
                           apiRoute: 'apiRoutes.qmembership.committee',
                           select: {label: 'name', id: 'id'}
                        },
                        props: {
                           label: `${this.$tr('qmembership.layout.committee.title')}:`,
                           options: [
                              {label: this.$tr('ui.label.all'), value: 0}
                           ],
                        }
                     },
                     profileId: {
                        value: null,
                        type: 'select',
                        loadOptions: {
                           apiRoute: 'apiRoutes.qmembership.profile',
                           select: {label: 'fullName', id: 'id'}
                        },
                        props: {
                           label: `${this.$tr('qmembership.layout.profile.title')}:`,
                           options: [
                              {label: this.$tr('ui.label.all'), value: 0}
                           ],
                        }
                     },
                  },
               },
               update: {
                  to: 'qmembership.admin.workstation.edit',
                  requestParams: {}
               },
               delete: true,
               formLeft: {
                  name: {
                     value: null,
                     type: 'input',
                     isTranslatable: true,
                     props: {
                        label: `${this.$trp('qmembership.layout.form.name')}*`,
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
                     }
                  },
               },
               formRight: {
                  userId: {
                     value: null,
                     type: 'select',
                     props: {
                        label: `${this.$tr('qmembership.layout.profile.title')}*`,
                        rules: [
                           val => !!val || this.$tr('ui.message.fieldRequired')
                        ],
                        config: {
                           select: {label: 'fullName', value: 'id'},
                           apiRoute: 'apiRoutes.qmembership.profile',
                        },
                     },
                  },
                  categoryId: {
                     value: null,
                     type: 'crud',
                     props: {
                        crudType: 'select',
                        crudData: import('@imagina/qmembership/_crud/committees'),
                        crudProps: {
                           label: `${this.$tr('qmembership.layout.committee.title')}*`,
                           rules: [
                              val => !!val || this.$tr('ui.message.fieldRequired')
                           ],
                        },
                     },
                  },
               }
            }
         },
         crudInfo() {
            return this.$store.state.qcrudComponent.component[this.crudId] || {}
         }
      }

   }
</script>
