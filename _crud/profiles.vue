<template></template>
<script>
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
                    apiRoute: 'apiRoutes.qmembership.profiles',
                    permission: 'membership.profiles',
                    create: {
                        title: this.$tr('qmembership.layout.profile.new'),
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
                                field: 'fullName',
                                align: 'left'
                            },
                            {
                                name: 'identification',
                                label: this.$tr('qmembership.layout.profile.identification'),
                                field: 'identification',
                                align: 'left'
                            },
                            {
                                name: 'email',
                                label: this.$tr('qmembership.layout.profile.email'),
                                field: 'email',
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
                        filters: {
                            congregationId: {
                                value: 0,
                                type: 'select',
                                loadOptions: {
                                    apiRoute: 'apiRoutes.qmembership.congregations',
                                    select: {label: 'name', id: 'id'}
                                },
                                props: {
                                    label: `${this.$tr('qmembership.layout.congregation.title')}:`,
                                    options: [
                                        {label: this.$tr('ui.label.all'), value: 0}
                                    ],
                                }
                            },
                            type: {
                                value: 0,
                                type: 'select',
                                loadOptions: {
                                    apiRoute: 'apiRoutes.qmembership.type',
                                    select: {label: 'name', id: 'id'}
                                },
                                props: {
                                    label: `${this.$tr('qmembership.layout.profile.type')}:`,
                                    options: [
                                        {label: this.$tr('ui.label.all'), value: 0}
                                    ],
                                }
                            }
                        },
                    },
                    update: {
                        requestParams: {}
                    },
                    delete: true,
                    formLeft: {
                        firstName: {
                            value: null,
                            type: 'input',
                            props: {
                                label: `${this.$trp('ui.form.firstName')} *`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ]
                            }
                        },
                        lastName: {
                            value: null,
                            type: 'input',
                            props: {
                                label: `${this.$trp('ui.form.lastName')} *`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ]
                            }
                        },
                        docType: {
                            value: null,
                            type: 'select',
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.documentType')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ],
                            },
                            loadOptions: { //Async load options form request, only in types [select, multiSelect]
                                apiRoute: 'apiRoutes.qmembership.documentType', //apiRoute to request
                                select: {label: 'name', id: 'id'},
                            }
                        },
                        identification: {
                            value: '',
                            type: 'input',
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.identification')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired'),
                                    val => val.length >= 6 || this.$tr('ui.message.fieldMinLeng', {num: 6})
                                ],
                            }
                        },
                        email: {
                            value: null,
                            type: 'input',
                            props: {
                                label: `${this.$trp('qmembership.layout.profile.email')} *`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired'),
                                    val => this.$helper.validateEmail(val) || this.$tr('ui.message.fieldEmail')
                                ],
                            }
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
                                config: {options: {label: 'address', value: 'id'}},

                            },
                        },
                        spouseId: {
                            value: null,
                            type: 'select',
                            props: {
                                vIf: this.crudInfo.civilStatus === 1,
                                label: `${this.$tr('qmembership.layout.profile.spouse')}`,
                                config: {
                                    select: {label: 'fullName', value: 'id'},
                                    apiRoute: 'apiRoutes.quser.users',
                                },
                            },
                        },
                        children: {
                            value: null,
                            type: 'multiSelect',
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.children')}*`,
                                useChips: true,
                                config: {
                                    select: {label: 'fullName', value: 'id'},
                                    apiRoute: 'apiRoutes.qmembership.profiles',
                                },
                            },
                        },
                        notes: {
                            value: '',
                            type: 'input',
                            isFakeField: true,
                            props: {
                                label: this.$tr('qmembership.layout.profile.notes'),
                                type: 'textarea',
                                rows: 3,
                            }
                        },
                    },
                    formRight: {
                        activated: {
                            value: '1',
                            type: 'select',
                            props: {
                                label: `${this.$tr('ui.form.status')}:`,
                                options: [
                                    {label: this.$tr('ui.label.enabled'), value: '1'},
                                    {label: this.$tr('ui.label.disabled'), value: '0'},
                                ],
                            }
                        },
                        mediasSingle: {
                            value: {},
                            type: 'media',
                            props: {
                                label: this.$tr('ui.form.image'),
                                zone: 'mainimage',
                                entity: "Modules\\Membership\\Entities\\Profile",
                                enitityId: null
                            }
                        },
                        birthplace: {
                            value: null,
                            type: 'input',
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.birthCity')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ],
                            },

                        },
                        birthday: {
                            value: null,
                            type: 'date',
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.birthday')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ],
                            }
                        },


                        studyId: {
                            value: null,
                            type: 'crud',
                            props: {
                                crudType: 'select',
                                crudData: import('@imagina/qmembership/_crud/studies'),
                                crudProps: {
                                    label: `${this.$tr('qmembership.layout.study.title')}*`,
                                    rules: [
                                        val => !!val || this.$tr('ui.message.fieldRequired')
                                    ],
                                },
                                config: {
                                    options: {label: 'name', value: 'id'},
                                },
                            },
                        },
                        professionId: {
                            value: null,
                            type: 'crud',
                            props: {
                                crudType: 'select',
                                crudData: import('@imagina/qmembership/_crud/professions'),
                                crudProps: {
                                    label: `${this.$tr('qmembership.layout.profession.title')}*`,
                                    rules: [
                                        val => !!val || this.$tr('ui.message.fieldRequired')
                                    ],
                                },
                                config: {
                                    options: {label: 'name', value: 'id'},
                                },
                            },
                        },


                        civilStatus: {
                            value: null,
                            type: 'select',
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.civilStatus')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ],
                            },
                            loadOptions: { //Async load options form request, only in types [select, multiSelect]
                                apiRoute: 'apiRoutes.qmembership.civilStatus', //apiRoute to request
                                select: {label: 'name', id: 'id'},
                            }
                        },
                        ecclesiasticalCourt: {
                            value: null,
                            type: 'select',
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.ecclesiasticalCourt')}*`,
                                vIf: this.crudInfo.civilStatus == 2,
                                options: [
                                    {label: this.$tr('ui.label.yes'), value: '1'},
                                    {label: this.$tr('ui.label.no'), value:'0'},
                                ],
                            }
                        },
                        ecclesiasticalAnswer: {
                            value: null,
                            type: 'select',
                            isFakeField: true,
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.ecclesiasticalAnswer.label')}*`,
                                vIf: this.crudInfo.ecclesiasticalCourt === '1',
                                options: [
                                    {
                                        label: this.$tr('qmembership.layout.profile.ecclesiasticalAnswer.favorable'),
                                        value: 'favorable'
                                    },
                                    {
                                        label: this.$tr('qmembership.layout.profile.ecclesiasticalAnswer.unfavorable'),
                                        value: 'desfavorable'
                                    },
                                ],
                            }
                        },
                        mediasSingle2: {
                            value: {},
                            type: 'media',
                            props: {
                                label: this.$tr('ui.form.image'),
                                vIf: this.crudInfo.ecclesiasticalCourt === '1',
                                zone: 'ecclesiasticalanswer',
                                entity: "Modules\\Membership\\Entities\\Profile",
                                enitityId: null
                            }
                        },
                        baptismCity: {
                            value: null,
                            type: 'input',
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.baptismCity')}*`,
                                rules: [
                                    val => !!val || this.$tr('ui.message.fieldRequired')
                                ],
                            },
                        },
                        baptismDate: {
                            value: null,
                            type: 'date',
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.baptismDate')}*`,
                            }
                        },
                        ministerId: {
                            value: null,
                            type: 'crud',
                            props: {
                                type: 'select',
                                crudData: import('@imagina/quser/_crud/users'),
                                crudProps: {
                                    label: `${this.$tr('qmembership.layout.profile.minister')}`,
                                },
                                config: {
                                    options: {label: 'fullName', value: 'id'},
                                    requestParams: {filter: {roleSlug: 'ministro'}}
                                },
                            },
                        },
                        holySpiritDate: {
                            value: null,
                            type: 'date',
                            props: {
                                label: `${this.$tr('qmembership.layout.profile.holySpiritDate')}*`,
                            }
                        },
                    },
                }
            },
            crudInfo() {
                return this.$store.state.qcrudComponent.component[this.crudId] || {}
            }
        },
    }
</script>
