import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";

interface SkillItem {
    name: string;
    level: number;
}

interface SkillCategory {
    category: string;
    items: SkillItem[];
}

const Skills: React.FC = () => {
    const skills: SkillCategory[] = [
        {
            category: "Frontend",
            items: [
                { name: "React", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Tailwind CSS", level: 95 },
                { name: "Next.js", level: 85 },
            ],
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", level: 90 },
                { name: "Express.js", level: 92 },
                { name: "REST APIs", level: 88 },
                { name: "GraphQL", level: 75 },
            ],
        },
        {
            category: "Database",
            items: [
                { name: "MongoDB", level: 88 },
                { name: "Mongoose", level: 90 },
                { name: "SQL", level: 80 },
                { name: "Redis", level: 70 },
            ],
        },
        {
            category: "Tools & Others",
            items: [
                { name: "Git", level: 92 },
                { name: "Docker", level: 75 },
                { name: "AWS", level: 70 },
                { name: "Testing", level: 80 },
            ],
        },
    ];

    const [progressValues, setProgressValues] = useState<{
        [key: string]: number;
    }>({});
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (hasAnimated) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    // Initialize all progress values to 0
                    const initialValues: { [key: string]: number } = {};
                    skills.forEach((category) => {
                        category.items.forEach((skill) => {
                            const key = `${category.category}-${skill.name}`;
                            initialValues[key] = 0;
                        });
                    });
                    setProgressValues(initialValues);

                    // Use CSS transitions by setting final values with staggered delays
                    const timers: NodeJS.Timeout[] = [];

                    skills.forEach((category, categoryIndex) => {
                        category.items.forEach((skill, skillIndex) => {
                            const key = `${category.category}-${skill.name}`;
                            const delay = categoryIndex * 100 + skillIndex * 50;

                            const timer = setTimeout(() => {
                                setProgressValues((prev) => ({
                                    ...prev,
                                    [key]: skill.level,
                                }));
                            }, delay);

                            timers.push(timer);
                        });
                    });

                    return () => {
                        timers.forEach((timer) => clearTimeout(timer));
                    };
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -30px 0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <motion.section
            ref={sectionRef}
            className="py-20 bg-secondary/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Skills &{" "}
                        <span className="text-primary">Technologies</span>
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {skills.map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                className="bg-gradient-card p-6 rounded-2xl shadow-card border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                                variants={{
                                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        },
                                    },
                                }}
                                whileHover={{
                                    y: -5,
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                    },
                                }}
                            >
                                <motion.h3
                                    className="text-xl font-semibold text-foreground mb-6 text-center"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        delay: 0.3 + categoryIndex * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    {category.category}
                                </motion.h3>

                                <div className="space-y-4">
                                    {category.items.map((skill, skillIndex) => {
                                        const skillKey = `${category.category}-${skill.name}`;
                                        const currentProgress =
                                            progressValues[skillKey] || 0;

                                        return (
                                            <motion.div
                                                key={skillKey}
                                                className="space-y-2"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        0.4 +
                                                        categoryIndex * 0.1 +
                                                        skillIndex * 0.05,
                                                    duration: 0.4,
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-foreground">
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        <CountingNumber
                                                            number={
                                                                currentProgress
                                                            }
                                                            className="text-xs"
                                                        />
                                                        %
                                                    </span>
                                                </div>

                                                <Progress
                                                    value={currentProgress}
                                                    className="w-full h-2 transition-all duration-1000 ease-out"
                                                    role="progressbar"
                                                    aria-label={`${skill.name} proficiency`}
                                                    aria-valuenow={
                                                        currentProgress
                                                    }
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Always learning and adapting to new technologies.
                            Currently exploring serverless architectures,
                            microservices, and advanced React patterns to stay
                            at the forefront of web development.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;
