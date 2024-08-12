import Button from "@/components/Button";
import PackageForm from "@/components/Forms/Package";
import Section from "@/components/Section";
import AddIcon from "@mui/icons-material/Add";

export default function Packages() {
  return (
    <Section>
      <div className="sticky top-6 flex w-full items-center">
        <div className="flex w-full">
          <Button
            label={"Add Package"}
            background={"bg-yellow"}
            form={"package-info"}
            icon={<AddIcon />}
          />
        </div>
        <div className="flex w-full justify-end gap-4 pr-8">
          <Button
            label={"Save Changes"}
            background={"bg-yellow"}
            disabled={true}
            form={"package-info"}
          />
          <Button
            label={"Payment Details"}
            background={"bg-green"}
            form={"package-info"}
          />
        </div>
      </div>
      <div className="mt-20 flex h-screen w-full overflow-auto">
        <PackageForm />
      </div>
    </Section>
  );
}
