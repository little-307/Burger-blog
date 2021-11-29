import Image from "./assets/Flower1.jpg"; 
 import Image2 from "./assets/FamBurg.jpg";
 import Image3 from "./assets/FamLines1.jpg";
 import Contact from './assets/contactCard.jpeg';

// Each object will have information and link to it's related page Blogs, Burgers, Writers, **Contact. 
 const Content = [
    {
        image: Image,
        title: "Blogs",
        description: "Blogs about. . . uhhhhh where every you want to take them, i guess. Have a look, have a laugh, get inspired, take a stab at it, share it if you want (coming soonn-nish?). ",
        link: "/blogs" // takes to blogs page
    },
    {
        image: Image2,
        title: "Burgers",
        description: "Every episode in the restaurant the Burger Of The Day is different. They made a book of these recipes, so I borrowed a few to build for this project.",
        link: "/burgers" // takes to Burgers page
    },
    {
        image: Image3,
        title: "About",
        description: "The writers go by their profile names on the site here. The lack of information on each individual goes to show I haven't had a lot of time to build up these personas.",
        link: "/about" // takes to Writers page
    },
    {
        image: Contact,
        title: "Contact",
        description: "A page built to start a way to retrieve data from the user. I'm a little tired so I'm pulling at strings here. I feel like the Todo List example is very similar to how the comment function will work.",
        link: "/contact" // takes to Contact page
    }

]

export default Content