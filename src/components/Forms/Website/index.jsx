import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import FormInput from "../FormInput";

export default function WebsiteForm() {
  return (
    <form
      autoComplete="true"
      id="website-info"
      className="mb-10 mr-10 flex max-w-5xl flex-col gap-14 text-lg font-medium text-white">
      <div className="flex flex-col gap-6">
        <p>Avatar</p>
        <label
          htmlFor="image"
          className="group/item relative z-0 flex w-fit cursor-pointer flex-col items-center justify-center rounded-full">
          <Image
            src="/images/avatar-placeholder.png"
            height={43}
            width={140}
            className="rounded-full"
            alt="Avatar logo icon"
          />
          <div className="group/edit invisible absolute z-10 flex h-full w-full items-center justify-center rounded-full transition-all hover:bg-neutral-600/70 group-hover/item:visible">
            <span className="group-hover/edit: text-xl text-white">Change</span>
          </div>
          <input
            type="file"
            accept="image/x-png, image/jpeg"
            name="image"
            id="image"
            hidden
            className="rounded-full"></input>
        </label>
      </div>
      <div className="flex flex-col gap-6">
        <p>Carousel</p>
        <label
          htmlFor="carousel"
          className="flex w-fit cursor-pointer items-center justify-center rounded-full bg-yellow px-5 py-3 text-base font-bold uppercase text-gray-dark">
          <AddIcon /> Add Image
          <input
            type="file"
            accept="image/x-png, image/jpeg"
            name="carousel"
            id="carousel"
            hidden></input>
        </label>
      </div>
      <div className="flex flex-col gap-6">
        <label>Hero</label>
        <FormInput placeholder={"Public Name"} id={"public-name"} />
        <FormInput placeholder={"Headline"} id={"headline"} />
      </div>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <label>About me</label>
          <textarea
            id="description"
            placeholder="Description"
            rows={10}
            cols={50}
            className="max-h-full w-full rounded-md border-none bg-white/10 p-3 text-base font-medium text-white/80 outline-0 placeholder:text-base placeholder:text-white/50 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-0"
          />
        </div>
        <div className="flex flex-col gap-6">
          <FormInput placeholder={"Expertise Title"} id={"expertise-title"} />
          <FormInput placeholder={"Add expertise"} id={"add-expertise"} />
        </div>
        <div className="flex flex-col gap-6">
          <FormInput placeholder={"Awards Title"} id={"awards-title"} />
          <FormInput placeholder={"Add award"} id={"add-award"} />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <label>Give me a follow</label>
        <FormInput
          placeholder={"Add social media channel"}
          type={"url"}
          id={"social-media"}
        />
      </div>
      <div className="flex flex-col gap-6">
        <label>Youtube video</label>
        <FormInput
          placeholder={"YouTube video URL"}
          type={"url"}
          id={"youtube"}
        />
      </div>
      <div className="flex flex-col gap-6">
        <label>Footer</label>
        <textarea
          id="quote"
          placeholder="Quote"
          rows={10}
          cols={50}
          className="max-h-full w-full rounded-md border-none bg-white/10 p-3 text-base font-medium text-white/80 outline-0 placeholder:text-base placeholder:text-white/50 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-0"
        />
        <FormInput placeholder={"Quote author"} id={"quote-author"} />
      </div>
    </form>
  );
}
