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
          <div className="text-lg text-gray-400 leading-8 space-y-6 tracking-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p>
                As a web developer, I love turning ideas into reality through
                code. My passion lies in creating websites that are not just
                functional, but also fast and easy to use.
              </p>

              <p>
                I enjoy working with modern web technologies like{" "}
                <span className="text-blue-400">React</span>,{" "}
                <span className="text-blue-400">Next.js</span>, and{" "}
                <span className="text-blue-400">Node.js</span>. What excites me
                most is finding simple solutions to complex problems and making
                websites that work smoothly for everyone.
              </p>

              <p>
                Problem-solving is at the heart of what I do. I&apos;ve
                challenged myself by solving hundreds of coding problems, which
                has sharpened my skills and taught me to write better code.
                I&apos;m always eager to learn new things and find better ways
                to build on the web.
              </p>

              <p>
                I believe in creating websites that make a real difference in
                people&apos;s lives, and I&apos;m excited to keep growing and
                learning in this ever-evolving field.
              </p>
            </motion.div>
          </div>

          <div>
            <a href="https://linkedin.com/in/ankitmaurya-byte" target="_blank">
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
