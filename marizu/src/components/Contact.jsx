import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter, ArrowUpRight, Download } from 'lucide-react';
import emailjs from 'emailjs-com'; // 🔹 Import EmailJS
import toast from 'react-hot-toast'
// Optional if you want toast notifications

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/tobe30' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/tobemarizu-daniel-86057b295/' },
  { name: 'Twitter', icon: Twitter, href: 'http://x.com/tobemarizu101/' },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const toastId = toast.loading('Sending message...');

  emailjs
    .send(
      'service_bguoqf5', // Service ID
      'template_ehvtvek', // Template ID
      formState,
      'F4CXFDJ2fKWNfBcq5' // Public Key
    )
    .then(() => {
      toast.success("Message sent! I'll get back to you soon 🚀", {
        id: toastId,
      });
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast.error('Something went wrong. Please try again ❌', {
        id: toastId,
      });
      setIsSubmitting(false);
    });
};


  return (
    <section id="contact" className="py-24 bg-white/30 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mono text-sm tracking-widest text-gray-600 mb-4">05 / Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
              Let's work <br />
              <span className="text-neutral-500">together</span>
            </h2>
            <p className="text-xl text-neutral-500 font-semibold leading-relaxed mb-4">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can 
              bring your ideas to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:tobemarizu@gmail.com" className="font-medium hover:text-muted-foreground transition-colors">
                    tobemarizu@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-secondary-foreground rounded-xl border border-gray-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-black text-white border border-gray-200 rounded-xl hover:bg-black hover:text-primary-foreground hover:border-black transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* CV Download */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl font-medium hover:scale-105 transition-transform"
            >
              <Download className="w-5 h-5" />
              Download Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-background p-8 rounded-2xl border border-gray-200">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-black text-white rounded-xl font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
