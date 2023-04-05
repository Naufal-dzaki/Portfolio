import React from "react";
import data from "../../json/data.json";
import Peduly from "../../assets/Logos/Peduly";
import Aksamedia from "../../assets/Logos/Aksamedia";
import { motion } from "framer-motion";
import HandleTechIcon from "../../utils/HandleTechIcon";

const ProfesionalExperience = ({ setSelectedPage }) => {
  const experience = data.experience;

  const handleCompanyLogo = (company) => {
    if (company === "peduly") return <Peduly />;
    else if (company === "aksamedia") return <Aksamedia />;
    else return console.log(`error, ${company} logo's not found`);
  };

  const handleDate = (start, end) => {
    let dateStart = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
    }).format(Date.parse(start));

    let dateEnd = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
    }).format(Date.parse(end));

    return `${dateStart} - ${dateEnd}`;
  };

  return (
    <div
      id="experience"
      className="pt-[100px] grid place-content-center w-full max-w-[50rem] mx-auto"
      style={{ minHeight: "calc(100vh - 100px)" }}>
      <motion.div
        className="flex flex-row items-center mb-5 sm:mb-6 md:mb-7 lg:mb-8"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}>
        <h2 className="text-nd-primary text-2xl sm:text-3xl md:text-4xl">
          Experience
        </h2>
        <hr className="border-t border-nd-primary ml-5 flex-grow max-w-[300px]" />
      </motion.div>
      <motion.div onViewportEnter={() => setSelectedPage("experience")}>
        {experience.map((value, index) => (
          <div className="flex gap-3 mx-3 sm:mx-4 md:mx-5" key={index}>
            <div className="flex flex-col items-center">
              <motion.span
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delayChildren: 0.1, delay: 0, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}>
                {handleCompanyLogo(value.company)}
              </motion.span>
              {experience.length - 1 - index !== 0 && (
                <motion.hr
                  className="border-l border-nd-third h-full"
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                />
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <motion.h1
                className="text-nd-white text-lg sm:text-xl"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}>
                {value.position}{" "}
                <a
                  href={value.linkCompany}
                  className="text-nd-primary"
                  target={"_blank"}>
                  @{value.company}
                </a>
              </motion.h1>
              <motion.h5
                className="text-sm text-nd-third"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}>
                {handleDate(value.startDate, value.endDate)}
              </motion.h5>
              <div className="flex gap-x-2">
                {value.tech.map((items, index) => (
                  <motion.span
                    key={index}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}>
                    {HandleTechIcon(items)}
                  </motion.span>
                ))}
              </div>
              <ul className="flex flex-col gap-y-1 w-full list-inside text-nd-white text-base sm:text-lg mt-2 sm:mt-3 md:mt-4 mb-4 sm:mb-5 md:mb-6">
                {value.jobDesc.map((items, index) => (
                  <motion.li
                    style={{ listStyleImage: "url(./icon/arrowRight.svg)" }}
                    key={index}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}>
                    {items}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfesionalExperience;
