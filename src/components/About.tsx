import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [displayedCode, setDisplayedCode] = useState([""]);
    const [isInView, setIsInView] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    const codeLines = [
        "// Building scalable MERN solutions",
        "const developer = {",
        "  name: 'Yassine Hamdi',",
        "  expertise: ['MongoDB', 'Express', 'React', 'Node.js'],",
        "  experience: '2+ years',",
        "  focus: 'Full-Stack'",
        "};",
        "",
        "const buildSolution = async (requirements) => {",
        "  const solution = await architect(requirements);",
        "  return solution.scalable().performant().maintainable();",
        "};",
    ];

    // Observe when the About section enters the viewport
    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.2 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    // Start typing only once when in view
    useEffect(() => {
        if (isInView && !hasStarted) {
            setHasStarted(true);
            setCurrentLine(0);
            setCurrentChar(0);
            setDisplayedCode([""]);
        }
    }, [isInView, hasStarted]);

    // Typing effect, runs only after hasStarted is true
    useEffect(() => {
        if (!hasStarted) return;
        if (currentLine < codeLines.length) {
            const timer = setTimeout(() => {
                if (currentChar < codeLines[currentLine].length) {
                    setDisplayedCode((prev) => {
                        const newCode = [...prev];
                        newCode[currentLine] = codeLines[currentLine].substring(
                            0,
                            currentChar + 1
                        );
                        return newCode;
                    });
                    setCurrentChar((prev) => prev + 1);
                } else {
                    setCurrentLine((prev) => prev + 1);
                    setCurrentChar(0);
                    if (currentLine + 1 < codeLines.length) {
                        setDisplayedCode((prev) => [...prev, ""]);
                    }
                }
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [currentLine, currentChar, codeLines, hasStarted]);

    return (
        <motion.section
            id="about"
            ref={sectionRef}
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
                        About <span className="text-primary">Me</span>
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-2 gap-12 items-center"
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
                        {/* Left Column - Text Content */}
                        <motion.div
                            className="space-y-6"
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    },
                                },
                            }}
                        >
                            <motion.p
                                className="text-lg text-muted-foreground leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                I'm a passionate MERN stack developer with a
                                love for creating efficient, scalable web
                                applications. My journey in web development
                                started with curiosity and has evolved into a
                                deep expertise in modern JavaScript
                                technologies.
                            </motion.p>

                            <motion.p
                                className="text-lg text-muted-foreground leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                I specialize in building full-stack applications
                                using MongoDB, Express.js, React, and Node.js.
                                From responsive front-end interfaces to robust
                                backend APIs, I enjoy every aspect of the
                                development process.
                            </motion.p>

                            <motion.div
                                className="space-y-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold text-foreground">
                                    What I bring:
                                </h3>
                                <motion.ul
                                    className="space-y-2 text-muted-foreground"
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
                                    {[
                                        "Clean, maintainable code",
                                        "Modern development practices",
                                        "Problem-solving mindset",
                                        "Continuous learning approach",
                                    ].map((item) => (
                                        <motion.li
                                            key={item}
                                            className="flex items-center"
                                            variants={{
                                                hidden: { opacity: 0, x: -20 },
                                                visible: {
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 300,
                                                    },
                                                },
                                            }}
                                            whileHover={{ x: 5 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                            }}
                                        >
                                            <motion.span
                                                className="w-2 h-2 bg-primary rounded-full mr-3"
                                                whileHover={{ scale: 1.5 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                }}
                                            />
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Terminal */}
                        <motion.div
                            className="relative hidden md:block"
                            variants={{
                                hidden: { opacity: 0, x: 30, scale: 0.9 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
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
                                transition: { type: "spring", stiffness: 400 },
                            }}
                        >
                            <motion.div
                                className="bg-terminal-bg border border-border rounded-lg overflow-hidden card-shadow"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.3,
                                    type: "spring",
                                    stiffness: 300,
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Terminal Header */}
                                <motion.div
                                    className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="flex space-x-2">
                                            <motion.div
                                                className="w-3 h-3 bg-destructive rounded-full"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                }}
                                            />
                                            <motion.div
                                                className="w-3 h-3 bg-warning rounded-full"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                }}
                                            />
                                            <motion.div
                                                className="w-3 h-3 bg-success rounded-full"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                }}
                                            />
                                        </div>
                                        <span className="text-sm text-muted-foreground font-mono ml-4">
                                            ~/portfolio/yassine-hamdi
                                        </span>
                                    </div>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-muted-foreground"
                                        whileHover={{ rotate: 90 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                        }}
                                    >
                                        <polyline points="4 17 10 11 4 5"></polyline>
                                        <line
                                            x1="12"
                                            y1="19"
                                            x2="20"
                                            y2="19"
                                        ></line>
                                    </motion.svg>
                                </motion.div>

                                {/* Terminal Content */}
                                <motion.div
                                    className="p-6 font-mono text-sm min-h-[400px]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center space-x-2 mb-4">
                                        <span className="text-success">
                                            yassine@portfolio
                                        </span>
                                        <span className="text-muted-foreground">
                                            :
                                        </span>
                                        <span className="text-accent">~</span>
                                        <span className="text-muted-foreground">
                                            $
                                        </span>
                                        <span className="text-foreground">
                                            developer.js
                                        </span>
                                    </div>

                                    <div className="space-y-1">
                                        {displayedCode.map((line, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: 0.6 + index * 0.1,
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                <span className="text-muted-foreground w-8 text-right mr-4">
                                                    {line && index + 1}
                                                </span>
                                                <span className="text-terminal-text">
                                                    {line}
                                                    {index === currentLine && (
                                                        <motion.span
                                                            className="bg-terminal-cursor w-2 h-5 inline-block ml-1"
                                                            animate={{
                                                                opacity: [
                                                                    1, 0, 1,
                                                                ],
                                                            }}
                                                            transition={{
                                                                duration: 1,
                                                                repeat: Infinity,
                                                            }}
                                                        />
                                                    )}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {currentLine >= codeLines.length && (
                                        <motion.div
                                            className="mt-4 flex items-center space-x-2"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                            viewport={{ once: true }}
                                        >
                                            <span className="text-success">
                                                yassine@portfolio
                                            </span>
                                            <span className="text-muted-foreground">
                                                :
                                            </span>
                                            <span className="text-accent">
                                                ~
                                            </span>
                                            <span className="text-muted-foreground">
                                                $
                                            </span>
                                            <motion.span
                                                className="bg-terminal-cursor w-2 h-5 inline-block"
                                                animate={{ opacity: [1, 0, 1] }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                }}
                                            />
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-success/10 border border-success/20 rounded-lg p-3"
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                }}
                                transition={{
                                    delay: 0.7,
                                    type: "spring",
                                    stiffness: 300,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 360,
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                    },
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-success"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-4 -left-4 bg-accent/10 border border-accent/20 rounded-lg p-3"
                                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                }}
                                transition={{
                                    delay: 0.8,
                                    type: "spring",
                                    stiffness: 300,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: -360,
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                    },
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-accent"
                                >
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
