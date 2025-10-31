import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Button from "./ui/Button";
import BlurText from "./ui/shadcn-io/blur-text";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
        >
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="mb-8">
                    <div className="text-6xl flex justify-center gap-5 md:text-8xl font-bold mb-4 tracking-tight">
                        <BlurText
                            text="Yassine"
                            delay={150}
                            animateBy="words"
                            direction="bottom"
                            className=" text-foreground"
                        />
                        <BlurText
                            text="Hamdi"
                            delay={150}
                            animateBy="words"
                            direction="bottom"
                            className="text-6xl md:text-8xl font-bold mb-4 tracking-tight text-primary"
                        />
                    </div>
                    <BlurText
                        text="MERN Stack Developer"
                        delay={200}
                        animateBy="words"
                        direction="bottom"
                        className="text-xl md:text-2xl flex justify-center text-muted-foreground mb-2"
                    />
                    <BlurText
                        text="Building modern web applications with MongoDB, Express.js, React, and Node.js"
                        delay={200}
                        animateBy="words"
                        direction="bottom"
                        className="text-lg text-muted-foreground flex justify-center max-w-2xl mx-auto"
                    />
                </div>

                {/* Animated Buttons Section */}
                <motion.div
                    className="flex justify-center gap-4 mb-8 flex-wrap"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.3,
                            },
                        },
                    }}
                >
                    {/* GitHub Button */}
                    <motion.div
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
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="default"
                            size="lg"
                            className="group relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <a
                                href="https://github.com/Yassin-ha"
                                className="flex relative z-10"
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
                                GitHub
                            </a>
                        </Button>
                    </motion.div>

                    {/* LinkedIn Button */}
                    <motion.div
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
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="group relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-blue-600/10"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <a
                                href="https://www.linkedin.com/in/yassine-hamdi-9a6067278/"
                                className="flex relative z-10"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    <Linkedin className="mr-2 h-5 w-5" />
                                </motion.div>
                                LinkedIn
                            </a>
                        </Button>
                    </motion.div>

                    {/* Contact Button */}
                    <motion.div
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
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="group relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-linear-to-r from-green-500/10 to-green-600/10"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <a
                                href="mailto:nadayassinhamdi@gmail.com"
                                className="flex relative z-10"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    <Mail className="mr-2 h-5 w-5" />
                                </motion.div>
                                Contact
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Animated Scroll Indicator */}
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-sm text-muted-foreground"
                    >
                        Scroll to explore my work
                    </motion.p>

                    <motion.div
                        className="mt-4"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            y: [0, -8, 0],
                        }}
                        transition={{
                            opacity: { delay: 0.8, duration: 0.6 },
                            y: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <motion.div
                            className="w-1 h-8 bg-linear-to-b from-primary to-primary/60 mx-auto rounded-full"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </section>
    );
};

export default Hero;
