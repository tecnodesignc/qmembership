<template></template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'

  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qmembership.profiles',
          permission: 'membership.profiles',
          create: {
            title: this.$tr('qmembership.layout.newProfile'),
            to: 'qmembership.admin.profiles.create',
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'identification', label: "Identificación", field: 'identification', style: 'width: 50px'},
              {
                name: 'user', label: "Usuario", field: 'user', align: 'left',
                format: val => (val && val.first_name) ? val.first_name : ''
              },
              {
                name: 'created_at', label: this.$tr('ui.form.createdAt'), field: 'createdAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {name: 'actions', label: this.$tr('ui.form.actions'), align: 'left'},
            ],
            requestParams: {include: 'user,study'}
          },
          update: {
            to: 'qmembership.admin.profiles.edit',
          },
          delete: true
        }
      }
    },
  }
</script>
