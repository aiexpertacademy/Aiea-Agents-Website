export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-screen-md mx-auto px-6 lg:px-8">
        <h1 className="font-headline text-5xl font-black text-on-surface mb-6">Terms of Service</h1>
        <p className="font-body text-sm text-on-surface-variant mb-10">Last updated: September 2024</p>
        
        <div className="prose max-w-none text-on-surface-variant space-y-6">
          <p>
            By accessing or using the AIEA Agents platform, APIs, or SDKs, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-on-surface mt-10 mb-4">1. Acceptable Use Policy</h2>
          <p>
            You agree not to use the AIEA Agents to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Generate malicious code, malware, or coordinate cyberattacks.</li>
            <li>Spam, defraud, or impersonate individuals or organizations.</li>
            <li>Process highly classified government data without deploying our secure On-Prem VPC solution.</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold text-on-surface mt-10 mb-4">2. Infrastructure & Rate Limits</h2>
          <p>
            While we strive for 99.9% uptime, API access is subject to our fair-use rate limits depending on your tier. Intentional circumvention of rate limits may result in immediate suspension of your API key.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-on-surface mt-10 mb-4">3. Limitation of Liability</h2>
          <p>
            AIEA Agents output generation relies on probabilistic models. We do not guarantee the absolute accuracy, reliability, or correctness of generated responses. You are responsible for verifying all agent outputs before executing them in production environments.
          </p>
        </div>
      </div>
    </div>
  );
}
