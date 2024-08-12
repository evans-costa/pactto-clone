import Button from "@/components/Button";
import ProfileForm from "@/components/Forms/Profile";
import Section from "@/components/Section";

export default function PersonalInfo() {
  return (
    <Section>
      <div className="sticky top-6 flex w-full justify-end gap-4 pr-8">
        <Button
          label={"Reset Changes"}
          background={"bg-gray"}
          type={"reset"}
          form={"personal-info"}
        />
        <Button
          type={"submit"}
          label={"Save Changes"}
          background={"bg-yellow"}
          form={"personal-info"}
        />
      </div>
      <div className="mt-20 flex h-screen w-full flex-col overflow-auto">
        <ProfileForm />
        <p className="my-14 text-xs font-medium text-gray">
          To delete your Pactto account and remove your data permanently from
          all Pactto apps and services, please click here.
        </p>
      </div>
    </Section>
  );
}
