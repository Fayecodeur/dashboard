import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from '@/app/ui/invoices/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Création de facture"
} 

export default async function page() {

  const customers = await fetchCustomers();

  return (
    <main>
        <Breadcrumbs 
            breadcrumbs={[
                { label: "Facture", href: '/dashboard/invoices' },
                { 
                    label: "Créer une facture", 
                    href: '/dashboard/invoices/create', 
                    active: true, 
                },
            ]}
        />
        <Form customers={customers} />
    </main>
  )
}
