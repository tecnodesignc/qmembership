<template></template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'

  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qmembership.congregations',
          permission: 'membership.congregations',
          create: {
            title: this.$tr('qmembership.layout.newCongregation'),
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'name', label: this.$tr('ui.form.title'), field: 'title', align: 'rigth'},
              {name: 'slug', label: this.$tr('ui.form.slug'), field: 'slug', align: 'left'},
              {
                name: 'district_id', label: this.$tr('ui.form.district'), field: 'district', align: 'left',
                format: val => val ? (val.name ? val.name : '-') : '-'
              },
              {
                name: 'created_at', label: this.$tr('ui.form.createdAt'), field: 'createdAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {name: 'actions', label: this.$tr('ui.form.actions'), align: 'left'},
            ],
            requestParams: {include: 'district'}
          },
          update: {
            title: this.$tr('qmembership.layout.updateCongregation'),
            requestParams: {include: 'district'}
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            userId: {value: this.$store.state.quserAuth.userId},
            title: {
              label: this.$tr('ui.form.title'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
            },
            slug: {
              label: this.$tr('ui.form.slug'),
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
            },
          },
          formRight: {
             districtId: {
              label: this.$tr('ui.form.district'),
              value: null,
              type: 'select',
              clearable: true,
              loadOptions: {
                apiRoute: 'apiRoutes.qmembership.districts',
                select: {label: 'name', id: 'id'},
              }
            },
          },
        }
      }
    },
  }
</script>
