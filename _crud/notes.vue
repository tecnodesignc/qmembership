<template></template>
<script>
  export default {
    computed: {
      crudData() {
        return {
          field: 'notes',
          apiRoute: 'apiRoutes.quser.fields',
          permission: 'membership.profiles',
          create: {
            title: this.$tr('qmembership.layout.notes.new'),
          },
          read: {
            title: this.$trp('qmembership.layout.notes.title'),
            icon: 'fas fa-sticky-note',
            search: false,
            columns: [
              {
                name: 'value', label: this.$tr('qmembership.layout.notes.title'), field: 'value',
                format: val => val || '-', align: 'left'
              },
              {name: 'actions', label: this.$tr('ui.form.actions'), align: 'left'},
            ],
            requestParams: {
              filter: {
                userId: this.$store.state.quserAuth.userId,
                name: 'notes'
              }
            }
          },
          update: {
            title: this.$tr('qmembership.layout.notes.update'),
            requestParams: {
              filter: {
                userId: this.$store.state.quserAuth.userId,
                name: 'notes'
              }
            }
          },
          delete: true,
          formLeft: {
            id: {value: null},
            userId: {value: this.$store.state.quserAuth.userId},
            value: {
              name : 'value',
              value: null,
              type: 'html',
              props : {
                label: `${this.$tr('qmembership.layout.notes.title')}*`,
                rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
                ],
              }
            },
          }
        }
      }
    }
  }
</script>
