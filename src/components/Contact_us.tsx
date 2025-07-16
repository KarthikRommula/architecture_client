import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const ContactPage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <b className="text-muted-foreground">Contact Us</b>
      <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
        Get In Touch
      </h2>
      <p className="mt-4 text-base sm:text-lg">
        Our friendly team is always here to chat.
      </p>
      <div className="max-w-screen-xl mx-auto pt-24 pb-8 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
        {/* Email */}
        <div className="text-center flex flex-col items-center rounded-xl shadow-md bg-card p-8 h-[300px] min-h-[300px] max-h-[300px]">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Email</h3>
          <p className="mt-2 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <a
            className="mt-4 font-medium text-primary"
            href="mailto:mdjaan4u@gmail.com"
          >
            mdjaan4u@gmail.com
          </a>
        </div>

        {/* Office */}
        <div className="text-center flex flex-col items-center rounded-xl shadow-md bg-card p-8 h-[300px] min-h-[300px] max-h-[300px]">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Office</h3>
          <p className="mt-2 text-muted-foreground">
            Come say hello at our office HQ.
          </p>
          <a
            className="mt-4 font-medium text-primary"
            href="https://map.google.com/?q=Kashipur, Uttarakhand 
"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kashipur, Uttarakhand 
 <br /> 
          </a>
        </div>

        {/* Phone */}
        <div className="text-center flex flex-col items-center rounded-xl shadow-md bg-card p-8 h-[300px] min-h-[300px] max-h-[300px]">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Phone</h3>
          <p className="mt-2 text-muted-foreground">Mon–Fri from 8am to 5pm.</p>
          <a
            className="mt-4 font-medium text-primary"
            href="https://wa.me/919810762877"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 9810762877
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
