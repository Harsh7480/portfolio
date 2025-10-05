import React from "react";

function Skills() {
    const skills = [
        { name: "C Programming", icon: "/icons/c.svg" },
        { name: "Java", icon: "/icons/java.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "HTML 5", icon: "/icons/html5_icon.svg" },
        { name: "CSS 3", icon: "/icons/css3_icon.svg" },
        { name: "Javascript", icon: "/icons/JS_icon.svg" },
        { name: "React", icon: "/icons/react_icon.png" },
        { name: "Next.js", icon: "/icons/nextjs.png" },
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Express.js", icon: "/icons/express.svg" },
        { name: "PHP", icon: "/icons/php.png" },
        { name: "Type Script", icon: "/icons/ts.png" },
        { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "SQL", icon: "/icons/sql.png" },
        { name: "AWS", icon: "/icons/aws.svg" },
        { name: "Tailwindcss", icon: "/icons/tailwindcss.svg" },
        { name: "Power BI", icon: "/icons/powerBI.svg" },
        { name: "AI", icon: "/icons/ai.png" },
        { name: "Bootstrap", icon: "/icons/bootstrap.png" },
        { name: "Git", icon: "/icons/git.svg" },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gray-100 text-gray-600 dark:text-gray-200 dark:bg-gray-600 text-sm font-medium">
                    Skills
                </div>
                <h2 className="text-lg text-gray-600 mb-12 dark:text-gray-300">
                    The skills, tools and technologies I am really good at:
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-10 ">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center text-center"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-12 h-12 mb-2"
                            />
                            <p className="text-sm text-gray-700 dark:text-gray-200">{skill.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;
