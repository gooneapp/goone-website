import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchInquiries() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';
        const response = await fetch(`${apiUrl}/contact/inquiries`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch inquiries');
        }

        const json = await response.json();
        if (json.success) {
          setInquiries(json.data);
        } else {
          throw new Error(json.error?.message || 'Failed to fetch inquiries');
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchInquiries();
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin - Contact Inquiries | GoOne</title>
      </Helmet>
      
      <div className="container py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Inquiries</h1>

        {loading && <p className="text-muted-foreground">Loading inquiries...</p>}
        {error && <p className="text-destructive font-medium">Error: {error}</p>}
        
        {!loading && !error && (
          <div className="rounded-md border overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground uppercase">
                <tr>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Message</th>
                  <th className="px-6 py-4 font-medium">Date (Local)</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {inquiries.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                      No inquiries found.
                    </td>
                  </tr>
                ) : (
                  inquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">{inq.name}</td>
                      <td className="px-6 py-4">{inq.email}</td>
                      <td className="px-6 py-4 max-w-xs truncate" title={inq.message}>
                        {inq.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {format(new Date(inq.createdAt), 'dd MMM yyyy, hh:mm a')}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                          ${inq.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                          {inq.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
