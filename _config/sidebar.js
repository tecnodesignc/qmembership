const pages = config('pages') // Get Pages from config

//Profile
export default [
    {
        title: 'qmembership.sidebar.adminGroup',
        icon: 'fas fa-map-marked-alt',
        children: [
          pages.qmembership.profession, // profiles setup
          pages.qmembership.district,
          pages.qmembership.congregation,
          pages.qmembership.committee,
          pages.qmembership.workstation,
          pages.qmembership.profiles, // profiles setup
          pages.qmembership.study, // study setup
            // pages.qmembership.categories, // categories setup
        ]
    },
]
