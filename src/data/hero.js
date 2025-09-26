export const heroData = {
    greeting: "Hi, I'm",
    name: "Krims",
    roles: [
        "Frontend Developer",
        "Creative Coder"
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    stats: [
        { number: '1', label: 'Years Experience' },
        { number: '10', label: 'Project Completed' },
    ],
    socialLinks: [
        {
            name: 'GitHub',
            url: 'https://github.com/krims31',
            icon: 'Github' // Исправлено на Github
        },
        {
            name: 'Email',
            url: 'mailto:krims31@mail.ru', // Добавлено mailto:
            icon: 'Mail'
        },
        {
            name: 'Telegram',
            url: 'https://t.me/krims42',
            icon: 'Telegram'
        },
    ],
    ctaButtons: [
        {
            text: 'View My Work',
            href: '#projects',
            variant: 'primary' 
        },
        {
            text: 'Contact Me',
            href: '#contact',
            variant: 'secondary'
        },
    ]
}