import { useState } from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only — no actual submission
    alert('Thanks for reaching out! We\'ll get back to you soon. 🧡');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'store@suprbaby.in',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+91 9899569351',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Ashok Vihar, New Delhi, India',
    },
  ];

  return (
    <div className="bg-secondary min-h-screen pt-28 pb-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary opacity-70 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Get in Touch
            </p>
            <h1 className="text-primary text-4xl md:text-6xl font-black mb-4">
              Let's Talk
            </h1>
            <p className="text-primary opacity-70 text-base max-w-xl mx-auto leading-relaxed">
              Have a question, partnership idea, or just want to say hey? We'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form — 3 columns */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-secondary text-primary border-2 border-primary rounded-xl px-5 py-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700 ease-in-out min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-secondary text-primary border-2 border-primary rounded-xl px-5 py-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700 ease-in-out min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="w-full bg-secondary text-primary border-2 border-primary rounded-xl px-5 py-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700 ease-in-out min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us everything..."
                    rows={6}
                    required
                    className="w-full bg-secondary text-primary border-2 border-primary rounded-xl px-5 py-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700 ease-in-out resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-secondary font-bold text-base px-10 py-4 rounded-full transition-all duration-700 ease-in-out hover:bg-secondary hover:text-primary border-2 border-primary min-h-[44px]"
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>

          {/* Contact Info — 2 columns */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right">
              <div className="space-y-8">
                {/* Info Cards */}
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 border-2 border-primary rounded-2xl p-6 transition-all duration-700 ease-in-out hover:bg-primary group"
                  >
                    <div className="bg-primary text-secondary rounded-full p-3 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-700 ease-in-out group-hover:bg-secondary group-hover:text-primary">
                      <info.icon size={22} />
                    </div>
                    <div>
                      <p className="text-primary font-bold text-sm uppercase tracking-wider mb-1 transition-all duration-700 ease-in-out group-hover:text-secondary">
                        {info.label}
                      </p>
                      <p className="text-primary opacity-80 text-base transition-all duration-700 ease-in-out group-hover:text-secondary group-hover:opacity-80">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Socials */}
                <div className="border-2 border-primary rounded-2xl p-6">
                  <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-4">
                    {[
                      { icon: FaInstagram, label: 'Instagram' },
                      { icon: HiMail, label: 'Email' },
                    ].map(({ icon: Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="text-primary border-2 border-primary rounded-full p-3 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-700 ease-in-out hover:bg-primary hover:text-secondary"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* FAQ hint */}
                <div className="bg-primary rounded-2xl p-6">
                  <h4 className="text-secondary font-bold text-lg mb-2">
                    Quick Question?
                  </h4>
                  <p className="text-secondary opacity-80 text-sm leading-relaxed">
                    Most questions are answered within 24 hours. For urgent matters, DM us on Instagram — we're always around.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
