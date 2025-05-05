import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/edit-form";
import { Metadata } from 'next';
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Modification de factures"
} 

export default async function page(props: { params: Promise<{ id: string}>}) {
    const params = await props.params;
    const id = params.id;

    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ])

    if (!invoice) {
        notFound();
    }

    return (
      <main>
          <Breadcrumbs 
              breadcrumbs={[
                  { label: 'Factures', href: '/dashboard/invoices'},
                  { 
                      label: 'Modifier la facture', 
                      href: `/dashboard/invoices/${id}/edit`,
                      active: true
                  },
              ]}
          />

          <Form invoice={invoice} customers={customers} />
      </main>
    )
}
