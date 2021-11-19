import Image from "./assets/Flower1.jpg"; 
 import Image2 from "./assets/FamBurg.jpg";
 import Image3 from "./assets/FamLines1.jpg";

// Each object will have information and link to it's related page Blogs, Burgers, Writers, **Contact. 
 const Content = [
    {
        image: Image,
        title: "Blogs",
        description: "Something about the blogs***",
        link: "" // takes to blogs page
    },
    {
        image: Image2,
        title: "Burgers",
        description: "maybe find that image of the burger with the characters built into it",
        link: "" // takes to Burgers page
    },
    {
        image: Image3,
        title: "Writers",
        description: "anything about the writers",
        link: "" // takes to Writers page
    },
    {
        image: Image3,
        title: "Contact",
        description: "anything",
        link: "" // takes to Contact page
    }

]

export default Content