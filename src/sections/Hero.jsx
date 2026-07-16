import { Button } from "@/Components/Button";
import {
  ArrowRight,
  Download,
  ChevronDown,
} from "lucide-react";
import {
    FaGithub,
    FaTelegram,
    FaMailBulk, 
 } from "react-icons/fa";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

const skills = [
    "React",
    "Figma",
    "Css",
    "JavaScript",
    "GitHub",
    "Html",
    "Node.js",
    "Tailwind CSS",
    
]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="Her Image" className="w-full h-full object-cover opacity-40"/>
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/40 to-background"/>
        
        
            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
                        backgroundColor: "#20B2A6",
                        left: `${Math.random()*100}%`,
                        top: `${Math.random()*100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random()*5}s`
                    }}/>
                ))}
            </div>
            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Frontend
                            </span>
                        </div>
                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Making <span className="text-primary glow-text">your</span>
                                <br />
                                thoughts and ideas
                                <br />
                                become <span className="font-serif italic font-normal text-white">
                                            digital.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hello, I'm Yaromyr Shevchenko — Frontend Developer. So far, I've finished my education
                                HTML and CSS, and now I'm actively developing my skills in JavaScript, which will
                                help me make your dreams become true.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact  Me<ArrowRight className="h-5"/>
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5"/>
                                Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-xl text-muted-foreground">Follow Me: </span>
                            {[
                                {icon: FaGithub, href: "#"},
                                {icon: FaTelegram, href: "#"},
                                {icon: FaMailBulk, href: "#"},
                            ].map((social, idx) => (
                                <a key={idx} href="social.href" className="p-2 rounded-full glass hover:primart/10 hover:text-primary transition-all duration-300">
                                    {<social.icon className="w-10 h-10"/>}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div 
                                className=" absolute inset-0
                                rounded-3xl bg-linear-to-br
                                from-primary/10 blur-2xl animate-pulse">
                            </div>
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/profile-photo.jpg" alt="Yaromyr Shevchenko" className="w-full aspect-4/5 object-cover border-radius-2xl"/>

                                {/* Floating badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                        <span className="text-sm font-medium">
                                            Available for work
                                        </span>
                                    </div>
                                </div>
                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">3+</div>
                                    <div className="text-xs text-muted-foreground">Years Exp.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills,].map((skill, idx) => (
                                <div key={idx} className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-700">
                    <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in animation-delay-800 animate-float">
                        <span className="text-xs uppercase tracking-wider">Scroll</span>
                        <ChevronDown className="w-6 h-6 animate-bounce"/>
                    </a>
                </div>
            </div>
        </section>
    )
};


