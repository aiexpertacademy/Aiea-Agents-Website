export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-screen-md mx-auto px-6 lg:px-8">
        <h1 className="font-headline text-5xl font-black text-on-surface mb-6">Privacy Policy</h1>
        <p className="font-body text-sm text-on-surface-variant mb-10">Last updated: September 2024</p>
        
        <div className="prose max-w-none text-on-surface-variant space-y-6">
          <p>
            At AIEA Agents, we prioritize the protection of your personal and enterprise data. This Privacy Policy outlines the types of information we collect when you use our AI agent platform and how we manage it.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-on-surface mt-10 mb-4">1. Information We Collect</h2>
          <p>
            We collect the data necessary to provision, maintain, and optimize your agent network. This includes account credentials, usage metrics (API calls, token volume), and anonymized execution logs. 
          </p>

          <h2 className="font-headline text-2xl font-bold text-on-surface mt-10 mb-4">2. Zero-Retention Execution</h2>
          <p>
            Any files, documents, or data payloads passed to our agents via the API are processed in volatile memory. Unless explicitly saved to your secured Knowledge Base module, all input payloads are permanently destroyed milliseconds after the agent returns a response.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-on-surface mt-10 mb-4">3. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share necessary telemetry with certified third-party infrastructure providers (e.g., AWS, GCP) strictly for the purpose of maintaining server uptime and scalability.
          </p>
        </div>
      </div>
    </div>
  );
}
