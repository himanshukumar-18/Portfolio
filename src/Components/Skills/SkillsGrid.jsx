import { motion } from "framer-motion";

import { skillCategories } from "./skillsData";
import SkillCard from "./SkillCard";

const SkillsGrid = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.15,
            }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.08,
                    },
                },
            }}
            className="
                grid

                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3

                gap-6
                lg:gap-8

                items-stretch
            "
        >
            {skillCategories.map((category, index) => (
                <SkillCard
                    key={category.id}
                    category={category}
                    index={index}
                />
            ))}
        </motion.div>
    );
};

export default SkillsGrid;