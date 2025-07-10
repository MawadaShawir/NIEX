import TagLine from "./TagLine";

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center p-6 text-center">
      <TagLine>Testimonials</TagLine>
      <h2 className="text-3xl font-bold text-center mt-3 mb-8">
        What builders say about us
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left">
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/testimonials/1.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p className="font-medium">User</p>
            </div>
            <p className="text-sm">
              Switching to the AI Form Builder cut our onboarding time in half.
              We’re finally able to automate what used to be a chaotic mess
            </p>
          </div>

          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/testimonials/2.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p className="font-medium">User</p>
            </div>
            <p className="text-sm">
              Our marketing team can now build forms without dev support. It’s
              intuitive, clean, and just works. Total game changer
            </p>
          </div>

          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/testimonials/3.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p className="font-medium">User</p>
            </div>
            <p className="text-sm">
              From compliance to customization, this tool covers everything we
              need. We’ve never felt more secure handling sensitive data
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/testimonials/4.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p className="font-medium">User</p>
            </div>
            <p className="text-sm">
              Form performance has skyrocketed. Our completion rates jumped by
              40% since switching, the UX really makes a difference.
            </p>
          </div>

          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/testimonials/5.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p className="font-medium">User</p>
            </div>
            <p className="text-sm">
              I didn’t expect enterprise level features at this price. It’s
              scalable, reliable, and the support team is insanely responsive.
            </p>
          </div>

          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/testimonials/6.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p className="font-medium">User</p>
            </div>
            <p className="text-sm">
              Localization used to be a pain. Now, with multi language support,
              we’re running smooth across five regions. Love it.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/testimonials/7.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p className="font-medium">User</p>
            </div>
            <p className="text-sm">
              We’re collecting better data, faster. The logic-based flows are so
              powerful. it’s like having a mini dev team in the tool.
            </p>
          </div>

          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/testimonials/8.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p className="font-medium">User</p>
            </div>
            <p className="text-sm">
              I’ve tried a dozen platforms. This one stands out for its clarity
              and flexibility. Everything is right where you expect it to be
            </p>
          </div>

          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/testimonials/9.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p className="font-medium">User</p>
            </div>
            <p className="text-sm">
              Training new team members is easier now. The UI is
              straightforward, and even non-tech folks can build forms without a
              hitch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
