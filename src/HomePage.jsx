export default function HomePage() {
  return (
    <main className="max-w-4xl font-satoshi text-neutral-900 px-6 py-20">
      {/* Intro */}
      <section className="space-y-6 mb-20">
        <h1 className="text-4xl font-medium">Hi, I’m Sandesh.</h1>
        <p className="text-lg text-neutral-700 max-w-2xl">
          I help teams design thoughtful, scalable digital experiences—by connecting user needs with product vision and systems that work.
        </p>
        <p className="text-base text-neutral-600 max-w-2xl">
          I’m currently the Director of User Experience Design at Sam’s Club (Walmart Global Tech). Previously, I led design at Microsoft, HP, and Yahoo—working across productivity tools, emerging markets, and hardware-software ecosystems.
        </p>
      </section>

      {/* Selected Work */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Selected Work</h2>
        <ul className="grid gap-6">
          <li>
            <a href="/sprightly" className="block hover:bg-neutral-50 p-4 rounded border border-neutral-200">
              <h3 className="text-lg font-semibold mb-1">Sprightly – Microsoft Garage</h3>
              <p className="text-sm text-neutral-600">Mobile-first content creation for microbusinesses in emerging markets.</p>
            </a>
          </li>
          <li>
            <a href="/teams-files" className="block hover:bg-neutral-50 p-4 rounded border border-neutral-200">
              <h3 className="text-lg font-semibold mb-1">Files App – Microsoft Teams</h3>
              <p className="text-sm text-neutral-600">Redesigning workflows to improve file navigation and clarity across desktop and mobile.</p>
            </a>
          </li>
          <li>
            <a href="/hp-printers" className="block hover:bg-neutral-50 p-4 rounded border border-neutral-200">
              <h3 className="text-lg font-semibold mb-1">HP OfficeJet – Inkjet for SMBs</h3>
              <p className="text-sm text-neutral-600">Design strategy and physical UX for printers used by small businesses in India and APAC.</p>
            </a>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Experience</h2>
        <ul className="text-base text-neutral-700 space-y-1">
          <li>Director of User Experience Design, <a href="https://www.samsclub.com" className="hover:underline">Sam’s Club</a> – Current</li>
          <li>Senior Design Manager, <a href="https://www.microsoft.com" className="hover:underline">Microsoft</a></li>
          <li>Senior Designer, <a href="https://www.hp.com" className="hover:underline">HP</a></li>
          <li>Lead Interaction Designer, <a href="https://www.yahoo.com" className="hover:underline">Yahoo!</a></li>
        </ul>
      </section>

      {/* Patents */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Publications & Patents</h2>
        <ul className="text-base text-neutral-700 space-y-1">
          <li><a href="/gesture-keyboard" className="hover:underline">Gesture Keyboard – HP Labs</a></li>
          <li><a href="/imaging-device" className="hover:underline">Imaging Device – HP</a></li>
        </ul>
      </section>

      {/* Leadership Learnings */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">What I’ve Learned as a Design Leader</h2>
        <div className="space-y-4 text-base text-neutral-700">
          <p>Over the years, I’ve realized that leading design isn’t about doing the work myself—it’s about setting the conditions for great design to happen.</p>
          <p>Early in my career, I focused on craft. Now, I focus on building teams, aligning direction, and helping others grow. At Sam’s Club, I’ve seen firsthand how design thrives when there’s clarity, trust, and a shared sense of purpose.</p>
          <p>Some lessons that have stuck with me:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Direction matters more than speed.</strong> If the team is clear on where we're going, we move better together.</li>
            <li><strong>Design culture is built, not assumed.</strong> Critiques, rituals, onboarding—they shape how a team works and grows.</li>
            <li><strong>Coaching is part of the job.</strong> Helping designers ask better questions is more impactful than having all the answers.</li>
            <li><strong>Design is a system.</strong> It's not just about interfaces—it’s people, process, expectations, and outcomes.</li>
          </ul>
          <p>I’m still learning. But what I try to do every day is bring structure without stifling creativity—and make space for people to do their best work.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-10 mt-10 border-t border-neutral-200 text-left text-sm text-neutral-500">
        © {new Date().getFullYear()} Sandesh Halarnkar · <a href="https://linkedin.com/in/sandeshhalarnkar" className="hover:underline">LinkedIn</a> · <a href="mailto:sandesh@example.com" className="hover:underline">Email</a>
      </footer>
    </main>
  );
}
