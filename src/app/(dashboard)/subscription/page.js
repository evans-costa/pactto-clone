import Section from "@/components/Section";
import UpdgradeDialog from "@/components/UpgradeDialog";
import { subscriptionsData } from "@/lib/subscriptionData";

import CheckIcon from "@mui/icons-material/Check";

export default function Subscription() {
  return (
    <Section>
      <div className="mt-10 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium text-gray">
            You have access to <b className="text-gray-light">PACTTO PRO </b>as
            a trial.
            <b className="text-gray-light"> 1 days left</b>
          </p>
          <div className="w-full">
            <UpdgradeDialog button label={"Subscribe to Pactto Pro"} />
          </div>
          <p className="text-base font-medium text-gray">
            The PACTTO PRO subscription allows you to:
          </p>
        </div>
        <ul className="text-base font-medium leading-loose text-gray">
          {subscriptionsData.map((data) => (
            <li className="flex items-center gap-3" key={data.id}>
              <CheckIcon className="h-5 w-5 text-yellow" />
              {data.text}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
