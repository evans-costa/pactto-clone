"use client";
import { useState } from "react";

import Button from "@/components/Button";
import PackageForm from "@/components/Forms/Package";
import Section from "@/components/Section";
import AddIcon from "@mui/icons-material/Add";

export default function Packages() {
  const [packageForms, setPackageForms] = useState([{ id: 0 }]);

  function addPackageForm() {
    const newId =
      packageForms.length > 0
        ? packageForms[packageForms.length - 1].id + 1
        : 0;
    setPackageForms([...packageForms, { id: newId }]);
  }

  function handleDelete(id) {
    setPackageForms(packageForms.filter((form) => form.id !== id));
  }

  return (
    <Section>
      <div className="sticky top-6 flex w-full items-center">
        <div className="flex w-full">
          <Button
            label={"Add Package"}
            background={"bg-yellow"}
            onClick={addPackageForm}
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
            background={"bg-green-light"}
            form={"package-info"}
          />
        </div>
      </div>
      <div className="mt-20 flex h-screen w-full flex-col overflow-auto">
        {packageForms.map((form) => (
          <PackageForm key={form.id} id={form.id} handleDelete={handleDelete} />
        ))}
      </div>
    </Section>
  );
}
