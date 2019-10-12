const pages = config('pages') // Get Pages from config

//Profile
export default [
    {
        title: 'qmembership.sidebar.adminGroup',
        icon: 'fas fa-map-marked-alt',
        children: [
            pages.qmembership.profiles, // profiles setup
            pages.qmembership.profession, // profiles setup
            pages.qmembership.district,
            pages.qmembership.categories, // categories setup
        ]
    },
]
