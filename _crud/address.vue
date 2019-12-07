<template></template>
<script>
    export default {
        computed: {
            crudData() {
                return {
                    crudId: this.$uid(),
                    apiRoute: 'apiRoutes.qmembership.addresses',
                    permission: 'profile.addresses',
                    create: {
                        title: this.$tr('qmembership.layout.address.new'),
                    },
                    read: {
                        title: this.$trp('ui.label.address'),
                        icon: 'fas fa-map-marker-alt',
                        search: false,
                        columns: [
                            {
                                name: 'address', label: this.$tr('qmembership.layout.address.address'), field: 'address1',
                                format: val => val || '-', align: 'left'
                            },
                            {
                                name: 'city', label: this.$tr('qmembership.layout.address.city'), field: 'city',
                                format: val => val || '-', align: 'left'
                            },
                            {
                                name: 'state', label: this.$tr('qmembership.layout.address.phone'), field: 'state',
                                format: val => val || '-', align: 'left'
                            },
                            {name: 'actions', label: this.$tr('ui.form.actions'), align: 'left'},
                        ],
                        requestParams: {filter: {userId: this.$store.state.qmembershipAuth.userId}}
                    },
                    update: {
                        title: this.$tr('qmembership.layout.address.update'),
                        requestParams: {include: ''}
                    },
                    delete: true,
                    formLeft: {
                        id: {value: null},
                        address: {
                            value: null,
                            type: 'input',
                            props: {
                                label: `${this.$tr('qmembership.layout.address.title')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ],
                            }
                        },
                        countryId: {
                            value: null,
                            type: 'select',
                            props: {
                                label: `${this.$tr('qmembership.layout.address.country')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ],
                            },
                            loadOptions: { //Async load options form request, only in types [select, multiSelect]
                                apiRoute: 'apiRoutes.qmembership.country', //apiRoute to request
                                select: {label: 'name', id: 'id'},
                            }
                        },
                        provinceId: {
                            value: null,
                            type: 'select',
                            props: {
                                label: `${this.$tr('qmembership.layout.address.province')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ],
                                vIf: (this.crudInfo.countryId.val)
                            },
                            loadOptions: { //Async load options form request, only in types [select, multiSelect]
                                apiRoute: 'apiRoutes.qmembership.province', //apiRoute to request
                                requestParams: {filter:{country:this.crudInfo.countryId.val}},
                                select: {label: 'name', id: 'id'},
                            }
                        },
                        cityId: {
                            value: null,
                            type: 'select',
                            props: {
                                label: `${this.$tr('qmembership.layout.address.city')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ],
                                vIf: (this.crudInfo.provinceId.val)
                            },
                            loadOptions: { //Async load options form request, only in types [select, multiSelect]
                                apiRoute: 'apiRoutes.qmembership.city', //apiRoute to request
                                requestParams: {filter:{province:this.crudInfo.provinceId.val}},
                                select: {label: 'name', id: 'id'},
                            }
                        },
                        neighborhoodId: {
                            value: null,
                            type: 'select',
                            props: {
                                label: `${this.$tr('qmembership.layout.address.neighborhood')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ],
                                vIf: (this.crudInfo.cityId.val)
                            },
                            loadOptions: { //Async load options form request, only in types [select, multiSelect]
                                apiRoute: 'apiRoutes.qmembership.city', //apiRoute to request
                                requestParams: {filter:{province:this.crudInfo.cityId.val}},
                                select: {label: 'name', id: 'id'},
                            }
                        },
                        phone: {
                            value: null,
                            type: 'input',
                            props: {
                                type: 'phone',
                                label: this.$tr('qmembership.layout.address.phone'),
                            }
                        },
                    }
                }
            }
        },
        methods: {}
    }
</script>
