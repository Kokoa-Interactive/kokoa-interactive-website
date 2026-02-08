import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        "bot-field": formData.botField,
      });

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        botField: "",
      });

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Message not sent",
        description: "Something went wrong. Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Send a Message
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Drop a message and I’ll
            reply as soon as possible.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6 text-gray-300">
            <div className="rounded-2xl bg-slate-800/60 p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Let’s build something together
              </h3>
              <p className="text-gray-300 mb-6">
                Whether it’s a new game idea, a partnership, or feedback about my
                work, I’d love to hear from you.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                  Share project details or timelines.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                  Ask about collaborations or availability.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                  Tell me what you’d like to see next.
                </li>
              </ul>
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="rounded-2xl bg-slate-800/80 p-8 border border-slate-700 space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>
                Don’t fill this out if you’re human:
                <input
                  name="bot-field"
                  value={formData.botField}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300" htmlFor="subject">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What’s this about?"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share a few details..."
                rows={6}
                required
              />
            </div>

            <div className="pt-2">
              <div data-netlify-recaptcha="true"></div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"}
              <Send />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
