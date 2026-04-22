export default function Docs() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 flex gap-12">
        {/* Sidebar */}
        <aside className="w-64 hidden lg:block shrink-0 border-r border-black/5 min-h-[500px]">
          <h4 className="font-bold text-xs uppercase tracking-widest text-on-surface-variant mb-4">Getting Started</h4>
          <ul className="space-y-3 font-semibold text-sm">
            <li className="text-primary cursor-pointer">Quickstart Guide</li>
            <li className="text-on-surface-variant hover:text-on-surface cursor-pointer">Authentication</li>
            <li className="text-on-surface-variant hover:text-on-surface cursor-pointer">Network Architecture</li>
          </ul>
          
          <h4 className="font-bold text-xs uppercase tracking-widest text-on-surface-variant mb-4 mt-10">Agent APIs</h4>
          <ul className="space-y-3 font-semibold text-sm">
            <li className="text-on-surface-variant hover:text-on-surface cursor-pointer">Swarm Orchestration</li>
            <li className="text-on-surface-variant hover:text-on-surface cursor-pointer">Semantic Memory</li>
            <li className="text-on-surface-variant hover:text-on-surface cursor-pointer">Edge Deployment</li>
          </ul>
        </aside>

        {/* Content */}
        <div className="flex-1 max-w-3xl">
          <h1 className="font-headline text-5xl font-black text-on-surface mb-6">Quickstart Guide</h1>
          <p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed">
            Welcome to the AIEA Agents Documentation. This guide will walk you through initializing your first intelligent node array and authenticating your API requests.
          </p>

          <div className="prose max-w-none prose-h2:font-headline prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-10 mb-8">
            <h2>1. Obtain your API Key</h2>
            <p className="text-on-surface-variant">Log into your AIEA Developer Dashboard and generate a new secure connection token. Keep this key secret, as it provides administrative access to your agent clusters.</p>
            
            <h2>2. Install the SDK</h2>
            <p className="text-on-surface-variant">We provide native SDKs for Node.js, Python, and Go. To install the Node package:</p>
            <div className="bg-black text-white p-4 rounded-xl font-mono text-sm shadow-lg my-4">
              npm install @aiea-agents/sdk
            </div>
            
            <h2>3. Initialize the Client</h2>
            <p className="text-on-surface-variant">Require the client in your application and initialize it using your key.</p>
            <div className="bg-black text-white p-4 rounded-xl font-mono text-sm shadow-lg my-4">
              {`import { AIEAClient } from '@aiea-agents/sdk';\n\nconst client = new AIEAClient({\n  apiKey: process.env.AIEA_API_KEY\n});`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
