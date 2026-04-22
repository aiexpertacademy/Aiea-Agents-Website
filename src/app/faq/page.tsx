export default function FAQ() {
  const faqs = [
    {
      q: "What is an AIEA Agent?",
      a: "An AIEA Agent is an autonomous, hyper-specialized AI node designed to execute complex professional workflows natively, from designing UI wireframes to auditing smart contracts."
    },
    {
      q: "How does the consumption billing work?",
      a: "Our basic and pro tiers issue a set number of API tokens each month. If you exceed your limit, you will be billed transparently for overages at exactly $0.005 per 1,000 tokens."
    },
    {
      q: "Is my enterprise data used to train the global models?",
      a: "Absolutely not. Enterprise-tier customers operate in a zero-retention environment. Model weights are isolated, and your private data is obliterated immediately after processing."
    },
    {
      q: "Can I deploy the agents on my own private cloud?",
      a: "Yes. Enterprise customers have access to Dockerized containers to host the models directly on their VPCs for maximum security compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8F9] pt-32 pb-24">
      <div className="max-w-screen-md mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-headline text-5xl font-black text-on-surface mb-6">Frequently Asked Questions</h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto">
            Everything you need to know about integrating our agent platform.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <h3 className="font-headline text-xl font-bold text-on-surface mb-4">{faq.q}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
