import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function page() {
  return (
    <main className="px-10">
      <section>
        <h2>공지사항</h2>
        <ul>
          <li>테스트테스트</li>
        </ul>
      </section>
      <section>
      <h2>FAQ</h2>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>문의사항은 어디로 전달드리면 되나요?</AccordionTrigger>
          <AccordionContent>
            UX그룹 조경문 매니저에게 메신저로 연락드리면 답변 해드리겠습니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </section>
      <section>
      <h2>ETRunner?</h2>
      <p>And You !</p>
      </section>
    </main>
  )
}
