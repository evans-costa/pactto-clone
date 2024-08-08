import Input from "@/components/Input";
import FormCheckbox from "../FormCheckbox";
import FormDropdown from "../FormDropdown";
import FormInput from "../FormInput";

export default function ProfileForm() {
  return (
    <form
      autoComplete="true"
      id="personal-info"
      className="mr-10 flex max-w-3xl flex-col gap-14 text-lg font-medium text-white">
      <div className="flex flex-col gap-6">
        <FormInput placeholder={"First name"} id={"firstname"} />
        <FormInput placeholder={"Last name"} id={"lastname"} />
        <FormInput placeholder={"Email"} id={"email"} />
        <FormDropdown />
      </div>
      <div className="flex flex-col gap-6">
        <p>What is your main activity/activities?</p>
        <div className="ml-4 flex flex-col items-start justify-center gap-4">
          <FormCheckbox id={"Video"} />
          <FormCheckbox id={"Design"} />
          <FormCheckbox id={"Development"} />
          <FormCheckbox id={"Sports"} />
          <FormCheckbox id={"Medical"} />
          <FormCheckbox id={"Inspections"} />
        </div>
        <Input placeholder={"Other"} id={"other"} />
      </div>
      <div className="flex flex-col gap-6">
        <p>User handle and password</p>
        <FormInput
          placeholder={"User name, your Pactto handle (e.g. johnsmith)"}
          id={"username"}
        />
        <FormInput placeholder={"Password"} id={"password"} type={"password"} />
        <FormInput
          placeholder={"Confirm password"}
          id={"confirm-password"}
          type={"password"}
        />
      </div>
    </form>
  );
}
