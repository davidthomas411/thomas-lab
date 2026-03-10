import Link from "next/link"
import { ArrowLeft, Mail, MapPin } from "lucide-react"
import SiteLayout from "@/components/site-layout"
import ContactForm from "@/components/contact-form"
import NewsletterSignup from "@/components/newsletter-signup"
import ScrollAnimation from "@/components/scroll-animation"

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[600px] text-jefferson-brightBlue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions about our research or interested in collaboration? Get in touch with our team.
              </p>
              <Link href="/" className="jefferson-outline-button inline-flex">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </ScrollAnimation>
            <ScrollAnimation className="mx-auto w-full max-w-[500px]" delay={1}>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-jefferson-deepBlue/50 rounded-lg p-4 flex items-center">
                  <Mail className="h-10 w-10 text-jefferson-brightBlue mr-4" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Email Us</h3>
                    <a href="mailto:david.thomas2@jefferson.edu" className="text-jefferson-brightBlue hover:underline">
                      david.thomas2@jefferson.edu
                    </a>
                  </div>
                </div>
                <div className="bg-jefferson-deepBlue/50 rounded-lg p-4 flex items-center">
                  <MapPin className="h-10 w-10 text-jefferson-brightBlue mr-4" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Visit Us</h3>
                    <p className="text-gray-300">
                      Thomas Jefferson University
                      <br />
                      Philadelphia, PA
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-jefferson-deepBlue">
                  Send Us a Message
                </h2>
                <p className="text-jefferson-slate">
                  Fill out the form below and we'll get back to you as soon as possible. We're always interested in
                  discussing potential collaborations, research opportunities, or answering questions about our work.
                </p>
                <ContactForm />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={1}>
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden h-[300px] mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.5564437589814!2d-75.15849492346177!3d39.94883088655691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c89ab7451033%3A0x37d34a2d4b6c7c9c!2sThomas%20Jefferson%20University!5e0!3m2!1sen!2sus!4v1683056124582!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Thomas Jefferson University Map"
                  ></iframe>
                </div>

                <NewsletterSignup />

                <div className="bg-jefferson-deepBlue/5 rounded-lg p-6 border border-jefferson-deepBlue/10">
                  <h3 className="text-lg font-bold text-jefferson-deepBlue mb-4">Office Hours</h3>
                  <ul className="space-y-2 text-jefferson-slate">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>By appointment</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
