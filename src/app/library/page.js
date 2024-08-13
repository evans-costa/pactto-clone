import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Section from "@/components/Section";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export default function Pacttos() {
  return (
    <Section>
      <div className="sticky top-6 mb-10 flex w-full items-center justify-end gap-4 pr-8">
        <h2 className="flex-1 text-3xl">Select a video</h2>
        <label
          htmlFor="video"
          className="flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-yellow px-5 py-3 text-base font-bold uppercase text-gray-dark">
          <AddIcon /> Upload New Video
          <input
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            name="video"
            id="video"
            hidden></input>
        </label>
      </div>
      <div className="mt-12 w-full pr-10">
        <p className="mb-4 text-sm font-medium text-gray">
          Videos uploaded to the reference video library can be used in
          side-by-side comparisons, or can be shared with learners directly.
        </p>
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
