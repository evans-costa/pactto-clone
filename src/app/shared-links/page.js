import Input from "@/components/Input";
import Section from "@/components/Section";

export default function SharedLinks() {
  return (
    <Section>
      <div className="mt-8 flex w-full flex-col gap-12">
        <h2 className="text-4xl">There are no public web links you created</h2>
        <Input />
      </div>
      <div className="mt-28 flex w-full flex-col gap-12">
        <h2 className="text-4xl">There are no private web links you created</h2>
        <Input />
      </div>
    </Section>
  );
}
