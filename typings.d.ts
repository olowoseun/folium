interface SanityBody {
    _createdAt: string
    _id: string
    _rev: string
    _updatedAt: string
}

interface Image {
    _type: 'image',
    asset: {
        ref: string
        type: 'reference'
    }
}

interface PageInfo extends SanityBody {
    _type: 'pageInfo'
    location: string
    backgroundInfo: string
    email: string
    role: string
    heroImage: Image
    name: string
    phoneNumber: string
    profilePhoto: Image
}

interface Technology extends SanityBody {
    _type: 'skill'
    image: Image
    progress: number
    title: string
}

interface Skill extends SanityBody {
    _type: 'skill'
    image: Image
    progress: number
    title: string
}

interface Experience extends SanityBody {
    _type: 'experience'
    company: string
    companyLogo: Image
    startDate: date
    endDate: date
    isCurrentEmployer: boolean
    jobTitle: string
    points: string[]
    technologies: Technology[]
}

interface Project extends SanityBody {
    title: string
    _type: 'project'
    image: Image
    linkToBuild: string
    summary: string
    technologies: Technology[]
}

interface Social extends SanityBody {
    _type: 'social'
    title: string
    url: string
}