import Input from "@/components/Input";
import Section from "@/components/Section";

export default function VideosToReview() {
  return (
    <Section>
      <h2 className="mt-8 text-4xl">
        There are no review requests sent to you
      </h2>
      <div className="mt-12 w-full">
        <Input />
      </div>
    </Section>
  );
}
