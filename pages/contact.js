import { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For static sites, we'll use a mailto link as fallback
    // In a real deployment, you could use services like Formspree, Netlify Forms, or EmailJS
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:amorcecian@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <Layout title="Contact - Aram Morcecian">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Get In Touch
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a 
                      href="mailto:amorcecian@gmail.com" 
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      amorcecian@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a 
                      href="tel:+5491169418682" 
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +54 911 6941 8682
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                    <MapPin className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-700 dark:text-gray-300">Buenos Aires, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Linkedin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <a 
                      href="http://linkedin.com/in/aram-morcecian" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/aram-morcecian
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Let's Connect!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I'm always interested in discussing new opportunities, 
                  data engineering challenges, or potential collaborations. 
                  Feel free to reach out!
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Send Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-400 rounded-lg">
                  Your default email client should open with the message. If not, please email me directly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-vertical"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Opening Email Client...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
              
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                * This form will open your default email client with the message pre-filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 