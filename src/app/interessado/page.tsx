import { LeadForm } from '@/modules/Leads'
import { Text } from '@/shared/components/Text'

const textIntro = {
  title: 'Interessado em praticar?',
  information: `Preencha o formulário abaixo para receber mais informações sobre o aulas de Krav Maga.`,
}

export default function Instrutores() {
  return (
    <section>
      <Text variant="h2" className="max-w-2xl text-brand-light">
        {textIntro.title}
      </Text>
      <Text variant="p" className="text-brand-light">
        {textIntro.information}
      </Text>
      <LeadForm />
    </section>
  )
}
