<template></template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'

  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qmembership.studies',
          permission: 'membership.committees',
          create: {
            title: this.$tr('qmembership.layout.newStudy'),
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'name', label: this.$tr('ui.form.title'), field: 'title', align: 'rigth'},
              {
                name: 'created_at', label: this.$tr('ui.form.createdAt'), field: 'createdAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {name: 'actions', label: this.$tr('ui.form.actions'), align: 'left'},
            ],
          },
          update: {
            title: this.$tr('qmembership.layout.updateStudy'),
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
