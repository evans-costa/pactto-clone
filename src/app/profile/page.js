import Button from "@/components/Button";
import WebsiteForm from "@/components/Forms/Website";
import Section from "@/components/Section";

export default function Profile() {
  return (
    <Section>
      <div className="sticky top-6 flex w-full items-center justify-end gap-4 pr-8">
        <h2 className="flex-1 text-3xl">Please edit your Pactto page below</h2>
        <Button label={"Launch"} background={"bg-gray"} form={"website-info"} />
        <Button
          type={"submit"}
          label={"Save"}
          background={"bg-yellow"}
          form={"website-info"}
        />
      </div>
      <div className="mt-20 flex h-screen w-full flex-col overflow-auto">
        <WebsiteForm />
      </div>
    </Section>
  );
}
