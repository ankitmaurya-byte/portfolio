"use client";

import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full mb-8 ">
      <div className="text-gray-200 text-2xl font-bold pt-16 pb-10">
        But wait... <span className="text-secondary">Who am I ?</span>
      </div>
      <div className="lg:flex justify-center items-center gap-12">
        {/* left block */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="left w-full h-full mb-8"
        >
          <Image
            src="/about-me.svg"
            className=""
            width={968}
            height={500}
            alt="about-me"
          />
        </motion.div>

        {/* right block */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="right w-full space-y-8"
        >
          <div className="text-lg  text-gray-400 leading-8 space-y-6 tracking-wide ">
            <p>
              As an enthusiastic and driven web developer, I am actively
              searching for opportunities to apply my skills and expertise in a
              professional environment. With a solid educational background in
              computer science and a specific focus on web development, I have
              gained valuable hands-on experience through various projects.
            </p>
            <p>
              Throughout my academic journey, I successfully completed several
              noteworthy projects, including ChatApp, Movie App, Jira todo,
              Excel Clone, and my latest addition, the Recipe Web App. These
              projects have allowed me to showcase my proficiency in JavaScript,
              React, Redux, HTML, and CSS while building engaging and responsive
              web applications.
            </p>
            <p>
              Beyond project work, I have dedicated myself to continuous coding
              practice, solving over 500 challenging coding questions. This
              ongoing pursuit has significantly strengthened my understanding of
              data structures and algorithms, enabling me to write efficient and
              optimized code.
            </p>
            <p>
              I am excited to contribute my skills and knowledge to a
              professional team and make a meaningful impact through my passion
              for web development.
            </p>
          </div>
          <div>
            <a href="www.linkedin.com/in/ankitmaurya-byte" target="_blank">
              <button
                type="button"
                className="bg-secondary px-3 py-2 mb- text-gray-200 flex items-center rounded-md hover:scale-105 hover:shadow-button duration-200"
              >
                Connect with me <LinkIcon className="h-6 w-6 ml-4" />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
