import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Facebook, Github, Twitter, MessageCircle, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // EmailJS Configuration from environment variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_portfolio_contact";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_website_form";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "user_AbC123dEf456gHi789";

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured. Please try again later.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Validate form data
      contactSchema.parse(formData);
      
      setIsSubmitting(true);

      // Send email using EmailJS - using common parameter names
      const templateParams = {
        user_name: formData.name,      // Common parameter name in EmailJS templates
        user_email: formData.email,    // Common parameter name in EmailJS templates
        message: formData.message,
        to_email: "duolpuot06@gmail.com",
        reply_to: formData.email,      // For better email functionality
        from_name: formData.name,      // Alternative parameter name
        from_email: formData.email,    // Alternative parameter name
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", response);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error("Error sending email:", error);
      
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else if (error instanceof Error) {
        // More specific error handling for EmailJS
        toast({
          title: "Failed to Send",
          description: error.message || "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Failed to Send",
          description: "There was an error sending your message. Please try again or contact me directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "duolpuot06@gmail.com",
      href: "mailto:duolpuot06@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251996251606",
      href: "tel:+251996251606",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Arba Minch, Ethiopia",
      color: "text-accent",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      color: "text-primary hover:text-primary",
      href: "https://facebook.com",
    },
    {
      icon: Github,
      label: "GitHub",
      color: "text-foreground hover:text-primary",
      href: "https://github.com",
    },
    {
      icon: Twitter,
      label: "Twitter",
      color: "text-secondary hover:text-secondary",
      href: "https://twitter.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      color: "text-accent hover:text-accent",
      href: "https://wa.me/251996251606",
    },
    {
      icon: Linkedin,
      label: "Linkedin",
      color: "text-primary hover:text-primary",
      href: "https://www.linkedin.com/feed/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${info.color}`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Connect on Social Media</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background border-border min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;