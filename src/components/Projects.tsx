import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-stack MERN e-commerce application with user authentication, payment integration, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            features: [
                "User Authentication",
                "Payment Gateway",
                "Admin Panel",
                "Responsive Design",
            ],
            status: "In Development",
            githubLink: "https://github.com/Yassin-ha/multi-vendor-app",
        },
        {
            title: "Luxury Hotel Booking",
            description:
                "A high-performance, SEO-optimized hotel reservation platform built with Next.js and Tailwind, featuring responsive design and intuitive booking workflows for premium hospitality brands.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
            features: [
                "Fully Responsive Hotel Room Gallery",
                "Dynamic Room Filtering System",
                "Integrated Booking Form with Validation",
                "SEO-Optimized Structure & Metadata",
            ],
            status: "Live",
            demoLink: "https://template2.digild.com/",
        },
        {
            title: "Luxery Rental Car App",
            description:
                "Car rental solution built with Next.js and Tailwind CSS, featuring intuitive booking workflows, dynamic fleet management, and responsive design for modern car rental agencies.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
            features: [
                "Fully Responsive Design for All Devices",
                "Interactive Team Member Profiles with Hover Animations",
                "SEO-Optimized Structure & Metadata",
            ],
            status: "Live",
            demoLink: "https://gtsport.digild.com/",
        },
    ];

    return (
        <motion.section
            id="projects"
            className="py-20 bg-background"
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
                        Featured <span className="text-primary">Projects</span>
                    </motion.h2>

                    <motion.div
                        className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="bg-gradient-card p-6 rounded-2xl shadow-card border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 30,
                                        scale: 0.9,
                                    },
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
                                    y: -8,
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10,
                                    },
                                }}
                            >
                                <div className="space-y-4">
                                    <motion.div
                                        className="flex items-start justify-between"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.3 + index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <motion.span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                project.status === "Live"
                                                    ? "bg-primary/20 text-primary"
                                                    : "bg-muted text-muted-foreground"
                                            }`}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                            }}
                                        >
                                            {project.status}
                                        </motion.span>
                                    </motion.div>

                                    <motion.p
                                        className="text-muted-foreground text-sm leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            delay: 0.4 + index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        {project.description}
                                    </motion.p>

                                    <div className="space-y-3">
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: 0.5 + index * 0.1,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <h4 className="text-sm font-medium text-foreground mb-2">
                                                Technologies:
                                            </h4>
                                            <div className="flex flex-wrap gap-1">
                                                {project.tech.map(
                                                    (tech, techIndex) => (
                                                        <motion.span
                                                            key={tech}
                                                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0.8,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                scale: 1,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    0.6 +
                                                                    index *
                                                                        0.1 +
                                                                    techIndex *
                                                                        0.05,
                                                                type: "spring",
                                                                stiffness: 500,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                            whileHover={{
                                                                scale: 1.1,
                                                                backgroundColor:
                                                                    "rgba(59, 130, 246, 0.1)",
                                                            }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    )
                                                )}
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: 0.7 + index * 0.1,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <h4 className="text-sm font-medium text-foreground mb-2">
                                                Key Features:
                                            </h4>
                                            <ul className="text-xs text-muted-foreground space-y-1">
                                                {project.features.map(
                                                    (feature, featureIndex) => (
                                                        <motion.li
                                                            key={feature}
                                                            className="flex items-center"
                                                            initial={{
                                                                opacity: 0,
                                                                x: -5,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                x: 0,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    0.8 +
                                                                    index *
                                                                        0.1 +
                                                                    featureIndex *
                                                                        0.08,
                                                                duration: 0.3,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                        >
                                                            <motion.span
                                                                className="w-1 h-1 bg-primary rounded-full mr-2"
                                                                whileHover={{
                                                                    scale: 1.5,
                                                                }}
                                                                transition={{
                                                                    type: "spring",
                                                                    stiffness: 400,
                                                                }}
                                                            />
                                                            {feature}
                                                        </motion.li>
                                                    )
                                                )}
                                            </ul>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        className="flex gap-2 pt-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.9 + index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        {project.status ===
                                            "In Development" && (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1"
                                            >
                                                <Button
                                                    size="sm"
                                                    variant="default"
                                                    className="w-full"
                                                >
                                                    <a
                                                        href={
                                                            project.githubLink
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex w-full h-full items-center justify-center"
                                                    >
                                                        <Github className="mr-2 h-4 w-4" />
                                                        Code
                                                    </a>
                                                </Button>
                                            </motion.div>
                                        )}
                                        {project.status === "Live" && (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1"
                                            >
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="w-full"
                                                >
                                                    <a
                                                        href={project.demoLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex w-full h-full items-center justify-center"
                                                    >
                                                        <ExternalLink className="mr-2 h-4 w-4" />
                                                        Demo
                                                    </a>
                                                </Button>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="default"
                                size="lg"
                                className="mt-10 group"
                            >
                                <a
                                    href="https://github.com/Yassin-ha?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 12 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                        }}
                                    >
                                        <Github className="mr-2 h-5 w-5" />
                                    </motion.div>
                                    See More Projects
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
