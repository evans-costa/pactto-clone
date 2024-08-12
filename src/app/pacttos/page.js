import InputField from "@/components/InputField";
import Section from "@/components/Section";
import SearchIcon from "@mui/icons-material/Search";

export default function Pacttos() {
  return (
    <Section>
      <h2 className="mt-8 text-4xl">Pacttos (Chats)</h2>
      <div className="mt-12 w-full pr-10">
        <InputField
          icon={<SearchIcon className="h-7 w-7 text-white" />}
          placeholder={"Search"}
          id={"search"}
          isLabelled={false}
        />
      </div>
    </Section>
  );
}
