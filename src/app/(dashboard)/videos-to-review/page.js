import Input from "@/components/InputField";
import Section from "@/components/Section";
import SearchIcon from "@mui/icons-material/Search";

export default function VideosToReview() {
  return (
    <Section>
      <h2 className="mt-8 text-4xl">
        There are no review requests sent to you
      </h2>
      <div className="mt-12 w-full pr-10">
        <Input
          icon={<SearchIcon className="h-7 w-7 text-white" />}
          placeholder={"Search"}
          id={"search"}
          isLabelled={false}
        />
      </div>
    </Section>
  );
}
