import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
    return (
        <motion.section
            id="contact"
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
                        Get In <span className="text-primary">Touch</span>
                    </motion.h2>

                    <motion.div
                        className="grid lg:grid-cols-2 gap-12"
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
                        {/* Contact Info */}
                        <motion.div
                            className="space-y-8"
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
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-semibold text-foreground mb-4">
                                    Let's work together
                                </h3>
                                <motion.p
                                    className="text-lg text-muted-foreground leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    I'm always interested in new opportunities
                                    and exciting projects. Whether you have a
                                    question, project idea, or just want to say
                                    hello, feel free to reach out!
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="space-y-4"
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
                                <motion.div
                                    className="flex items-center space-x-3"
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
                                    <motion.div
                                        className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center"
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor:
                                                "rgba(59, 130, 246, 0.3)",
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                        }}
                                    >
                                        <Mail className="h-5 w-5 text-primary" />
                                    </motion.div>
                                    <div>
                                        <p className="font-medium text-foreground">
                                            Email
                                        </p>
                                        <p className="text-muted-foreground">
                                            nadayassinhamdi@gmail.com
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center space-x-3"
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                delay: 0.1,
                                            },
                                        },
                                    }}
                                    whileHover={{ x: 5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    <motion.div
                                        className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center"
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor:
                                                "rgba(59, 130, 246, 0.3)",
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                        }}
                                    >
                                        <Phone className="h-5 w-5 text-primary" />
                                    </motion.div>
                                    <div>
                                        <p className="font-medium text-foreground">
                                            Phone
                                        </p>
                                        <p className="text-muted-foreground">
                                            +212 7 62 64 09 37
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="pt-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-lg font-medium text-foreground mb-4">
                                    Follow me
                                </h4>
                                <div className="flex space-x-4">
                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="hover:bg-primary hover:text-primary-foreground"
                                        >
                                            <a href="https://github.com/Yassin-ha">
                                                <motion.div
                                                    whileHover={{ rotate: 12 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                    }}
                                                >
                                                    <Github className="h-5 w-5" />
                                                </motion.div>
                                            </a>
                                        </Button>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="hover:bg-primary hover:text-primary-foreground"
                                        >
                                            <a href="https://www.linkedin.com/in/yassine-hamdi-9a6067278/">
                                                <motion.div
                                                    whileHover={{ scale: 1.2 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                    }}
                                                >
                                                    <Linkedin className="h-5 w-5" />
                                                </motion.div>
                                            </a>
                                        </Button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border"
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
                            <motion.form
                                action="https://formspree.io/f/xvgbjege"
                                method="POST"
                                className="space-y-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05,
                                        },
                                    },
                                }}
                            >
                                <motion.div
                                    className="grid md:grid-cols-2 gap-4"
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                            },
                                        },
                                    }}
                                >
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">
                                            First Name
                                        </label>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                            }}
                                        >
                                            <Input
                                                name="firstName"
                                                placeholder="Your first name"
                                            />
                                        </motion.div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">
                                            Last Name
                                        </label>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                            }}
                                        >
                                            <Input
                                                name="lastName"
                                                placeholder="Your last name"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                delay: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    <label className="text-sm font-medium text-foreground">
                                        Email
                                    </label>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                        }}
                                    >
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                delay: 0.15,
                                            },
                                        },
                                    }}
                                >
                                    <label className="text-sm font-medium text-foreground">
                                        Subject
                                    </label>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                        }}
                                    >
                                        <Input
                                            name="subject"
                                            placeholder="What's this about?"
                                            required
                                        />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                delay: 0.2,
                                            },
                                        },
                                    }}
                                >
                                    <label className="text-sm font-medium text-foreground">
                                        Message
                                    </label>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                        }}
                                    >
                                        <Textarea
                                            name="message"
                                            placeholder="Tell me about your project or just say hello!"
                                            className="min-h-[120px]"
                                            required
                                        />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                delay: 0.25,
                                            },
                                        },
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            type="submit"
                                            className="w-full"
                                            size="lg"
                                        >
                                            Send Message
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </motion.form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
