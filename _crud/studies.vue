<template></template>
<script>
    export default {
        computed: {
            crudData() {
                return {
                    crudId: this.crudId,
                    apiRoute: 'apiRoutes.qmembership.studies',
                    permission: 'membership.studies',
                    create: {
                        title: this.$tr('qmemebership.layout.study.new'),
                        to: 'qmembership.admin.study.create'
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
                        update: {
                            to: 'qmembership.admin.study.edit',
                            requestParams: {}
                        },
                        delete: true,
                        formLeft: {
                            name: {
                                value: null,
                                type: 'input',
                                isTranslatable: true,
                                props: {
                                    label: `${this.$trp('qmembership.layout.name')} *`,
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
                    },
                }
            },
            crudInfo() {
                return this.$store.state.qcrudComponent.component[this.crudId] || {}
            }
        }

    }
</script>
