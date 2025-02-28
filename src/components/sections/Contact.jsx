import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6">
            <div className="relative">
                <input type="text" name="name" id="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:"/>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
