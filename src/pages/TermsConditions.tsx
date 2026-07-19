import { Helmet } from 'react-helmet-async';

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | GoOne</title>
        <meta name="description" content="GoOne Terms & Conditions." />
      </Helmet>
      
      <div className="container py-24 max-w-3xl prose dark:prose-invert">
        <h1>Terms & Conditions</h1>
        <p className="text-muted-foreground">Last updated: July 2026</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using GoOne's platform, including the Customer App, Business App, Delivery App, and Admin CMS, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          GoOne provides a Business Operating System that connects local businesses, customers, and delivery partners. We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.
        </p>

        <h2>3. User Conduct</h2>
        <p>
          You agree to use the Service only for lawful purposes. You agree not to take any action that might compromise the security of the Service, render the Service inaccessible to others, or otherwise cause damage to the Service or its content.
        </p>

        <h2>4. Digital Credit Book (Udhar Khata)</h2>
        <p>
          The digital credit book is a ledger for record-keeping purposes. GoOne is not a financial institution and is not responsible for the collection or settlement of debts recorded on the platform.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall GoOne be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use the service.
        </p>

        <h2>6. Contact</h2>
        <p>
          For any legal inquiries regarding these terms, please contact legal@goone.in.
        </p>
      </div>
    </>
  );
}
