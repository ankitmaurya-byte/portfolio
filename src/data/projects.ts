interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  keyFeatures: Array<string>;
  preview: string;
  sourceCode: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Recipe web App",
    image:
      "https://res.cloudinary.com/dtc1xqzha/image/upload/v1744979555/recipe-web-app_lbodn1.png",
    description:
      "Developed a recipe web application with a user interface, offering features like dish favoriting, search, user profiles,and detailed recipe pages.",
    keyFeatures: [
      "CRUD operation with Firebase",
      "Jwt auth",
      "forget/reset password",
      "Admin and User based access",
    ],
    preview: "https://recipe-social.netlify.app/",
    sourceCode: "https://github.com/ankitmaurya-byte-github/recipe-social",
  },
  {
    id: 2,
    name: "Social Products App",
    image: "/public/ecommerce.png",
    description:
      "Developed a full-featured e-commerce website using the MERN stack,Implemented features such as product browsing, search, user authentication, shopping cart, and order management.",
    keyFeatures: [
      "Advance Search function",
      "forget/reset password",
      "Admin and User based access",
    ],
    preview: "https://buyproducts.netlify.app/",
    sourceCode: "https://github.com/ankitmaurya-byte-github/ecommerce",
  },
  {
    id: 3,
    name: "Movie App",
    image:
      "https://res.cloudinary.com/dtc1xqzha/image/upload/v1744979601/movie-web-app_uzmwhd.png",
    description:
      "Developed a web application presenting comprehensive movie details,Fetched movie information from TheMoviesDatabase using Axios.",
    keyFeatures: [
      "Advance Search function",
      "Add friend with Email",
      "Send Messages at realtime",
    ],
    preview: "https://movie-app-7.netlify.app/",
    sourceCode: "https://github.com/ankitmaurya-byte-github/MoviewebApp",
  },
];

export default projects;
