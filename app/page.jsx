import About from "@/components/About";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <CTA />
        </main>
    );
}
