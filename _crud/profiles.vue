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
            title: this.$tr('qmembership.layout.newPlace'),
            to: 'qmembership.admin.profiles.create',
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'title', label: this.$tr('ui.form.title'), field: 'title', align: 'rigth'},
              {name: 'slug', label: this.$tr('ui.form.slug'), field: 'slug', align: 'left'},
              {
                name: 'created_at', label: this.$tr('ui.form.createdAt'), field: 'createdAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {name: 'actions', label: this.$tr('ui.form.actions'), align: 'left'},
            ],
            requestParams: {include: ''}
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
