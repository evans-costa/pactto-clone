import Input from "@/components/Input";
import Section from "@/components/Section";
import SearchIcon from "@mui/icons-material/Search";

export default function SharedLinks() {
  return (
    <Section>
      <div className="mt-8 flex w-full flex-col gap-12 pr-10">
        <h2 className="text-4xl">There are no public web links you created</h2>
        <Input
          icon={<SearchIcon className="h-7 w-7 text-white" />}
          placeholder={"Search"}
          id={"search"}
        />
      </div>
      <div className="mt-28 flex w-full flex-col gap-12 pr-10">
        <h2 className="text-4xl">There are no private web links you created</h2>
        <Input
          icon={<SearchIcon className="h-7 w-7 text-white" />}
          placeholder={"Search"}
          id={"search"}
        />
      </div>
    </Section>
  );
}
