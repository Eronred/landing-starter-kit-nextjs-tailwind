interface Testimonial {
    avatar: string
    name: string
    position: string
    content: string
    title: string
}


export const testimonialData: Testimonial[] = [
    {
        avatar: "/avatar-1.png",
        name: "John Doe",
        position: "CEO at Company",
        content:
            "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
        title: "It’s just incredible!",
    },
    {
        avatar: "/avatar-2.png",
        name: "Natasha Romanoff",
        position: "Black Widow",
        content:
            "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
        title: "Satisfied User Here!",
    },
    {
        avatar: "/avatar-3.png",
        name: "Moritika Kazuki",
        position: "Finance Manager at Mangan",
        content:
            "“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
        title: "No doubt, Spend.In is the best!",
    },
]



//  Footer content

interface FooterLink {
    label: string;
    url: string;
}

interface FooterSectionProps {
    title: string;
    urls: FooterLink[];
}



export const footerContent: FooterSectionProps[] = [
    {
        title: "Product",
        urls: [
            { label: "Digital Invoice", url: "#" },
            { label: "Insights", url: "#" },
            { label: "Reimbursements", url: "#" },
        ],
    },
    {
        title: "Company",
        urls: [
            { label: "About Us", url: "#" },
            { label: "Newsletters", url: "#" },
            { label: "Our Partners", url: "#" },
            { label: "Careers", url: "#" },
            { label: "Contact Us", url: "#" },
        ],
    },
    {
        title: "Resources",
        urls: [
            { label: "Blog", url: "#" },
            { label: "Pricing", url: "#" },
            { label: "FAQ", url: "#" },
            { label: "Events", url: "#" },
            { label: "Ebooks & Guides", url: "#" },
        ],
    },
    {
        title: "Follow Us",
        urls: [
            { label: "LinkedIn", url: "#" },
            { label: "Twitter", url: "#" },
            { label: "Facebook", url: "#" },
            { label: "Instagram", url: "#" },
            { label: "YouTube", url: "#" },
        ],
    }
];