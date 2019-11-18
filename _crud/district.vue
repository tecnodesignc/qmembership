<template></template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'

  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qmembership.districts',
          permission: 'membership.districts',
          create: {
            title: this.$tr('qmembership.layout.newDistrict'),
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'name', label: this.$tr('ui.form.title'), field: 'name', align: 'center'},
              {
                name: 'created_at', label: this.$tr('ui.form.createdAt'), field: 'createdAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {name: 'actions', label: this.$tr('ui.form.actions'), align: 'left'},
            ],
            requestParams: {},
            actions : [
              {
                icon : 'fas fa-question-circle',
                color : 'warning',
                route : 'qmembership.admin.congregation'
              },
            ]
          },
          update: {
            title: this.$tr('qmembership.layout.updateDistrict'),
            requestParams: {}
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            name: {
              label: this.$tr('ui.form.name'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
            },
            description: {
              label: this.$tr('ui.form.description'),
              value: '',
              type: 'html',
              isRequired: true,
              isTranslatable: true,
            }
          }
        }
      }
    },
  }
</script>
