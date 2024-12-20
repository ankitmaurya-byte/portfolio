"use client";

import projects from "@/data/projects";
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="flex justify-center items-center w-full ">
      <div className="w-full h-full mt-10">
        <div className="py-6 md:flex">
          <h3 className="text-gray-200 text-2xl font-bold md:pr-2">
            Here is a glimpse of what
          </h3>
          <h3 className="text-secondary text-2xl font-bold"> I have done.</h3>
        </div>

        {/* projects start */}

        {projects.map(({ id, ...project }) => {
          return (
            <div
              key={id}
              className={`flex my-14 md:justify-between flex-col ${
                id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }  items-center lg:items-center min-w-full  min-h-full gap-12 `}
            >
              {/* left block */}

              <motion.div
                initial={{ opacity: 0, x: id % 2 === 0 ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="left w-full flex justify-center items-center drop-shadow-custom "
              >
                <Image
                  className="w-full h-full max-h-[400px] rounded-lg border-2 border-secondary"
                  alt={project.name}
                  loading="lazy"
                  width={400}
                  height={400}
                  src={project.image}
                />
              </motion.div>

              {/* right block */}

              <motion.div
                initial={{ opacity: 0, x: id % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="right w-full"
              >
                <div className="flex flex-col items-start w-full mt-6 md:mt-0 tracking-wide">
                  <h3 className="text-lg text-secondary font-semibold leading-10 ">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 pb-4">{project.description}</p>
                  <div className="text-gray-400">
                    <ol>
                      {project.keyFeatures.map((feature) => {
                        return (
                          <li
                            className="flex justify-start items-center py-2"
                            key={feature}
                          >
                            <span>
                              <CheckCircleIcon className="h-5 w-5 mr-3 text-green-400" />
                            </span>
                            {feature}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
                <div className="my-5 flex justify-between md:max-w-[300px]">
                  <a
                    href={project.preview}
                    aria-label={`Preview of ${project.name}`}
                    target="_blank"
                    className="text-gray-200 bg-secondary px-3 py-2 rounded-md hover:shadow-button duration-200 hover:scale-105 flex"
                  >
                    Have a look{" "}
                    <span>
                      {" "}
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />{" "}
                    </span>
                  </a>

                  <a
                    href={project.sourceCode}
                    target="_blank"
                    className="text-gray-200 hover:text-secondary rounded-md border hover:border-secondary px-3 py-2 duration-200"
                  >
                    Source Code
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
