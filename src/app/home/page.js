import Button from "@/components/Button";
import Input from "@/components/Input";
import Section from "@/components/Section";
import Tag from "@/components/TagList/Tag";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  return (
    <Section>
      <h1 className="my-10 text-2xl text-white">
        Hey Evandro, welcome to Pactto!
      </h1>
      <div className="mr-10 flex flex-col gap-4">
        <Tag text={"Open your inbox and verify your email"} isDone={false} />
        <Tag
          text={
            <>
              Check this{" "}
              <a
                className="text-yellow underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/CvbvDGsZsKM?si=j8Hi4uCL0oKfX7oU&t=93">
                short video of Pactto in action
              </a>
            </>
          }
          id={"tutorial"}
        />
        <Tag
          text={
            <>
              Wanna record your computer screen or review files? Download Pactto
              for{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow underline"
                href="https://www.pactto.com/#download">
                Mac
              </a>{" "}
              or{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow underline"
                href="https://www.pactto.com/#download">
                Windows
              </a>
            </>
          }
          id={"desktop"}
        />
        <Tag
          text={
            <>
              Wanna review videos, images or audio files with your phone or
              tablet? Download Pactto for{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow underline"
                href="https://apps.apple.com/us/app/pactto-record-video-feedback/id1662226619">
                iOS
              </a>{" "}
              or{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow underline"
                href="https://play.google.com/store/apps/details?id=com.pactto.replay">
                Android
              </a>
            </>
          }
          id={"mobile"}
        />
      </div>

      <div className="mt-14 flex w-full flex-col pr-10">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl">My uploads</h2>
          <Button
            type={"button"}
            icon={<AddIcon />}
            label="Upload new video"
            background={"yellow"}
          />
        </div>
        <Input
          icon={<SearchIcon className="h-7 w-7 text-white" />}
          placeholder={"Search"}
          id="search"
        />
      </div>
    </Section>
  );
}
